export default {
    subApps: [
        {
            name: 'app', // 子应用名称，跟package.json一致
            entry: '//localhost:7001', // 子应用入口，本地环境下指定端口
            container: '#sub-vue-container', // 挂载子应用的dom
            activeRule: '/app/app-vue3', // 路由匹配规则
            props: {} // 主应用与子应用通信传值
        },
        {
            name: 'app-react', // 子应用名称，跟package.json一致
            entry: '//localhost:7002', // 子应用入口，本地环境下指定端口
            container: '#sub-react-container', // 挂载子应用的dom
            activeRule: '/app/app-react', // 路由匹配规则
            props: {} // 主应用与子应用通信传值
        },
    ]
}
