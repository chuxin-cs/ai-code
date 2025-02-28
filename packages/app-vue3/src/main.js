import { createApp } from 'vue'
import App from './App.vue'
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import router from './router'

let app

const render = (container) => {
    app = createApp(App)
    console.log(container,"container");
    app
        .use(router)
        .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
    renderWithQiankun({
        mount(props) {
            console.log(111)
            const { container } = props
            render(container)
        },
        bootstrap() {},
        unmount() {
            app.unmount()
        }
    })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
