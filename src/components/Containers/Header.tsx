import { RefObject } from 'react';
import ToggleMode from '../Buttons/ToggleMode';

interface HeaderProps {
    headerRef: RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    storeMode: () => void;
}

const PAGES = ['home', 'about', 'projects'];

export default function Header({ headerRef, isMenuOpen, setIsMenuOpen, storeMode }: HeaderProps) {
    const handleToggleMode = () => {
        storeMode();
    };

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            ref={headerRef}
            className="p-2 flex flex-row justify-between 
                        bg-primary-100 text-primary-950 dark:bg-secondary-950 dark:text-secondary-300"
        >
            <h1>Logo</h1>
            <nav className="flex flex-row">
                <ToggleMode handleToggleMode={handleToggleMode} />
                <button className="block sm:hidden" onClick={handleMenuOpen}>
                    Menu
                </button>
                <div
                    id="menu"
                    className="flex flex-col sm:flex-row absolute sm:static hidden sm:block bg-primary-100 text-primary-950 dark:bg-secondary-950 dark:text-secondary-300"
                >
                    {PAGES.map((page, idx) => (
                        <a key={idx} data-page={page}>
                            {page}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
