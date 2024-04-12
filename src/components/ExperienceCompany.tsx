import Heading3 from './Headings/Heading3';

interface ExperienceCompanyProps {
	title: string;
	contents: string[];
}

export default function ExperienceCompany({ title, contents }: ExperienceCompanyProps) {
	return (
		<ul>
			<Heading3>{title}</Heading3>
			{/* svg */}
			{contents.map((content) => (
				<li>{content}</li>
			))}
		</ul>
	);
}
