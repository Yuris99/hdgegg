import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import OnLoad from 'vue-onload'

let app = createApp(App);
app.use(router);
app.use(OnLoad);


app.mount('#app');
