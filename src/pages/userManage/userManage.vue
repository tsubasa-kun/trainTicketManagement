<template>
    <div class="content">
        <mt-button type="primary" class="add-btn" @click="toAddUser">新增用户</mt-button>
        <table>
            <tr>
                <td><b>账号</b></td>
                <td><b>密码</b></td>
                <td><b>真实姓名</b></td>
                <td><b>身份证号码</b></td>
                <td><b>操作</b></td>
            </tr>
            <tr v-for="user in users">
                <td>{{ user.account }}</td>
                <td>{{ user.password }}</td>
                <td>{{ user.realName }}</td>
                <td>{{ user.idNumber }}</td>
                <td>
                    <mt-button type="primary" @click="toModifyUser(user)">编辑</mt-button>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        text-align: center;
    }

    .add-btn {
        margin-top: 20PX;
        width: 280PX;
    }

    table {
        border: solid 1PX black;
        text-align: center;
        margin: 20PX auto;
    }

    td {
        border: solid 1PX black;
        padding: 5PX;
    }
</style>

<script type="text/javascript">
    import Api from '../../api';
    import {Button, Indicator} from 'mint-ui';

    export default {
        data() {
            return {
                users: []
            }
        },
        created() {
            Indicator.open();
            this.$http.get(Api.QUERY_ALL_USER)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.users = res.users;
                    Indicator.close();
                });
        },
        components: {
            [Button.name]: Button,
            [Indicator.name]: Indicator
        },
        methods: {
            toAddUser: function () {
                this.$router.push('/addUser');
            },
            toModifyUser: function (user) {
                this.$router.push({
                    path: '/modifyUser', query: {
                        'userId': user.userId,
                        'account': user.account,
                        'password': user.password,
                        'realName': user.realName,
                        'idNumber': user.idNumber
                    }
                });
            }
        }
    }
</script>