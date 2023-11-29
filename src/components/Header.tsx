import { useEffect, useState } from 'react';
import { scrollToPage } from '../lib/scroll';

export default function Header() {
    const [isDarkmode, setIsDarkmode] = useState(false);

    useEffect(() => {
        const storedDarkmode = JSON.parse(localStorage.getItem('dark') ?? 'false');
        setIsDarkmode(storedDarkmode);
        document.body.classList.toggle('dark', storedDarkmode);
    }, []);

    const handleDarkmode = () => {
        localStorage.setItem('dark', JSON.stringify(!isDarkmode));
        setIsDarkmode(!isDarkmode);
        document.body.classList.toggle('dark', !isDarkmode);
    };

    const handleNav = (e: React.MouseEvent<HTMLLIElement>) => {
        scrollToPage((e.target as HTMLLIElement).dataset.link ?? '');
    };

    return (
        <header>
            <button onClick={handleDarkmode}>Darkmode</button>
            <nav>
                <ul>
                    <li onClick={handleNav} data-link="home">
                        home
                    </li>
                    <li onClick={handleNav} data-link="about">
                        about
                    </li>
                    <li onClick={handleNav} data-link="projects">
                        projects
                    </li>
                    <li onClick={handleNav} data-link="blog">
                        blog
                    </li>
                </ul>
            </nav>
        </header>
    );
}
