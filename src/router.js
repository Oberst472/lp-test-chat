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
                        aside: require('./components/sections/aside').default,
                        default: require('./pages/main').default
                    },
                    meta: {
                        title: `Все диалоги`
                    }
                },
                {
                    path: '/create',
                    name: 'create',
                    components: {
                        aside: require('./components/sections/aside').default,
                        default: require('./pages/create').default
                    },
                    meta: {
                        title: `Создать диалог`
                    }
                },
                {
                    path: `/dialog/:id`,
                    name: 'dialog',
                    components: {
                        aside: require('./components/sections/aside').default,
                        default: require('./pages/dialog').default
                    },
                    meta: {
                        title: `Диалог`
                    }
                }
            ]
        }
    ]
})
