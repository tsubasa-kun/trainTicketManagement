/**
 * Created by xiekun on 2017/4/12 0012.
 */
global.DOMAIN = 'http://192.168.1.11:8080';
global.SERVER_URL = global.DOMAIN + '/TrainTicketServer/servlet/';
export default {
    ADMIN_LOGIN: global.SERVER_URL + 'AdminLoginServlet',//登录
    QUERY_ALL_TICKET: global.SERVER_URL + 'QueryAllTicketServlet',//查询所有车票
    ADD_TICKET: global.SERVER_URL + 'AddTicketServlet',//添加车票
    DELETE_TICKET: global.SERVER_URL + 'DeleteTicketServlet',//删除车票
    MODIFY_TICKET: global.SERVER_URL + 'ModifyTicketServlet',//修改车票
    QUERY_ALL_USER: global.SERVER_URL + 'QueryAllUserServlet',//查询所有用户
    ADD_USER: global.SERVER_URL + 'AddUserServlet',//添加用户
    DELETE_USER: global.SERVER_URL + 'DeleteUserServlet',//删除用户
    MODIFY_USER: global.SERVER_URL + 'ModifyUserServlet',//修改用户
    QUERY_ALL_ORDER: global.SERVER_URL + 'QueryAllOrderServlet'//查询所有订单
}
