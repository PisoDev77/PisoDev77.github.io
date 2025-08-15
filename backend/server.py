from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
from datetime import datetime
import uuid

app = FastAPI(title="Portfolio API (Static Mode)", version="1.0.1")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# No database in static mode
mongo_available = False

# Pydantic models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime
    status: str = "unread"

# Minimal static data (unused by frontend now, but kept for compatibility)
PORTFOLIO_DATA = {
    "hero": {
        "name": "송승학",
        "title": "Frontend Developer",
        "subtitle": "좋은 가독성과 직관적인 방식으로 소통하려는 프론트엔드 개발자를 목표합니다.",
        "description": "직관적인 코드 작성과 효과적인 협업을 통해 사용자 경험을 개선하는 프론트엔드 개발자",
        "image": "/images/face.jpg",
    }
}

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow(),
        "mode": "static",
    }

@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_message(message: ContactMessage):
    try:
        message_doc = {
            "id": str(uuid.uuid4()),
            "name": message.name,
            "email": message.email,
            "subject": message.subject,
            "message": message.message,
            "created_at": datetime.utcnow(),
            "status": "unread",
        }

        if not hasattr(app.state, "temp_messages"):
            app.state.temp_messages = []
        app.state.temp_messages.append(message_doc)

        return ContactResponse(**message_doc)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit message: {str(e)}")

@app.get("/api/contact/messages")
async def get_contact_messages():
    try:
        return getattr(app.state, "temp_messages", [])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve messages: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)