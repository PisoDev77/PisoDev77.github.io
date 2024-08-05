import { ReactElement } from 'react';

import { blogType } from '../../mock/blogs';
import BlogModal from '../Modal/BlogModal';

interface blogSeciontProps {
	blogs: blogType[];
	openModalWithContent: (element: ReactElement) => void;
}

export default function BlogSection({ blogs, openModalWithContent }: blogSeciontProps) {
	return (
		<ul>
			{blogs.map((blog, idx) => (
				<li key={'blog' + idx} onClick={() => openModalWithContent(<BlogModal {...blog} />)}>
					{blog.title}
				</li>
			))}
		</ul>
	);
}
