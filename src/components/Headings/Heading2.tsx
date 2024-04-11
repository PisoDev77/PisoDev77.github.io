import { headingProps, baseClassName } from './props';

export default function Heading1(headingProps: headingProps) {
	const { children } = headingProps;

	return <h2 className={baseClassName + 'text-2xl sm:text-4xl md:text-6xl'}>{children}</h2>;
}
