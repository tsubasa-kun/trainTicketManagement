<template>
    <div class="content">
        <div>
            <img src="../../assets/title_bg.jpg">
        </div>
        <div class="login-info-div">
            <mt-field label="账　号：" placeholder="请输入账号" v-model="account"></mt-field>
            <div class="line"></div>
            <mt-field label="密　码：" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary" class="login-btn" @click="doLogin">登录</mt-button>
        </div>
    </div>
</template>

<style scoped>
    .content {
        text-align: center;
        padding-top: 50PX;
    }

    .content img {
        width: 25%;
        height: 200PX;
    }

    .login-info-div {
        width: 25%;
        margin: 0 auto;
    }

    .login-btn {
        width: 50%;
        margin-top: 20PX;
    }

    .line {
        width: 100%;
        height: 1PX;
        background-color: #ddd;
    }
</style>

<script type="text/javascript">
    import {Field, Button, Indicator} from 'mint-ui';
    import Utils from '../../utils';
    import Api from '../../api';

    export default {
        data() {
            return {
                account: '',
                password: ''
            }
        },
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
            [Indicator.name]: Indicator
        },
        methods: {
            doLogin: function () {
                if (this.account.length === 0) {
                    Utils.methods.showToast('请输入账号');
                } else if (this.password.length === 0) {
                    Utils.methods.showToast('请输入密码');
                } else {
                    Indicator.open();
                    var params = '?account=' + this.account + '&password=' + this.password;
                    this.$http.get(Api.ADMIN_LOGIN + params)
                        .then(res => {
                            return res.json();
                        })
                        .then(res => {
                            if (res.resStatus === 'success') {
                                $.session.set('admin_id', res.userId);
                                this.$router.push({path: '/index', query: {'selected': '1'}});
                            } else {
                                Utils.methods.showToast(res.resMsg);
                            }
                            Indicator.close();
                        });
                }
            }
        }
    }
</script>