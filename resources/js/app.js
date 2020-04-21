require('./bootstrap');
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElementThai from 'element-ui/lib/locale/lang/th';

// import ElementEng from 'element-ui/lib/locale/lang/en';

window.Vue = Vue

Vue.use(ElementUI, { locale: ElementThai });

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('my-component', require('./components/MyComponent.vue').default);

import MyComponent from './components/MyComponent.vue'
import ChawLayouts from './components/ChawLayouts.vue'

const app = new Vue({
    components:{
        MyComponent, ChawLayouts
    }
}).$mount('#app')
