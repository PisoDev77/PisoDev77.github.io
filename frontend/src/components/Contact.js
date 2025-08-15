import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = ({ data }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [formStatus, setFormStatus] = useState({
		loading: false,
		success: false,
		error: null,
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormStatus({ loading: true, success: false, error: null });

		try {
			// Mock submission: save to localStorage
			const messagesKey = 'contact_messages';
			const existing = JSON.parse(localStorage.getItem(messagesKey) || '[]');
			const newMessage = {
				id: crypto.randomUUID(),
				...formData,
				created_at: new Date().toISOString(),
				status: 'unread',
			};
			localStorage.setItem(messagesKey, JSON.stringify([newMessage, ...existing]));

			setFormStatus({ loading: false, success: true, error: null });
			setFormData({ name: '', email: '', subject: '', message: '' });

			// Hide success after a few seconds
			setTimeout(() => {
				setFormStatus({ loading: false, success: false, error: null });
			}, 5000);
		} catch (error) {
			setFormStatus({
				loading: false,
				success: false,
				error: 'Failed to send message. Please try again.',
			});
		}
	};

	if (!data) {
		return (
			<section id='contact' className='section-padding'>
				<div className='container-custom'>
					<div className='animate-pulse'>Loading contact section...</div>
				</div>
			</section>
		);
	}

	const contactInfo = [
		{ icon: FiMail, label: 'Email', value: data.email, href: `mailto:${data.email}` },
		{ icon: FiMapPin, label: 'Location', value: data.location, href: `https://maps.google.com/?q=${encodeURIComponent(data.location)}` },
	];

	const socialLinks = [
		{ icon: FaGithub, label: 'GitHub', href: data.social?.github || '#', color: 'hover:text-gray-900 dark:hover:text-white' },
		{ icon: FaXTwitter, label: 'Twitter', href: data.social?.twitter || data.social?.x || '#', color: 'hover:text-blue-400' },
	];

	return (
		<section id='contact' className='section-padding bg-white dark:bg-gray-800'>
			<div className='container-custom' ref={ref}>
				<motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						<span className='text-gradient'>Let's Work Together</span>
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>열정적이고 성실한 자세로 프론트엔드 개발자로 성장해 나가겠습니다.</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-16'>
					{/* Contact Information */}
					<motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
						<h3 className='text-2xl font-bold mb-8 text-gray-900 dark:text-white'>Get in Touch</h3>

						<div className='space-y-6 mb-8'>
							{contactInfo.map((info, index) => (
								<motion.a
									key={info.label}
									href={info.href}
									target={info.label === 'Location' ? '_blank' : undefined}
									rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
									initial={{ opacity: 0, y: 20 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 group'>
									<div className='w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300'>
										<info.icon size={20} />
									</div>
									<div>
										<p className='text-sm text-gray-500 dark:text-gray-400 font-medium'>{info.label}</p>
										<p className='text-gray-900 dark:text-white font-semibold'>{info.value}</p>
									</div>
								</motion.a>
							))}
						</div>

						{/* Social Links */}
						<motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }}>
							<h4 className='text-lg font-bold mb-4 text-gray-900 dark:text-white'>Follow Me</h4>
							<div className='flex gap-4'>
								{socialLinks.map((social) => (
									<motion.a
										key={social.label}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className={`w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300`}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}>
										<social.icon size={20} />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					{false ?? (
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='card p-8'>
							<h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>Send a Message</h3>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid sm:grid-cols-2 gap-6'>
									<div className='form-group'>
										<input
											type='text'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											placeholder='Your Name'
											required
											className='form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none transition-all duration-300'
										/>
									</div>

									<div className='form-group'>
										<input
											type='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											placeholder='Your Email'
											required
											className='form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none transition-all duration-300'
										/>
									</div>
								</div>

								<div className='form-group'>
									<input
										type='text'
										name='subject'
										value={formData.subject}
										onChange={handleInputChange}
										placeholder='Subject'
										required
										className='form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none transition-all duration-300'
									/>
								</div>

								<div className='form-group'>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										placeholder='Your Message'
										rows='6'
										required
										className='form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none transition-all duration-300 resize-vertical'
									/>
								</div>

								{/* Form Status Messages */}
								{formStatus.success && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className='flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400'>
										<FiCheck size={18} />
										<span>Message saved locally! I\'ll get back to you soon.</span>
									</motion.div>
								)}

								{formStatus.error && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className='flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400'>
										<FiAlertCircle size={18} />
										<span>{formStatus.error}</span>
									</motion.div>
								)}

								<motion.button
									type='submit'
									disabled={formStatus.loading}
									className='w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
									whileHover={{ scale: formStatus.loading ? 1 : 1.02 }}
									whileTap={{ scale: formStatus.loading ? 1 : 0.98 }}>
									{formStatus.loading ? (
										<>
											<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white' />
											Sending...
										</>
									) : (
										<>
											<FiSend size={18} />
											Send Message
										</>
									)}
								</motion.button>
							</form>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
