import index from './pages/index/index.vue';
import login from './pages/login/login.vue';
import addTicket from './pages/addTicket/addTicket.vue';
import modifyTicket from './pages/modifyTicket/modifyTicket.vue';
import addUser from './pages/addUser/addUser.vue';
import modifyUser from './pages/modifyUser/modifyUser.vue';

export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/addTicket',
            component: addTicket
        },
        {
            path: '/modifyTicket',
            component: modifyTicket
        },
        {
            path: '/addUser',
            component: addUser
        },
        {
            path: '/modifyUser',
            component: modifyUser
        }
    ]
};