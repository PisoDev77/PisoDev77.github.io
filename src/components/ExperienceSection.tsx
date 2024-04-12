import { ReactElement } from 'react';

import { SolvookSvg, VisangSvg } from './Svg';

interface ExperienceSectionProps {
	title: string;
}

const svg: {
	[key: string]: ReactElement;
} = {
	Solvook: SolvookSvg,
	Visang: VisangSvg,
};

export default function ExperienceSection({ title }: ExperienceSectionProps) {
	return (
		<section>
			{svg[title]}
			<p>Company Description</p>
		</section>
	);
}
