<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content wrapper" v-if="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of searchList" :key="item.index">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
    name: 'CitySearch',
    props:{
        cities: Object
    },
    data () {
        return {
            keyword: '',
            searchList: [],
            timer: null
        }
    },
    computed:{
        hasNoData(){
            return !this.searchList.length
        }
    },
    watch:{
        keyword () {
            if(!this.keyword){
                this.searchList = []
                return
            }
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                for(let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.name.indexOf( this.keyword ) > -1 || value.spell.indexOf( this.keyword ) > -1){
                            this.searchList.push(value)
                        }
                    });
                }
            },100)
        }
    },
    updated () {
        this.scroll = new BScroll('.wrapper', {
            probeType: 3
        })
    },
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
            text-align: center;
            border-radius: 0.15rem;
        }
    }
    .search-content{
        overflow: hidden;
        position: absolute;
        top: 3.9rem;
        left: 0;
        right: 0;
        bottom: 0;
        background:#eee;
        z-index: 1;
        .search-item{
            line-height: 1.5rem;
            background-color: #fff;
            padding-left: 0.25rem;
        }
    }
</style>