import {registerApplication, start} from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
import 'babel-polyfill';

registerApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
registerApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('speakers', () => import('./speakers/angularjs.app.js'), pathPrefix('/speakers'));
registerApplication('workshops', () => import('./workshops/workshops.app.js'), pathPrefix('/workshops'));
registerApplication('frameworks', () => import('./frameworks/framework.app.js'), pathPrefix('/frameworks'));
registerApplication('iframe-vanilla-js', () => import('src/vanillajs/vanilla.app.js'), pathPrefix('/vanilla'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
