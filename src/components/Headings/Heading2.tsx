import { headingProps, baseClassName } from './props';

export default function Heading2(headingProps: headingProps) {
	const { children } = headingProps;

	return <h2 className={baseClassName + 'text-xl sm:text-3xl md:text-5xl'}>{children}</h2>;
}
