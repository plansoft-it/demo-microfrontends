import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import { FrameworksComponent } from './frameworks.component';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
	
    el: '#frameworks',
    template: `
      <div id="frameworks">
          <frameworks></frameworks>
      </div>
    `,
    components: {
      'frameworks': FrameworksComponent,
    },
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
