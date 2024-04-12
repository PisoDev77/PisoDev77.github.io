import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Test() {
	const [tmp, setTmp] = useState<string>('aaaa');

	useEffect(() => {
		const fetchData = async () => {
			// const res = await axios.post(
			// 	'https://api.notion.com/v1/databases//query',
			// 	// { page_size: 1 },
			// 	{
			// 		headers: {
			// 			Authorization: ``,
			// 			'Notion-Version': '2021-08-16',
			// 		},
			// 	}
			// );

			const res = await (await fetch('/testNotion')).json();

			setTmp(res);
		};

		fetchData();
	}, []);

	return <h1>{tmp}</h1>;
}
