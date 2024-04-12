import { headingProps, baseClassName } from './props';

export default function Heading3(headingProps: headingProps) {
	const { children } = headingProps;

	return <h3 className={baseClassName + 'text-xl sm:text-2xl md:text-4xl'}>{children}</h3>;
}
