import { Dispatch, ReactElement, SetStateAction } from 'react';

import { MenuCloseIcon as ModalCloseIcon } from '../Svg';

type ModalProps = {
	currentModalContent: ReactElement;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ currentModalContent, setIsModalOpen }: ModalProps) {
	return (
		<div className='fixed  h-screen w-screen z-50 p-4  backdrop-blur-sm'>
			<section className='relative w-full bg-lightBg dark:bg-darkBg z-50'>
				<button className='absolute top-0 right-0 p-4' onClick={() => setIsModalOpen(false)}>
					{ModalCloseIcon}
				</button>
				{currentModalContent}
			</section>
		</div>
	);
}
