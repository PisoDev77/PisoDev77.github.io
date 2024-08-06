export type blogType = {
	title: string;
	content: any;
	tags: string[];
};

import MVP from '/docs/blog/mvp.md';

export const blogs: blogType[] = [
	{ title: 'mvp1', content: MVP, tags: ['dev'] },
	{ title: 'mvp2', content: MVP, tags: ['dev'] },
];
