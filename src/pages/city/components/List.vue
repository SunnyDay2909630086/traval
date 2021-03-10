<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <ul class="button-list">
                    <li class="button-box">
                        <div class="aButton">北京</div>
                    </li>
                </ul>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <ul class="button-list" >
                    <li class="button-box" v-for="item of hot" :key="item.id">
                        <div class="aButton">{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li class="item-box border-bottom" v-for="innerItem of item" :key="innerItem.id">
                        {{innerItem.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hot: Array
    },
    mounted(){
        // console.log(BetterScroll,'scroll');
        // this.scroll = new BScroll(this.$refs.wrapper)
        this.scroll = new BScroll(this.$refs.wrapper)
        // let bs = new BetterScroll('.list', {
        //     movable: true,
        //     // zoom: true
        // })
    }
}
</script>

<style lang="less">
    .list{
        overflow: hidden;
        position: absolute;
        top: 3.9rem;
        left: 0;
        bottom: 0;
        right: 0;
        .title{
            background-color: #eee;
            line-height: 1.25rem;
            padding-left: 0.25rem;
        }
        .button-list{
            padding: 0.5rem 2rem 0.5rem 0.5rem;
            overflow: hidden;
            .button-box{
                float: left;
                width: 33.3%;
                .aButton{
                    border: 1px solid #eee;
                    border-radius: 0.1rem;
                    padding: 0.15rem 0;
                    text-align: center;
                    margin: 0.15rem;
                }
            }
        }
        .item-list{
            .item-box{
                line-height: 1.5rem;
                padding-left: 0.25rem;
            }
        }
    }
</style>