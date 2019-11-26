import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.config.productionTip = false
//extend core functionality adding resource to use function
Vue.use(VueResource);

// set up vue resource url globaly
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/posts/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'PUT'
  }
  next();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
