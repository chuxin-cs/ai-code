import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {
    renderWithQiankun, qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'


let root;

function render(container) {
    root = createRoot(
        container
            ? container.querySelector('#root') : document.getElementById('root'))
    root.render(<App/>)
}

const initQianKun = () => {
    renderWithQiankun({
        mount(props) {
            console.log(222)
            const {container} = props
            render(container)
        }, bootstrap() {
        }, unmount() {
            root.unmount()
        }
    })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()