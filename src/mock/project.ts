export type projectType = {
	title: string;
	startDate: Date;
	endDate: Date;
	details: string[];
	github: string;
	page: string;
};

export const projects: projectType[] = [
	{
		title: 'Helper',
		startDate: new Date('2023-04-26'),
		endDate: new Date(),
		details: [
			'같이 아르바이트 하는 친구들이 단순 반복 노동작업을 도와주는 웹페이지를 제작하여',
			'단순 업무 효율을 높였습니다.',
			'기존 8시간 혼자서 250개 문제를 파싱 ⇒ 둘이서 6시간 동안 550개 문제 파싱',
			'아르바이트 중 반복적인 파싱 작업의 효율성을 높이기 위해 웹페이지를 제작',
			'React, JavaScript(ES6+)를 사용하여 SPA 형태로 개발',
			'기존 수작업 대비 2배 이상 생산성 향상된 것으로 추정',
		],
		github: 'https://github.com/PisoDev77/solvook-utils',
		page: 'https://pisodev77.github.io/solvook-utils/',
	},
	{
		title: '팀 프로젝트 - 👀자리어때 ',
		startDate: new Date('2023-01-31'),
		endDate: new Date('2023-03-09'),
		details: [
			'공연 좌석 리뷰 서비스 개발 및 배포 (프론트엔드 담당)',
			'매일 스크럼을 통해 백엔드 팀과 지속적인 협업',
			'자리어때 검색과 채팅을 담당했습니다.',
			'무한 스크롤 및 검색어 자동완성 기능 구현 (Intersection Observer API, reactquery, lodash 활용)',
			'WebSocket, SockJS, Stomp를 이용해 실시간 채팅 기능 개발',
			'Git-flow 전략으로 체계적인 브랜치 전략 운영',
		],
		github: 'https://github.com/seatchoice',
		page: 'https://seatchoice-brzg5m0ep-seat-choice.vercel.app/',
	},
	{
		title: '팀 프로젝트 - DUI ',
		startDate: new Date('2023-01-31'),
		endDate: new Date('2023-03-09'),
		details: [
			'블로그 서비스 기능 개발 (프론트엔드/백엔드 통합)',
			'HTML, CSS, Vanilla JS로 반응형 UI 구현',
			'Express, Node.js 기반 RESTful API 백엔드 개발',
			'Git-flow 전략으로 체계적인 브랜치 전략 운영',
			'Vercel을 이용한 클라이언트/서버 배포 자동화',
		],
		github: 'https://github.com/piso-deepdive-project/DUI',
		page: 'https://dui-dui.vercel.app/',
	},
];
