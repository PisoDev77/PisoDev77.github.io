export type experienceType = {
	title: string;
	startDate: Date;
	endDate: Date;
	isWorking: boolean;
	task: string;
	role: string;
};

export const experiences: experienceType[] = [
	{
		title: 'Visang',
		startDate: new Date('2023-12-21'),
		endDate: new Date(),
		isWorking: true,
		task: '디지털 웹 콘텐츠 저작',
		role: '프리랜서',
	},
	{
		title: 'Solvook',
		startDate: new Date('2023-04-01'),
		endDate: new Date('2024-03-31'),
		isWorking: false,
		task: '디지털 웹 콘텐츠 편집',
		role: '프리랜서',
	},
];
