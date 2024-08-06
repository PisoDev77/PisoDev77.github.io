import Markdown from 'react-markdown';
import { blogType } from '../../mock/blogs';
import Heading3 from '../Headings/Heading3';

export default function BlogModal({ title, content }: blogType) {
	return (
		<>
			<Heading3>{title}</Heading3>
			<Markdown>{content}</Markdown>
		</>
	);
}
