import { useRef } from 'react';

import Header from './components/Containers/Header';
import useGsap from './hooks/useGsap';

function App() {
    const headerRef = useRef<HTMLDivElement>(null);

    const { isMenuOpen, setIsMenuOpen } = useGsap({ headerRef });

    return (
        <main>
            <Header headerRef={headerRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></Header>
        </main>
    );
}

export default App;
