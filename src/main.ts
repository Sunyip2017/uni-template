import { createSSRApp } from "vue";
import App from "./App.vue";
import Store from './store'
// import 'virtual:windi.css';
export function createApp() {
  const app = createSSRApp(App);
  app.use(Store)
  return {
    app,
  };
}
