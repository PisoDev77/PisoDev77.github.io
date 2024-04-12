export default function Menus({ isMenuOpen }: { isMenuOpen: boolean }) {
	return (
		<nav className={`${isMenuOpen ? 'hidden' : ''} sticky z-10 top-0 p-4 dark:bg-darkBg  bg-lightBg`}>
			<menu className='flex flex-row gap-4'>
				<li>About</li>
				<li>Experience</li>
				<li>Project</li>
			</menu>
		</nav>
	);
}
