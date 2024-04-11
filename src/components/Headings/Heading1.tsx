import { headingProps, baseClassName } from './props';

export default function Heading1(headingProps: headingProps) {
	const { children } = headingProps;

	return <h1 className={baseClassName + 'text-3xl sm:text-5xl md:text-7xl'}>{children}</h1>;
}
