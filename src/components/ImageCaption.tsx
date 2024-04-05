import Heading3 from './Headings/Heading3';

interface imageCaptionProps {
	name: string;
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
	const { name } = props;

	const imageInfos: imageInfoProps = {
		communication: {
			src: '/public/images/communication.svg',
			alt: 'Communication image',
			description: 'communication description',
		},
		readability: {
			src: '/public/images/readability.svg',
			alt: 'Readability image',
			description: 'readability description',
		},
		intuition: {
			src: '/public/images/intuition.svg',
			alt: 'intuition image',
			description: 'intuition description',
		},
		'user-friendly': {
			src: '/public/images/user-friendly.svg',
			alt: 'user-friendly image',
			description: 'user-friendly description',
		},
	};

	const selectedImageInfo = imageInfos[name];

	const { src, alt, description } = selectedImageInfo;

	return (
		<div className='flex flex-col justify-center items-center p-4 min-w-80'>
			<Heading3>{name}</Heading3>
			<img className='w-6/12' src={src} alt={alt} />
			<p className='text-center'>{description}</p>
		</div>
	);
}
