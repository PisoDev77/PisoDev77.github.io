import { headingProps, baseClassName } from './props';

export default function Heading1(headingProps: headingProps) {
	const { children } = headingProps;

	return <h2 className={baseClassName + 'text-2xl'}>{children}</h2>;
}
