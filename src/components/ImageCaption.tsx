import { ReactElement } from 'react';

import Heading3 from './Headings/Heading3';

import communicationImg from '../../public/images/communication.svg';
import readabilityImg from '../../public/images/readability.svg';
import intutionImg from '../../public/images/intuition.svg';
import userFriendlyImg from '../../public/images/user-friendly.svg';
import AboutModalContent from './Modal/AboutModalContent';

interface imageCaptionProps {
	name: string;
	openModalWithContent: (element: ReactElement) => void;
}

type imageData = {
	src: string;
	alt: string;
	description: string;
	details: string[];
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
			details: ['디자인, 백엔드, 컨텐츠 등 다양한 부서 및 사람과 소통이 원활함을 추구합니다.'],
		},
		readability: {
			src: readabilityImg,
			alt: 'Readability image',
			description: 'readability description',
			details: ['관련 전공자, 담당자가 아니더라도 읽기 쉽게 코드, 소통, 문서 등을 작성합니다.'],
		},
		intuition: {
			src: intutionImg,
			alt: 'intuition image',
			description: 'intuition description',
			details: [
				'모든이가 모든 글 및 그림을 상세히 보지 않습니다. 얼핏 보더라도 알아볼 수 있는 직관성을 추구합니다.',
			],
		},
		'user-friendly': {
			src: userFriendlyImg,
			alt: 'user-friendly image',
			description: 'user-friendly description',
			details: ['내가 만든 코드 서비스등 상품이 사용자에게 쉽게 쓰일 수 있도록 생각하고 추구합니다.'],
		},
	};

	const selectedImageInfo = imageInfos[name];

	const { src, alt, description, details } = selectedImageInfo;

	return (
		<section
			className='flex flex-col justify-center items-center p-4 min-w-80'
			onClick={() => openModalWithContent(<AboutModalContent title={name} details={details} />)}
		>
			<Heading3>{name}</Heading3>
			<img className='w-6/12' src={src} alt={alt} />
			<p className='text-center'>{description}</p>
		</section>
	);
}
