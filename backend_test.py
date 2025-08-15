#!/usr/bin/env python3
"""
Backend API Testing Suite for Professional Portfolio
Tests all backend endpoints for functionality and data integrity
"""

import requests
import json
import os
from datetime import datetime
import sys

# Get backend URL from environment
BACKEND_URL = "http://localhost:8001"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name, success, message="", response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat()
        }
        if response_data:
            result["response_data"] = response_data
        
        self.test_results.append(result)
        if not success:
            self.failed_tests.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        
    def test_health_check(self):
        """Test /api/health endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "status" in data and data["status"] == "healthy":
                    self.log_test("Health Check", True, "Health endpoint working correctly", data)
                    return True
                else:
                    self.log_test("Health Check", False, f"Invalid health response format: {data}")
                    return False
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
            return False
    
    def test_portfolio_data(self):
        """Test /api/portfolio endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/portfolio", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check required sections
                required_sections = ["hero", "about", "skills", "projects", "contact"]
                missing_sections = [section for section in required_sections if section not in data]
                
                if missing_sections:
                    self.log_test("Portfolio Data Structure", False, f"Missing sections: {missing_sections}")
                    return False
                
                # Validate hero section
                hero = data.get("hero", {})
                hero_fields = ["name", "title", "subtitle", "description"]
                missing_hero = [field for field in hero_fields if field not in hero]
                if missing_hero:
                    self.log_test("Portfolio Hero Data", False, f"Missing hero fields: {missing_hero}")
                    return False
                
                # Validate skills section
                skills = data.get("skills", [])
                if not isinstance(skills, list) or len(skills) == 0:
                    self.log_test("Portfolio Skills Data", False, "Skills section is empty or invalid")
                    return False
                
                # Check skill structure
                for skill in skills[:2]:  # Check first 2 skills
                    if not all(key in skill for key in ["name", "level"]):
                        self.log_test("Portfolio Skills Structure", False, "Skills missing required fields")
                        return False
                
                # Validate projects section
                projects = data.get("projects", [])
                if not isinstance(projects, list) or len(projects) == 0:
                    self.log_test("Portfolio Projects Data", False, "Projects section is empty or invalid")
                    return False
                
                # Check project structure
                for project in projects[:2]:  # Check first 2 projects
                    required_project_fields = ["id", "title", "description", "technologies"]
                    missing_project_fields = [field for field in required_project_fields if field not in project]
                    if missing_project_fields:
                        self.log_test("Portfolio Projects Structure", False, f"Projects missing fields: {missing_project_fields}")
                        return False
                
                # Validate contact section
                contact = data.get("contact", {})
                contact_fields = ["email", "phone", "location"]
                missing_contact = [field for field in contact_fields if field not in contact]
                if missing_contact:
                    self.log_test("Portfolio Contact Data", False, f"Missing contact fields: {missing_contact}")
                    return False
                
                self.log_test("Portfolio Data API", True, f"All portfolio sections validated successfully. Found {len(skills)} skills, {len(projects)} projects")
                return True
                
            else:
                self.log_test("Portfolio Data API", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Portfolio Data API", False, f"Connection error: {str(e)}")
            return False
    
    def test_contact_form(self):
        """Test /api/contact endpoint"""
        try:
            # Test data
            test_contact = {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "subject": "Portfolio Inquiry",
                "message": "I'm interested in discussing a potential project collaboration. Your portfolio showcases excellent work!"
            }
            
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=test_contact,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                
                # Validate response structure
                required_fields = ["id", "name", "email", "subject", "message", "created_at", "status"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("Contact Form Response", False, f"Missing response fields: {missing_fields}")
                    return False
                
                # Validate data integrity
                if (data["name"] != test_contact["name"] or 
                    data["email"] != test_contact["email"] or
                    data["subject"] != test_contact["subject"] or
                    data["message"] != test_contact["message"]):
                    self.log_test("Contact Form Data Integrity", False, "Response data doesn't match submitted data")
                    return False
                
                # Check if ID is generated
                if not data.get("id"):
                    self.log_test("Contact Form ID Generation", False, "No ID generated for contact message")
                    return False
                
                # Check status
                if data.get("status") != "unread":
                    self.log_test("Contact Form Status", False, f"Unexpected status: {data.get('status')}")
                    return False
                
                self.log_test("Contact Form API", True, f"Contact form submission successful. Message ID: {data['id']}")
                return True
                
            else:
                self.log_test("Contact Form API", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form API", False, f"Connection error: {str(e)}")
            return False
    
    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        try:
            # Test with missing required fields
            invalid_contact = {
                "name": "",
                "email": "invalid-email",
                "subject": "",
                "message": ""
            }
            
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=invalid_contact,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return validation error (422 for FastAPI validation errors)
            if response.status_code == 422:
                self.log_test("Contact Form Validation", True, "Validation correctly rejected invalid data")
                return True
            elif response.status_code == 200:
                self.log_test("Contact Form Validation", False, "Validation should have rejected invalid data but didn't")
                return False
            else:
                self.log_test("Contact Form Validation", False, f"Unexpected status code: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact Form Validation", False, f"Connection error: {str(e)}")
            return False
    
    def test_analytics_tracking(self):
        """Test /api/analytics/track endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/analytics/track", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if "status" in data and data["status"] == "tracked":
                    self.log_test("Analytics Tracking", True, "Visit tracking working correctly", data)
                    return True
                else:
                    self.log_test("Analytics Tracking", False, f"Invalid tracking response: {data}")
                    return False
            else:
                self.log_test("Analytics Tracking", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Analytics Tracking", False, f"Connection error: {str(e)}")
            return False
    
    def test_resume_download(self):
        """Test /api/resume/download endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/resume/download", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check if response contains expected fields
                if "message" in data and "filename" in data:
                    self.log_test("Resume Download", True, "Resume download endpoint working correctly", data)
                    return True
                else:
                    self.log_test("Resume Download", False, f"Invalid resume response format: {data}")
                    return False
            else:
                self.log_test("Resume Download", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Resume Download", False, f"Connection error: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Backend API Tests for Portfolio Application")
        print(f"📍 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Run tests in order of priority
        tests = [
            ("Health Check", self.test_health_check),
            ("Portfolio Data API", self.test_portfolio_data),
            ("Contact Form API", self.test_contact_form),
            ("Contact Form Validation", self.test_contact_form_validation),
            ("Analytics Tracking", self.test_analytics_tracking),
            ("Resume Download", self.test_resume_download),
        ]
        
        passed = 0
        total = len(tests)
        
        for test_name, test_func in tests:
            try:
                if test_func():
                    passed += 1
            except Exception as e:
                self.log_test(test_name, False, f"Test execution error: {str(e)}")
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if self.failed_tests:
            print(f"\n❌ Failed Tests ({len(self.failed_tests)}):")
            for failed in self.failed_tests:
                print(f"  • {failed['test']}: {failed['message']}")
        
        if passed == total:
            print("🎉 All backend API tests passed!")
            return True
        else:
            print(f"⚠️  {total - passed} test(s) failed")
            return False

def main():
    """Main test execution"""
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()