import { createApp } from 'vue'
import App from './App'
import components from '@/сomponents/UI'
import router from "@/сomponents/router/router";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app');
//use используется чтобы зарегестрировать   отдельные модули

