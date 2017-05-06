<template>
    <div>
        <div class="header-div">
            <span class="title-text">中国铁路12307管理平台</span>
            <span class="account-label">admin</span>
            <mt-button type="primary" class="logout-btn" @click="doLogout">退出登录</mt-button>
        </div>
        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">车票管理</mt-tab-item>
                <mt-tab-item id="2">用户管理</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <v-ticket-manage></v-ticket-manage>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <v-user-manage></v-user-manage>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<style scoped>
    .header-div{
        background:#ffffff;
        padding: 20PX;
        text-align: center;
        position: relative;
    }

    .title-text {
        font-size: 50PX;
    }

    .account-label {
        position: absolute;
        top: 48PX;
        right: 140PX;
        color: #26a2ff;
        font-size: 14PX;
    }

    .logout-btn {
        position: absolute;
        top: 34PX;
        right: 20PX;
    }
</style>

<script type="text/javascript">
    import {Button, Navbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';
    import ticketManage from '../ticketManage/ticketManage.vue';
    import userManage from '../userManage/userManage.vue';
    import Api from '../../api';
    import Utils from '../../utils';

    export default {
        data(){
            return {
                selected: this.$route.query.selected,
            }
        },
        created() {
            if ($.session.get('admin_id') === undefined) {
                this.$router.push('/login');
            }
        },
        components: {
            [Button.name]: Button,
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            'v-ticket-manage': ticketManage,
            'v-user-manage': userManage
        },
        methods: {
            doLogout: function () {
                $.session.clear();
                this.$router.push('/login');
            }
        }
    }
</script>