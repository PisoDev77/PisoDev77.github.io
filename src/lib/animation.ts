import { gsap } from 'gsap';

export const scrollToPage = (path: string, offsetY: number) =>
    gsap.to(window, { scrollTo: { y: '#' + path, offsetY } });

export const openingMenu = (height: number) =>
    gsap
        .timeline()
        .to('#menu', { y: height })
        .to('#menu', { display: 'flex' })
        .to('a', { padding: '0.25rem', stagger: 0.1 });
