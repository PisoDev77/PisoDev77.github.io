import { ReactComponentElement } from 'react';

interface PageProps {
    title: string;
}

export default function Page({ title, content }:: PageProps) {
    return (
        <>
            <h1 className="page-title">{title}</h1>
            <section className="page-content">{content}</section>
        </>
    );
}
