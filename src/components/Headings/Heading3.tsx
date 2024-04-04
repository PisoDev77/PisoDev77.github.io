import { headingProps, baseClassName } from './props';

export default function Heading1(headingProps: headingProps) {
	const { children } = headingProps;

	return <h3 className={baseClassName + 'text-xl'}>{children}</h3>;
}
