export interface IWorkshop {
	title: string;
	description: string;
	img: string;
}

export const workshops: IWorkshop[] = [{
	title: 'Flutter',
	description: 'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
	img: 'images/flutter-logo.svg',
}, {
	title: 'puppeteer',
	description: 'Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.',
	img: 'images/puppeteer-logo.png',
},{
	title: 'Micro frontends',
	description: 'The term Micro Frontends first came up in ThoughtWorks Technology Radar at the end of 2016. It extends the concepts of micro services to the frontend world. The current trend is to build a feature-rich and powerful browser application, aka single page app, which sits on top of a micro service architecture.',
	img: 'images/bricks.jpg',
}];
