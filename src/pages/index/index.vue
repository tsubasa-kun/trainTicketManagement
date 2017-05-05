<template>
    <div class="index">
        こんにちは世界
    </div>
</template>
<style>
    .index{
        background:#ffffff;
        font-size: 50px;
    }

</style>
<script type="text/javascript">
    export default {
        data(){
            return {
                page: 'about'
            }
        },
        created() {
            if ($.session.get('key') === undefined) {
                this.$router.push('/login');
            }
//            添加数据
//            $.session.set('key', 'value')
//            删除数据
//            $.session.remove('key');
//            获取数据
//            $.session.get('key');
//            清除数据
//            $.session.clear();
        }
    }
</script>