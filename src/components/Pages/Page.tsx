import { ReactNode } from 'react';

interface PageProps {
    id: string;
    title: ReactNode;
    content: ReactNode;
}

export default function Page({ id, title, content }: PageProps) {
    return (
        <section id={id} className="w-screen h-screen">
            {title}
            <section className="page-content p-1">{content}</section>
        </section>
    );
}
