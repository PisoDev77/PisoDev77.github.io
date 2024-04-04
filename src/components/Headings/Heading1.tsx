import { headingProps, baseClassName } from './props';

export default function Heading1(headingProps: headingProps) {
	const { children } = headingProps;

	return <h1 className={baseClassName + 'text-3xl'}>{children}</h1>;
}
