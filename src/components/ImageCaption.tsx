import { Dispatch, ReactElement, SetStateAction } from 'react';

import Heading3 from './Headings/Heading3';

import communicationImg from '../../public/images/communication.svg';
import readabilityImg from '../../public/images/readability.svg';
import intutionImg from '../../public/images/intuition.svg';
import userFriendlyImg from '../../public/images/user-friendly.svg';

interface imageCaptionProps {
	name: string;
	openModalWithContent: (element: ReactElement) => void;
}

type imageData = {
	src: string;
	alt: string;
	description: string;
};

type imageInfoProps = {
	[key: string]: imageData;
};

export default function ImageCaption(props: imageCaptionProps) {
	const { name, openModalWithContent } = props;

	const imageInfos: imageInfoProps = {
		communication: {
			src: communicationImg,
			alt: 'Communication image',
			description: 'communication description',
		},
		readability: {
			src: readabilityImg,
			alt: 'Readability image',
			description: 'readability description',
		},
		intuition: {
			src: intutionImg,
			alt: 'intuition image',
			description: 'intuition description',
		},
		'user-friendly': {
			src: userFriendlyImg,
			alt: 'user-friendly image',
			description: 'user-friendly description',
		},
	};

	const selectedImageInfo = imageInfos[name];

	const { src, alt, description } = selectedImageInfo;

	return (
		<section
			className='flex flex-col justify-center items-center p-4 min-w-80'
			onClick={() => openModalWithContent(<h1>HELLO FROM OUTSIED</h1>)}
		>
			<Heading3>{name}</Heading3>
			<img className='w-6/12' src={src} alt={alt} />
			<p className='text-center'>{description}</p>
		</section>
	);
}
