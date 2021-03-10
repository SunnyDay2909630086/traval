<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="less" scoped>
@import '~styles/variable.less';
    .search{
        padding: 0.25rem;
        background-color: @bgColor;
        .search-input{
            width: 100%;
            height: 1.5rem;
            // padding: 0 .25rem;
            text-align: center;
            border-radius: 0.15rem;
        }
    }
</style>