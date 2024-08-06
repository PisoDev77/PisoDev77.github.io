import { ReactElement } from 'react';

import { blogType } from '../../mock/blogs';
import BlogModal from '../Modal/BlogModal';

interface blogSeciontProps {
	blogs: blogType[];
	openModalWithContent: (element: ReactElement) => void;
}

export default function BlogSection({ blogs, openModalWithContent }: blogSeciontProps) {
	return (
		<ul className='flex gap-2 p-2 overflow-x-auto'>
			{blogs.map((blog, idx) => (
				<li
					className='border-2 px-4 py-2 rounded-lg'
					key={'blog' + idx}
					onClick={() => openModalWithContent(<BlogModal {...blog} />)}
				>
					{blog.tags.map((tag, idx) => (
						<span key={'blog-' + idx} className='text-xs border-2 px-1 rounded-lg' role='tag'>
							{tag}
						</span>
					))}
					<div>
						<p>{blog.title}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
