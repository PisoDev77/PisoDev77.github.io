import { ReactElement } from 'react';

import { SolvookSvg, VisangSvg } from './Svg';

import { experienceType } from '../mock/experience';
import Heading3 from './Headings/Heading3';
import AboutModalContent from './Modal/AboutModalContent';

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
	const { title, startDate, endDate, isWorking, task, role } = experiences;

	return (
		<section>
			{svg[title]}
			{/* prettier-ignore */}
			<Heading3>
				{`${('' + startDate.getFullYear()).substring(2)}.${startDate.getMonth() + 1}.${startDate.getDate()}
				  ${isWorking ? 
					"재직중" 
					: `${('' + endDate.getFullYear()).substring(2)}.${endDate.getMonth() + 1}.${endDate.getDate()}`}`}
			</Heading3>
			<p>
				{task}: ({role})
			</p>
			<button
				onClick={() => openModalWithContent(<AboutModalContent title={title} contents={['a', 'b', 'c']} />)}
			>
				자세히 보기
			</button>
		</section>
	);
}
