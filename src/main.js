import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.config.productionTip = false
//extend core functionality adding resource to use function
Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')
