import * as angular from 'angular';
import 'angular-ui-router';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { routes } from './routes';

angular
.module('single-spa-app', ['ui.router'])
.component('speakers', new SpeakersComponent())
.config(($stateProvider, $locationProvider) => {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
	});
	
	routes.forEach(route => {
		$stateProvider
			.state(route.name, {
				url: route.url,
				template: route.template
			})
	});
});

