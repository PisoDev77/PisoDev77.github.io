import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToPage = (path: string) => gsap.to(window, { scrollTo: { y: '#' + path } });
