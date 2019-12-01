import './home.component';
import singleSpaHtml from 'single-spa-html';
const htmlLifecycles = singleSpaHtml({
  template: '<home-component/>',
})
export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;