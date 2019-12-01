import {registerApplication, start} from 'single-spa';
import 'babel-polyfill';

registerApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
registerApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
registerApplication('speakers', () => import('./speakers/speakers.app.js'), pathPrefix('/speakers'));
registerApplication('workshops', () => import('./workshops/workshops.app.js'), pathPrefix('/workshops'));
registerApplication('frameworks', () => import('./frameworks/framework.app.js'), pathPrefix('/frameworks'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
