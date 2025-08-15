import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
	return (
		<motion.div
			className='loading-screen fixed inset-0 z-50 flex items-center justify-center'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<div className='text-center'>
				<motion.div
					className='w-20 h-20 border-4 border-white border-t-transparent rounded-full mx-auto mb-8'
					animate={{ rotate: 360 }}
					transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
				/>

				<motion.h1
					className='loading-text text-4xl font-bold mb-4'
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}>
					Piso
				</motion.h1>

				<motion.p
					className='text-white text-lg opacity-80'
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}>
					Frontend Developer
				</motion.p>

				<motion.div className='mt-8' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
					<div className='flex space-x-1 justify-center'>
						{[0, 1, 2].map((i) => (
							<motion.div
								key={i}
								className='w-2 h-2 bg-white rounded-full'
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 1, 0.5],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: i * 0.2,
								}}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default LoadingScreen;
