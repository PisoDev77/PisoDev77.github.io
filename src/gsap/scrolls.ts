import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

export default function scrolls() {
	const { contextSafe } = useGSAP();

	const scrollTo = contextSafe((ele: HTMLInputElement | null, offsetY: number) => {
		gsap.to(window, { duration: 1, scrollTo: { y: ele ?? 300, offsetY }, ease: 'power2' });
	});

	return { scrollTo };
}
