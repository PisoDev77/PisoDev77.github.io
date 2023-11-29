import { ReactNode } from 'react';

interface ProjectCardProps {
    projectTitle: ReactNode;
    projectProps: {
        date: string;
        description: string;
        projectThumbnailSrc: string;
        githubReadme: string;
        githubLink: string;
    };
}

export default function ProjectCard({ projectTitle, projectProps }: ProjectCardProps) {
    const { date, projectThumbnailSrc, description, githubReadme, githubLink } = projectProps;

    return (
        <div className="border rounded-lg p-1">
            {projectTitle}
            {projectThumbnailSrc}
            <ul>
                <li>{date}</li>
                <li>{description}</li>
                <li>{githubReadme}</li>
                <li>{githubLink}</li>
            </ul>
        </div>
    );
}
