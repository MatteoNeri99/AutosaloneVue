import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assicurati di importarlo

const app = createApp(App);
app.use(router); // Assicurati che Vue usi il router
app.mount('#app');

