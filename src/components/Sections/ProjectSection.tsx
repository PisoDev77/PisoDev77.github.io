import { formatDate } from '../../lib/date';

import Heading3 from '../Headings/Heading3';

import { projectType } from '../../mock/project';

export default function ProjectSection(props: projectType) {
	const { title, startDate, endDate } = props;

	return (
		<section>
			<Heading3>{title}</Heading3>
			<b>{formatDate(startDate) + ' ~ ' + formatDate(endDate)}</b>
		</section>
	);
}
