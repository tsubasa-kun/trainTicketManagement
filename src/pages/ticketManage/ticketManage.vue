<template>
    <div class="content">
        <mt-button type="primary" class="add-btn" @click="toAddTicket">新增车票</mt-button>
        <table>
            <tr>
                <td><b>车次</b></td>
                <td><b>日期</b></td>
                <td><b>出发站</b></td>
                <td><b>发车时间</b></td>
                <td><b>历时</b></td>
                <td><b>目的地</b></td>
                <td><b>到达时间</b></td>
                <td><b>商务座数量</b></td>
                <td><b>一等座数量</b></td>
                <td><b>二等座数量</b></td>
                <td><b>硬座数量</b></td>
                <td><b>硬卧数量</b></td>
                <td><b>无座数量</b></td>
                <td><b>商务座价格</b></td>
                <td><b>一等座价格</b></td>
                <td><b>二等座价格</b></td>
                <td><b>硬座价格</b></td>
                <td><b>硬卧价格</b></td>
                <td><b>无座价格</b></td>
                <td><b>操作</b></td>
            </tr>
            <tr v-for="ticket in tickets">
                <td>{{ ticket.trainCode }}</td>
                <td>{{ ticket.startDate }}</td>
                <td>{{ ticket.startStationName }}</td>
                <td>{{ ticket.startTime }}</td>
                <td>{{ ticket.lishi }}</td>
                <td>{{ ticket.toStationName }}</td>
                <td>{{ ticket.arriveTime }}</td>
                <td>{{ ticket.swzNum }}</td>
                <td>{{ ticket.zyNum }}</td>
                <td>{{ ticket.zeNum }}</td>
                <td>{{ ticket.yzNum }}</td>
                <td>{{ ticket.ywNum }}</td>
                <td>{{ ticket.wzNum }}</td>
                <td>{{ ticket.swzMoney }}</td>
                <td>{{ ticket.zyMoney }}</td>
                <td>{{ ticket.zeMoney }}</td>
                <td>{{ ticket.yzMoney }}</td>
                <td>{{ ticket.ywMoney }}</td>
                <td>{{ ticket.wzMoney }}</td>
                <td>
                    <mt-button type="primary" @click="toModifyTicket(ticket)">编辑</mt-button>
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
                tickets: []
            }
        },
        created() {
            Indicator.open();
            this.$http.get(Api.QUERY_ALL_TICKET)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.tickets = res.tickets;
                    Indicator.close();
                });
        },
        components: {
            [Button.name]: Button,
            [Indicator.name]: Indicator
        },
        methods: {
            toAddTicket: function () {
                this.$router.push('/addTicket');
            },
            toModifyTicket: function (ticket) {
                this.$router.push({
                    path: '/modifyTicket', query: {
                        'trainId': ticket.trainId,
                        'trainCode': ticket.trainCode,
                        'startDate': ticket.startDate,
                        'startStationName': ticket.startStationName,
                        'startTime': ticket.startTime,
                        'lishi': ticket.lishi,
                        'toStationName': ticket.toStationName,
                        'arriveTime': ticket.arriveTime,
                        'swzNum': ticket.swzNum,
                        'zyNum': ticket.zyNum,
                        'zeNum': ticket.zeNum,
                        'yzNum': ticket.yzNum,
                        'ywNum': ticket.ywNum,
                        'wzNum': ticket.wzNum,
                        'swzMoney': ticket.swzMoney,
                        'zyMoney': ticket.zyMoney,
                        'zeMoney': ticket.zeMoney,
                        'yzMoney': ticket.yzMoney,
                        'ywMoney': ticket.ywMoney,
                        'wzMoney': ticket.wzMoney
                    }
                });
            }
        }
    }
</script>