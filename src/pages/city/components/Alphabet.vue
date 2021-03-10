<template>
    <div>
        <ul class="alphabet" >
            <li class="letter" v-for="(item, key) of cities" :key="key">
                {{key}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    }
}
</script>

<style lang="less">
    @import '~styles/variable.less';
    .alphabet{
        position: absolute;
        top: 3.9rem;
        right: 0;
        bottom: 0;
        width: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .letter{
            line-height: 1rem;
            text-align: center;
            color: @bgColor;
        }
    }
</style>