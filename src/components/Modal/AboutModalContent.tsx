import Heading3 from '../Headings/Heading3';
import { experienceType } from '../../mock/experience';

export default function AboutModalContent({ title, details, task, isWorking }: experienceType) {
	return (
		<ul className='flex flex-col gap-2 list-disc'>
			<Heading3>{title + (isWorking ? ' 재직중' : '')}</Heading3>
			{task === undefined ? '' : <strong>{task}</strong>}
			{details.map((detail, idx) => (
				<li key={`modal_${idx}`}>{detail}</li>
			))}
		</ul>
	);
}
