import Markdown from 'react-markdown';
import { blogType } from '../../mock/blogs';
import Heading3 from '../Headings/Heading3';

import TEST from '/docs/blog/mvp.md';

export default function BlogModal({ title }: blogType) {
	return (
		<>
			<Heading3>{title}</Heading3>
			<Markdown>{TEST}</Markdown>
		</>
	);
}
