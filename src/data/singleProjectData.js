// Import images
import cypressTest_img from '../images/cypress-test.png';
import geniusUi_img from '../images/genius-ui.png';
import genius_Ui2 from '../images/genius_ui2.png';
import jobPortalWeb_img from '../images/job-portal-web.png';
import jobOther1 from '../images/job_other1.png'
import jobOther2 from '../images/job_other2.png'
import tgadsUi_img from '../images/tgads-ui.png';
import tgads_Ui2 from '../images/tgads2.png'
// import Image5 from '../images/web-project-1.jpg';
// import Image6 from '../images/ui-project-2.jpg';


export const singleProjectData = {
	project: [
		{
			ProjectHeader: {
				title: 'Job Portal Website',
				publishDate: 'Sept 12, 2023',
				tags: 'UI / Frontend / Backend',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Home page',
					img: jobPortalWeb_img,
				},
				{
					id: 2,
					title: 'job seekers registration',
					img: jobOther1,
				},
				{
					id: 3,
					title: 'job listing',
					img: jobOther2,
				},
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: 'Personal Project',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design , Backend & Frontend Development',
					},
					{
						id: 3,
						title: 'Phone',
						details: ' +251 967450600',
					},
					// {
					// 	id: 4,
					// 	title: 'Phone',
					// 	details: ' +251 967450600',
					// },
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: 'The objective of a job portal website is to connect job seekers with employers and facilitate the job search and recruitment process.',


					
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Reactjs',
							'TailwindCSS',
							'Figma',
							'Spring Boot'
						],
					},
				],
				ProjectDetailsHeading: 'Details',
				ProjectDetails: [
					{
						id: 1,
						details: 'This project aims to connect employeers and job seekers in one platform. Here are some specific objectives of the website job listing , account creation for both employers and employees, resume/ CV upload, admin dashoboard , connecting job seekers and employers.',
					},
					{
						id: 2,
						details: 'The project is made using react for frontend and spring boot for backend. additionally I used figma to design the layout from the scatch before Implementation.',
					},
					{
						id: 3,
						details: 'It has a search mechanism to find a job based on location and job title. This is more useful to save users time in searching different kinds of jobs.',
					},	
					// {
					// 	id: 4,
					// 	details: 'Increasing Job Opportunities: Job portals provide many different job options from the best companies. This means you have a better chance of finding the job you want, no matter where or how you’re looking.',
					// },
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'E-commerce platform UI',
						img: geniusUi_img,
					},
					{
						id: 2,
						title: 'Web Application',
						img: genius_Ui2,
					},
					// {
					// 	id: 3,
					// 	title: 'UI Design',
					// 	img: geniusUi_img1,
					// },
					// {
					// 	id: 4,
					// 	title: 'Kabul Mobile App UI',
					// 	img: geniusUi_img1,
					// },
				],
			},
		},






		// project 2 data 
		{
			ProjectHeader: {
				title: 'E2E Testing',
				publishDate: 'April 2023',
				tags: 'Testing',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'E2E Testing',
					img: cypressTest_img,
				},
				// {
				// 	id: 2,
				// 	title: 'E2E Testing',
				// 	img: cypressTest_img1,
				// },
				// {
				// 	id: 3,
				// 	title: 'E2E Testing',
				// 	img: cypressTest_img1,
				// },
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: 'Class project ',
					},
					{
						id: 2,
						title: 'Services',
						details: 'End to End Testing using cypress',
					},
					// {
					// 	id: 3,
					// 	title: 'Phone',
					// 	details: '+251 967450600',
					// },
					// {
					// 	id: 4,
					// 	title: 'Phone',
					// 	details: '+251 967450600',
					// },
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
					'Main objective of this project is create a simple website and perform E2E testing using cypress.',
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Cypress',
							'ReactJs',
							'Node',
						],
					},
				],
				ProjectDetailsHeading: 'Project detail',
				ProjectDetails: [
					{
						id: 1,
						details:
							'Here cypress is used because it provides built-in commands for interacting with the DOM (Document Object Model) of the web application under test so that testers can use these commands to interact with elements, simulate user actions, and perform assertions to verify the expected behavior of the application.',
					},
					{
						id: 2,
						details:
							'Since the project is learning based course project, we created a simple to do list web application using react for frontend , node js for backend , database mysql and cypress for testing purpose.',
					},
					// {
					// 	id: 3,
					// 	details:
					// 		'Real-Time Reloads and Debugging: Cypress offers a unique feature called "Time Travel" that allows testers to see the application state at any given moment during test execution. It also provides real-time reloading, which means that as testers make changes to their test scripts, they can see the results immediately in the browser.',
					// },
					// {
					// 	id: 4,
					// 	details:
					// 		'JavaScript-Based Testing: Cypress allows you to write test scripts in JavaScript, making it accessible to developers who are familiar with the language. This enables testers to leverage their existing JavaScript knowledge and skills.',
					// },
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: tgadsUi_img,
					},
					{
						id: 2,
						title: 'Web Application',
						img: tgads_Ui2,
					},
					// {
					// 	id: 3,
					// 	title: 'UI Design',
					// 	img: tgadsUi_img2,
					// },
					// {
					// 	id: 4,
					// 	title: 'Kabul Mobile App UI',
					// 	img: tgadsUi_img2,
					// },
				],
			},
		},






		// project 3 data 
		{
			ProjectHeader: {
				title: 'Advertising Platform UI',
				publishDate: 'jan 2023',
				tags: 'UI/UX Design',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Home page',
					img: tgadsUi_img,
				},
				{
					id: 2,
					title: 'advertiser and publisher',
					img: tgads_Ui2,
				},
				// {
				// 	id: 3,
				// 	title: 'job listing',
				// 	img: jobOther2,
				// },
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: 'Personal Project',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design',
					},
					// {
					// 	id: 3,
					// 	title: 'Website',
					// 	details: 'https://company.com',
					// },
					// {
					// 	id: 4,
					// 	title: 'Phone',
					// 	details: ' +251 967450600',
					// },
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: 'The main objective is to design a web application.',


					
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Figma',
	
						],
					},
				],
				ProjectDetailsHeading: '',
				ProjectDetails: [
					// {
					// 	id: 1,
					// 	details: 'This design is aimed to improve  ',
					// },
					// {
					// 	id: 2,
					// 	details: 'As a campany you are allowed to make as many job ads as your company requires. Once you’ve put them out there, you can either wait for people to apply or look at resumes on the website. Each job posting has its own spot where all the applications are kept. This makes it simple to find and look at people who might be right for the job. You can usually get in touch with these people or ask for more info directly through the website. If you find good candidates, you can begin the hiring process from there.',
					// },
					// {
					// 	id: 3,
					// 	details: 'When you are trying to find the right people for your company, using a job portal can help you do that easily. It helps you pick the best person for the job. This way, you’ll have a list of applicants who have the skills, accomplishments, and experience you’re looking for.',
					// },
					// {
					// 	id: 4,
					// 	details: 'Increasing Job Opportunities: Job portals provide many different job options from the best companies. This means you have a better chance of finding the job you want, no matter where or how you’re looking.',
					// },
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'E-commerce platform UI',
						img: tgadsUi_img,
					},
					{
						id: 2,
						title: 'Web Application',
						img: tgads_Ui2,
					},
					// {
					// 	id: 3,
					// 	title: 'UI Design',
					// 	img: geniusUi_img1,
					// },
					// {
					// 	id: 4,
					// 	title: 'Kabul Mobile App UI',
					// 	img: geniusUi_img1,
					// },
				],
			},
		},








		// project 4 data 
		{
			ProjectHeader: {
				title: 'E-commerce platform UI',
				publishDate: 'Nov 2023',
				tags: 'UI/UX Design',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Home page',
					img: geniusUi_img,
				},
				{
					id: 2,
					title: 'users feedback',
					img: genius_Ui2,
				},
				// {
				// 	id: 3,
				// 	title: 'job listing',
				// 	img: jobOther2,
				// },
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: 'Personal Project',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design',
					},
					// {
					// 	id: 3,
					// 	title: 'Website',
					// 	details: 'https://company.com',
					// },
					// {
					// 	id: 4,
					// 	title: 'Phone',
					// 	details: ' +251 967450600',
					// },
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: 'The main objective is to design a web application.',


					
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Figma',
	
						],
					},
				],
				ProjectDetailsHeading: '',
				ProjectDetails: [
					// {
					// 	id: 1,
					// 	details: 'This design is aimed to improve  ',
					// },
					// {
					// 	id: 2,
					// 	details: 'As a campany you are allowed to make as many job ads as your company requires. Once you’ve put them out there, you can either wait for people to apply or look at resumes on the website. Each job posting has its own spot where all the applications are kept. This makes it simple to find and look at people who might be right for the job. You can usually get in touch with these people or ask for more info directly through the website. If you find good candidates, you can begin the hiring process from there.',
					// },
					// {
					// 	id: 3,
					// 	details: 'When you are trying to find the right people for your company, using a job portal can help you do that easily. It helps you pick the best person for the job. This way, you’ll have a list of applicants who have the skills, accomplishments, and experience you’re looking for.',
					// },
					// {
					// 	id: 4,
					// 	details: 'Increasing Job Opportunities: Job portals provide many different job options from the best companies. This means you have a better chance of finding the job you want, no matter where or how you’re looking.',
					// },
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'E-commerce platform UI',
						img: tgadsUi_img,
					},
					{
						id: 2,
						title: 'Web Application',
						img: tgads_Ui2,
					},
					// {
					// 	id: 3,
					// 	title: 'UI Design',
					// 	img: geniusUi_img1,
					// },
					// {
					// 	id: 4,
					// 	title: 'Kabul Mobile App UI',
					// 	img: geniusUi_img1,
					// },
				],
			},
		},

	],












};
