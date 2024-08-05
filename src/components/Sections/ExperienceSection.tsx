import { ReactElement } from 'react';
import { formatDate } from '../../lib/date';

import { SolvookSvg, VisangSvg } from '../Svg';

import { experienceType } from '../../mock/experience';
import Heading3 from '../Headings/Heading3';
import AboutModalContent from '../Modal/AboutModalContent';

interface experienceSeciontProps {
	experiences: experienceType;
	openModalWithContent: (element: ReactElement) => void;
}

const svg: {
	[key: string]: ReactElement;
} = {
	Solvook: SolvookSvg,
	Visang: VisangSvg,
};

export default function ExperienceSection({ experiences, openModalWithContent }: experienceSeciontProps) {
	const { title, startDate, endDate, isWorking, task, role, details } = experiences;

	return (
		<section>
			{svg[title]}
			<Heading3>{formatDate(startDate) + ' ~ ' + (isWorking ? '재직중' : formatDate(endDate))}</Heading3>
			<p>
				{task}: ({role})
			</p>
			<ul className='flex flex-col gap-2 list-disc px-16'>
				{/* svg */}
				{details.map((detail, idx) => (
					<li key={`modal_${idx}`}>{detail}</li>
				))}
			</ul>
			<button onClick={() => openModalWithContent(<AboutModalContent {...experiences} />)}>자세히 보기</button>
		</section>
	);
}
