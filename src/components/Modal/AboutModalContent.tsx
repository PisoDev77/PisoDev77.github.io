import Heading3 from '../Headings/Heading3';

interface ExperienceCompanyProps {
	title: string;
	details: string[];
}

export default function AboutModalContent({ title, details }: ExperienceCompanyProps) {
	return (
		<ul className='flex flex-col gap-2 list-disc'>
			<Heading3>{title}</Heading3>
			{/* svg */}
			{details.map((detail, idx) => (
				<li key={`modal_${idx}`}>{detail}</li>
			))}
		</ul>
	);
}
