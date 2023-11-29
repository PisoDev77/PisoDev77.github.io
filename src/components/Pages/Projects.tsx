import Page from './Page';
import { PageTitle, ProjectTitle } from '../Title';
import ProjectCard from '../Card/ProjectCard';

export default function ProjectsPage() {
    return (
        <Page
            id="projects"
            title={<PageTitle>Projects</PageTitle>}
            content={
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch gap-1">
                    <ProjectCard
                        projectTitle={<ProjectTitle title="프로젝트 타이틀" />}
                        projectProps={{
                            date: '기간',
                            projectThumbnailSrc: '프로젝트 썸네일 대표 이미지',
                            description: '프로젝트 간단 설명',
                            githubReadme: '깃헙 리드미 링크',
                            githubLink: '깃헙 링크',
                        }}
                    />
                </div>
            }
        />
    );
}
