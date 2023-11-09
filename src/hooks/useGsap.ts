import { useEffect, useLayoutEffect, useState, useRef } from 'react';

import { gsap } from 'gsap';

import { RefsProps } from '../types/refs';
import { openingMenu } from '../lib/animation';

export default function useGsap({ headerRef }: RefsProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuTl = useRef<gsap.core.Timeline>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            menuTl.current && menuTl.current.progress(0).kill();
            (menuTl.current as gsap.core.Timeline) = openingMenu(headerRef.current?.offsetHeight ?? 0);
        }, headerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (menuTl.current !== null) menuTl.current.reversed(!isMenuOpen);
    }, [isMenuOpen]);

    return { isMenuOpen, setIsMenuOpen };
}
