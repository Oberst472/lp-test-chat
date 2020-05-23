import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            component: require('./layouts/main').default,
            children: [
                {
                    path: '/',
                    name: 'main',
                    components: {
                        nav: require('./components/sections/nav').default,
                        default: require('./pages/main').default
                    },
                    meta: {
                        title: `Все диалоги`
                    }
                },
                {
                    path: `/chatroom/:id`,
                    name: 'chatroom',
                    components: {
                        nav: require('./components/sections/nav').default,
                        default: require('./pages/chatroom').default
                    },
                    meta: {
                        title: `Диалог`
                    }
                }
            ]
        }
    ]
})
