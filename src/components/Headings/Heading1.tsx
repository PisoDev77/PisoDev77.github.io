import { headingProps, baseClassName } from './props';

export default function Heading1(headingProps: headingProps) {
	const { children, isBox } = headingProps;

	return (
		<h1 className={baseClassName + 'text-3xl sm:text-5xl md:text-7xl ' + (isBox ? 'border-b-4' : '')}>
			{children}
		</h1>
	);
}
