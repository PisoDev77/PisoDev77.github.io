import Heading3 from '../Headings/Heading3';

export default function AboutModalContent({ title, details }: { title: string; details: string[] }) {
	return (
		<ul className='flex flex-col gap-2 list-disc'>
			<Heading3>{title}</Heading3>
			{details.map((detail, idx) => (
				<li key={`modal_${idx}`}>{detail}</li>
			))}
		</ul>
	);
}
