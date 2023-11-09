import { useRef } from 'react';

import Header from './components/Containers/Header';
import useGsap from './hooks/useGsap';
import useDarkmode from './hooks/useDarkmode';

function App() {
    const headerRef = useRef<HTMLDivElement>(null);

    const { storeMode } = useDarkmode();
    const { isMenuOpen, setIsMenuOpen } = useGsap({ headerRef });

    return (
        <main>
            <Header
                headerRef={headerRef}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                storeMode={storeMode}
            ></Header>
        </main>
    );
}

export default App;
