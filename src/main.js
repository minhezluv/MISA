import Vue from 'vue'
import App from './App.vue'
// import FormatData from './utils/FormatData'
// import Validate from './utils/Validate'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')