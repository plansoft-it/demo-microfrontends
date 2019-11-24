import {registerApplication, start} from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
import 'babel-polyfill';
import './../node_modules/materialize-css/dist/js/materialize';

registerApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
registerApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('angularjs', () => import('./angularjs/angularjs.app.js'), pathPrefix('/angularjs'));
registerApplication('workshops', () => import('./workshops/workshops.app.js'), pathPrefix('/workshops'));
registerApplication('angular', () => import('./angular/angular.app.js'), pathPrefix('/angular'));
registerApplication('vue', () => import('src/vue/vue.app.js'), pathPrefix('/vue'));
registerApplication('svelte', () => import('src/svelte/svelte.app.js'), pathPrefix('/svelte'));
registerApplication('preact', () => import('src/preact/preact.app.js'), pathPrefix('/preact'));
registerApplication('iframe-vanilla-js', () => import('src/vanillajs/vanilla.app.js'), pathPrefix('/vanilla'));
registerApplication('inferno', () => import('src/inferno/inferno.app.js'), pathPrefix('/inferno'));
registerApplication('cyclejs', () => import('src/cyclejs/cycle.app.js'), pathPrefix('/cycle'));
registerApplication('ember', () => loadEmberApp("ember-app", '/build/ember-app/assets/ember-app.js', '/build/ember-app/assets/vendor.js'), pathPrefix('/ember'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
