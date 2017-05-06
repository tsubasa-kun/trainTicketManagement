<template>
    <div class="content">
        <div class="item-div">
            <mt-field label="账号：" placeholder="请输入账号" v-model="account"></mt-field>
            <div class="line"></div>
            <mt-field label="密码：" placeholder="请输入密码" v-model="password"></mt-field>
            <div class="line"></div>
            <mt-field label="真实姓名：" placeholder="请输入真实姓名" v-model="realName"></mt-field>
            <div class="line"></div>
            <mt-field label="身份证号：" placeholder="请输入身份证号（18位）" v-model="idNumber"></mt-field>
            <div class="btn-div">
                <mt-button type="primary" class="btn" @click="doAddUser">添加</mt-button>
                <mt-button type="primary" class="btn" @click="cancel">取消</mt-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        text-align: center;
    }

    .item-div {
        width: 50%;
        margin: auto;
    }

    .line {
        width: 100%;
        height: 1PX;
        background-color: #ddd;
    }

    .btn-div {
        margin-top: 20PX;
        margin-bottom: 20PX;
    }

    .btn {
        width: 280PX;
    }
</style>

<script type="text/javascript">
    import {Field, Button, Indicator} from 'mint-ui';
    import Utils from '../../utils';
    import Api from '../../api';

    export default {
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
            [Indicator.name]: Indicator
        },
        data() {
            return {
                account: '',
                password: '',
                realName: '',
                idNumber: ''
            }
        },
        methods: {
            doAddUser: function () {
                if (this.account.length === 0) {
                    Utils.methods.showToast('请输入账号');
                } else if (this.password.length === 0) {
                    Utils.methods.showToast('请输入密码');
                } else if (this.realName.length === 0) {
                    Utils.methods.showToast('请输入真实姓名');
                } else if (this.idNumber.length === 0) {
                    Utils.methods.showToast('请输入身份证号');
                } else if (this.idNumber.length !== 18) {
                    Utils.methods.showToast('身份证号必须为18位');
                } else {
                    Indicator.open();
                    var params = '?account=' + this.account
                        + '&password=' + this.password
                        + '&realName=' + encodeURI(encodeURI(this.realName))
                        + '&idNumber=' + this.idNumber;
                    this.$http.get(Api.ADD_USER + params)
                        .then(res => {
                            return res.json();
                        })
                        .then(res =>{
                            console.log(res);
                            if (res.resStatus === 'success') {
                                this.$router.push({path: '/index', query: {'selected': '2'}});
                            }
                            Utils.methods.showToast(res.resMsg);
                            Indicator.close();
                        });
                }
            },
            cancel: function () {
                this.$router.push({path: '/index', query: {'selected': '2'}});
            }
        }
    }
</script>