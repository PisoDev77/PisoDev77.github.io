import { formatDate } from '../../lib/date';

import Heading3 from '../Headings/Heading3';

import { projectType } from '../../mock/project';
import { GithubSvg, ShowSvg } from '../Svg';

export default function ProjectSection(props: projectType) {
	const { title, startDate, endDate, github, page, details } = props;

	return (
		<section>
			<Heading3>{title}</Heading3>
			<b>{formatDate(startDate) + ' ~ ' + formatDate(endDate)}</b>
			<ul className='list-disc px-16 flex flex-col gap-2'>
				{details.map((detail, idx) => (
					<li key={`modal_${idx}`}>{detail}</li>
				))}
			</ul>
			<ul className='flex'>
				<li className='p-4' onClick={() => window.open(github, '_blank')}>
					{GithubSvg}
				</li>
				<li className='p-4' onClick={() => window.open(page, '_blank')}>
					{ShowSvg}
				</li>
			</ul>
		</section>
	);
}
