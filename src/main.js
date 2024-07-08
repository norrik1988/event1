import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import PrimeButton from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import router from './router';

import 'primevue/resources/themes/saga-blue/theme.css';  // Tema di PrimeVue
import 'primevue/resources/primevue.min.css';            // Stili di PrimeVue
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');

app.component('p-menubar', Menubar);
app.component('PrimeButton', PrimeButton);
app.component('InputText', InputText);
