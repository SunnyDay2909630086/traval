<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="iconfont header-back">&#xe743;</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="less" scoped>
 @import '~styles/variable.less';
    .header{
        width: 100%;
        height: 1.8347rem;
        line-height: 1.8347rem;
        background-color: @bgColor;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: .8rem;
        .header-back{
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            font-size: 1.5rem;
        }
    }
</style>