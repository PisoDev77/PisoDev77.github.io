import { Dispatch, ReactElement, SetStateAction } from 'react';

import { MenuCloseIcon as ModalCloseIcon } from '../Svg';

type ModalProps = {
	currentModalContent: ReactElement;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ currentModalContent, setIsModalOpen }: ModalProps) {
	const handleModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) {
			setIsModalOpen(false);
		}
	};

	return (
		<div className='fixed  h-screen w-screen z-50 p-4  backdrop-blur-sm' onClick={handleModalClose}>
			<section className='relative w-full bg-lightBg dark:bg-darkBg z-50'>
				<button className='h-1 absolute top-0 right-0 p-4' onClick={() => setIsModalOpen(false)}>
					{ModalCloseIcon}
				</button>
				{currentModalContent}
			</section>
		</div>
	);
}
