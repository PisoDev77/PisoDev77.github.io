import { formatDate } from '../../lib/date';

import Heading3 from '../Headings/Heading3';

import { projectType } from '../../mock/project';
import { GithubSvg, ShowSvg } from '../Svg';

export default function ProjectSection(props: projectType) {
	const { title, startDate, endDate, github, page } = props;

	return (
		<section>
			<Heading3>{title}</Heading3>
			<b>{formatDate(startDate) + ' ~ ' + formatDate(endDate)}</b>
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
