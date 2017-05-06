<template>
    <div class="content">
        <div class="item-div">
            <mt-field label="车次：" placeholder="请输入车次" v-model="trainCode"></mt-field>
            <div class="line"></div>
            <mt-field label="日期：" placeholder="请输入日期(0000-00-00)" v-model="startDate"></mt-field>
            <div class="line"></div>
            <mt-field label="出发站：" placeholder="请输入出发站" v-model="startStationName"></mt-field>
            <div class="line"></div>
            <mt-field label="发车时间：" placeholder="请输入发车时间(00:00)" v-model="startTime"></mt-field>
            <div class="line"></div>
            <mt-field label="历时：" placeholder="请输入历时(00:00)" v-model="lishi"></mt-field>
            <div class="line"></div>
            <mt-field label="目的地：" placeholder="请输入目的地" v-model="toStationName"></mt-field>
            <div class="line"></div>
            <mt-field label="到达时间：" placeholder="请输入到达时间(00:00)" v-model="arriveTime"></mt-field>
            <div class="line"></div>
            <mt-field label="商务座数量：" type="number" placeholder="请输入商务座数量" v-model="swzNum"></mt-field>
            <div class="line"></div>
            <mt-field label="一等座数量：" type="number" placeholder="请输入一等座数量" v-model="zyNum"></mt-field>
            <div class="line"></div>
            <mt-field label="二等座数量：" type="number" placeholder="请输入二等座数量" v-model="zeNum"></mt-field>
            <div class="line"></div>
            <mt-field label="硬座数量：" type="number" placeholder="请输入硬座数量" v-model="yzNum"></mt-field>
            <div class="line"></div>
            <mt-field label="硬卧数量：" type="number" placeholder="请输入硬卧数量" v-model="ywNum"></mt-field>
            <div class="line"></div>
            <mt-field label="无座数量：" type="number" placeholder="请输入无座数量" v-model="wzNum"></mt-field>
            <div class="line"></div>
            <mt-field label="商务座价格：" type="number" placeholder="请输入商务座价格" v-model="swzMoney"></mt-field>
            <div class="line"></div>
            <mt-field label="一等座价格：" type="number" placeholder="请输入一等座价格" v-model="zyMoney"></mt-field>
            <div class="line"></div>
            <mt-field label="二等座价格：" type="number" placeholder="请输入二等座价格" v-model="zeMoney"></mt-field>
            <div class="line"></div>
            <mt-field label="硬座价格：" type="number" placeholder="请输入硬座价格" v-model="yzMoney"></mt-field>
            <div class="line"></div>
            <mt-field label="硬卧价格：" type="number" placeholder="请输入硬卧价格" v-model="ywMoney"></mt-field>
            <div class="line"></div>
            <mt-field label="无座价格：" type="number" placeholder="请输入无座价格" v-model="wzMoney"></mt-field>
            <div class="btn-div">
                <mt-button type="primary" class="btn" @click="doAddTicket">添加</mt-button>
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
                trainCode: '',
                startDate: '',
                startStationName: '',
                startTime: '',
                lishi: '',
                toStationName: '',
                arriveTime: '',
                swzNum: '',
                zyNum: '',
                zeNum: '',
                yzNum: '',
                ywNum: '',
                wzNum: '',
                swzMoney: '',
                zyMoney: '',
                zeMoney: '',
                yzMoney: '',
                ywMoney: '',
                wzMoney: ''
            }
        },
        methods: {
            doAddTicket: function () {
                if (this.trainCode.length === 0) {
                    Utils.methods.showToast('请输入车次');
                } else if (this.startDate.length === 0) {
                    Utils.methods.showToast('请输入日期');
                } else if (this.startStationName.length === 0) {
                    Utils.methods.showToast('请输入出发站');
                } else if (this.startTime.length === 0) {
                    Utils.methods.showToast('请输入发车时间');
                } else if (this.lishi.length === 0) {
                    Utils.methods.showToast('请输入历时');
                } else if (this.toStationName.length === 0) {
                    Utils.methods.showToast('请输入目的地');
                } else if (this.arriveTime.length === 0) {
                    Utils.methods.showToast('请输入到达时间');
                } else if (this.swzNum.length === 0) {
                    Utils.methods.showToast('请输入商务座数量');
                } else if (this.zyNum.length === 0) {
                    Utils.methods.showToast('请输入一等座数量');
                } else if (this.zeNum.length === 0) {
                    Utils.methods.showToast('请输入二等座数量');
                } else if (this.yzNum.length === 0) {
                    Utils.methods.showToast('请输入硬座数量');
                } else if (this.ywNum.length === 0) {
                    Utils.methods.showToast('请输入硬卧数量');
                } else if (this.wzNum.length === 0) {
                    Utils.methods.showToast('请输入无座数量');
                } else if (this.swzMoney.length === 0) {
                    Utils.methods.showToast('请输入商务座价格');
                } else if (this.zyMoney.length === 0) {
                    Utils.methods.showToast('请输入一等座价格');
                } else if (this.zeMoney.length === 0) {
                    Utils.methods.showToast('请输入二等座价格');
                } else if (this.yzMoney.length === 0) {
                    Utils.methods.showToast('请输入硬座价格');
                } else if (this.ywMoney.length === 0) {
                    Utils.methods.showToast('请输入硬卧价格');
                } else if (this.wzMoney.length === 0) {
                    Utils.methods.showToast('请输入无座价格');
                } else {
                    Indicator.open();
                    var params = '?trainCode=' + this.trainCode
                        + '&startDate=' + this.startDate
                        + '&startStationName=' + encodeURI(encodeURI(this.startStationName))
                        + '&startTime=' + this.startTime
                        + '&lishi=' + this.lishi
                        + '&toStationName=' + encodeURI(encodeURI(this.toStationName))
                        + '&arriveTime=' + this.arriveTime
                        + '&swzNum=' + this.swzNum
                        + '&zyNum=' + this.zyNum
                        + '&zeNum=' + this.zeNum
                        + '&yzNum=' + this.yzNum
                        + '&ywNum=' + this.ywNum
                        + '&wzNum=' + this.wzNum
                        + '&swzMoney=' + this.swzMoney
                        + '&zyMoney=' + this.zyMoney
                        + '&zeMoney=' + this.zeMoney
                        + '&yzMoney=' + this.yzMoney
                        + '&ywMoney=' + this.ywMoney
                        + '&wzMoney=' + this.wzMoney;
                    this.$http.get(Api.ADD_TICKET + params)
                        .then(res => {
                            return res.json();
                        })
                        .then(res =>{
                            console.log(res);
                            if (res.resStatus === 'success') {
                                this.$router.push({path: '/index', query: {'selected': '1'}});
                            }
                            Utils.methods.showToast(res.resMsg);
                            Indicator.close();
                        });
                }
            },
            cancel: function () {
                this.$router.push({path: '/index', query: {'selected': '1'}});
            }
        }
    }
</script>