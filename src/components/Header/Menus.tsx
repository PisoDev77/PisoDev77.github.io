import { RefObject, useRef } from 'react';

import scrolls from '../../gsap/scrolls';

type refsTypes = {
	attitudeRef: RefObject<HTMLInputElement>;
	experienceRef: RefObject<HTMLInputElement>;
	projectRef: RefObject<HTMLInputElement>;
	blogRef: RefObject<HTMLInputElement>;
};

export default function Menus({ attitudeRef, experienceRef, projectRef, blogRef }: refsTypes) {
	const { scrollTo } = scrolls();
	const menuRef = useRef<HTMLElement>(null);

	return (
		<nav className={`p-4 dark:bg-darkBg  bg-lightBg`} ref={menuRef}>
			<menu className='flex flex-row gap-4'>
				<li
					onClick={() => {
						if (menuRef.current !== null) {
							scrollTo(attitudeRef.current, menuRef.current.clientHeight + 10);
						}
					}}
				>
					Attitude
				</li>
				<li
					onClick={() => {
						if (menuRef.current !== null) {
							scrollTo(experienceRef.current, menuRef.current.clientHeight + 10);
						}
					}}
				>
					Experience
				</li>
				<li
					onClick={() => {
						if (menuRef.current !== null) {
							scrollTo(projectRef.current, menuRef.current.clientHeight + 10);
						}
					}}
				>
					Project
				</li>
				<li
					onClick={() => {
						if (menuRef.current !== null) {
							scrollTo(blogRef.current, menuRef.current.clientHeight + 10);
						}
					}}
				>
					Blog
				</li>
			</menu>
		</nav>
	);
}
