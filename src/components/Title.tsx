interface pageTitleProps {
    children: string;
}
interface ariaTitleProps {
    title: string;
}
interface projectTitleProps {
    title: string;
}

export const PageTitle = ({ children }: pageTitleProps) => <h1 className="page-title text-4xl">{children}</h1>;
export const AriaTitle = ({ title }: ariaTitleProps) => <h3 className="aria-title">{title}</h3>;
export const ProjectTitle = ({ title }: projectTitleProps) => <h3 className="aria-title">{title}</h3>;
