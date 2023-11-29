import { ReactNode } from 'react';

interface HomeCardProps {
    ariaTitle: ReactNode;
    representativeImage: ReactNode;
    explaination: ReactNode;
}

export default function HomeCard({ ariaTitle, representativeImage, explaination }: HomeCardProps) {
    return (
        <div className="border rounded-lg p-1">
            {ariaTitle}
            {representativeImage}
            {explaination}
        </div>
    );
}
