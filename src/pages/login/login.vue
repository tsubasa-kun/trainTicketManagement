<template>
    <div class="content">
        <div>
            <img src="../../assets/title_bg.jpg">
        </div>
        <div class="login-info-div">
            <mt-field label="账　号：" placeholder="请输入账号" v-model="username"></mt-field>
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
</style>

<script type="text/javascript">
    import {Field, Button} from 'mint-ui';
    import Utils from '../../utils';

    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        components: {
            [Field.name]: Field,
            [Button.name]: Button
        },
        methods: {
            doLogin: function () {
                if (this.username.length === 0) {
                    Utils.methods.showToast('请输入账号');
                } else if (this.password.length === 0) {
                    Utils.methods.showToast('请输入密码');
                } else {

                }
            }
        }
    }
</script>