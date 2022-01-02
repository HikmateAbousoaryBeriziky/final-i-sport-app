import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/fontawesome/all.min.js'
import router from './router'

/* Vue.config.productionTip=false */
createApp(App).use(router).mount('#app')

/* new Vue({
    router,
    render:h => h(App)
}).$mount('#app')  */
