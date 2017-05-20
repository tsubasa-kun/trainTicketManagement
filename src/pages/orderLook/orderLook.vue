<template>
    <div class="content">
        <table>
            <tr>
                <td><b>购票人</b></td>
                <td><b>日期</b></td>
                <td><b>车次</b></td>
                <td><b>出发站</b></td>
                <td><b>发车时间</b></td>
                <td><b>目的地</b></td>
                <td><b>到达时间</b></td>
                <td><b>席别</b></td>
                <td><b>车厢号</b></td>
                <td><b>座位号</b></td>
                <td><b>车票类型</b></td>
                <td><b>票价</b></td>
                <td><b>状态</b></td>
            </tr>
            <tr v-for="order in orders">
                <td>{{ order.realName }}</td>
                <td>{{ order.date }}</td>
                <td>{{ order.trainNo }}</td>
                <td>{{ order.fromStation }}</td>
                <td>{{ order.startTime }}</td>
                <td>{{ order.toStation }}</td>
                <td>{{ order.endTime}}</td>
                <td>{{ order.seat }}</td>
                <td>{{ order.carriage }}</td>
                <td>{{ order.seatNo }}</td>
                <td>{{ order.type }}</td>
                <td>{{ order.money }}</td>
                <td v-if="order.status === 0">未完成</td>
                <td v-if="order.status === 1">完成</td>
                <td v-if="order.status === 2">退票</td>
                <td v-if="order.status === 3">改签</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        text-align: center;
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
                orders: []
            }
        },
        created() {
            Indicator.open();
            this.$http.get(Api.QUERY_ALL_ORDER)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.orders = res.orders;
                    Indicator.close();
                });
        },
        components: {
            [Indicator.name]: Indicator
        }
    }
</script>