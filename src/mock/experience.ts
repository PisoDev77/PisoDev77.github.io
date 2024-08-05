export type experienceType = {
	title: string;
	startDate: Date;
	endDate: Date;
	isWorking: boolean;
	task: string;
	role: string;
	details: string[];
};

export const experiences: experienceType[] = [
	{
		title: 'Visang',
		startDate: new Date('2023-12-21'),
		endDate: new Date(),
		isWorking: true,
		task: '디지털 웹 콘텐츠 저작',
		role: '프리랜서',
		details: [
			'영어 교과서 디지털 웹 컨텐츠 저작',
			'html 문법으로 이루어진 내용들을 내부 툴로 옮기는 작업',
			'puppeteer 와 같은 라이브러리를 이용 마우스 수작업으로 업로드하던 컨텐츠를 시간 단축',
			'기존 한 명이 컨텐츠 10개 기준으로 5분 작업 → 컨텐츠 100개 5분 미만 작업',
			'Excel의 VBA를 활용하여 Raw한 영어 컨텐츠들이 필요한 열이나 값으로 자동으로 정렬되도록 제작. 엑셀 및 VBA 문외한도 읽을 수 있도록 노력.',
			'영어교육과 출신 동료도 함수이름만 가지고 활용 가능 ex) 학교이름가져오기()',
		],
	},
	{
		title: 'Solvook',
		startDate: new Date('2023-04-01'),
		endDate: new Date('2024-03-31'),
		isWorking: false,
		task: '디지털 웹 콘텐츠 편집',
		role: '프리랜서',
		details: [
			'영어 교과서 및 참고서의 본문등의 내용을 디지털 콘텐츠로 만드는 작업.',
			'본문을 문단, 문장 단위로 나누어 하나의 행(데이터) 만드는 작업',
			'Solvook parsing helper 라는 자체 사이트를 제작하여, 복사가 어려운 문자들을 등록',
			'자체 사이트를 같은 작업을 하는 아르바이트 친구들도 사용 가능하도록 제작.',
			'기존 3명 이상의 인원이 붙은 작업을 혼자 처리할 수 있도록 구도 정리',
		],
	},
];
