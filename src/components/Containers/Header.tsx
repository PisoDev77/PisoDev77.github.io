import { RefObject } from 'react';

interface HeaderProps {
    headerRef: RefObject<HTMLDivElement>;
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PAGES = ['home', 'about', 'projects'];

export default function Header({ headerRef, isMenuOpen, setIsMenuOpen }: HeaderProps) {
    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            ref={headerRef}
            className="p-2 flex flex-row justify-between 
                        bg-primary-100 text-primary-950"
        >
            <h1>Logo</h1>
            <nav className="flex flex-row">
                <button>Mode</button>
                <button className="block sm:hidden" onClick={handleMenuOpen}>
                    Menu
                </button>
                <div
                    id="menu"
                    className="flex flex-col sm:flex-row absolute sm:static hidden sm:block bg-primary-100 text-primary-950"
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
