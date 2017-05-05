import index from './pages/index/index.vue';
import login from './pages/login/login.vue';

export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/login',
            component: login
        }
    ]
};