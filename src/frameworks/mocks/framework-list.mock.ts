import { IFramework } from './../models/framework.model';
export const frameworkListMock: IFramework[] = [{
	name: 'AngularJs',
	logo: `${window.location.origin}/images/angularJS-logo.svg`,
	description: 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
},{
	name: 'React',
	logo: `${window.location.origin}/images/react-logo.png`,
	description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
},{
	name: 'Vue',
	logo: `${window.location.origin}/images/vue-logo.png`,
	description: 'A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.'
},{
	name: 'Web components',
	logo: `${window.location.origin}/images/web-components-logo.png`,
	description: 'Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML'
},{
	name: 'Miki',
	logo: `${window.location.origin}/images/miki.jpeg`,
	description: 'It is difficult to introduce bugs in HTML, Miki js can do it through its simples API'
},{
	name: 'Single spa',
	logo: `${window.location.origin}/images/single-spa-logo.svg`,
	description: 'single-spa is a framework for bringing together multiple javascript microfrontends in a frontend application'
}];