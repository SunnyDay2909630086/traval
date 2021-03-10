<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted(){
    this.getHomeData()
  },
    methods: {
      getHomeData(){
        axios.get('/api/index')
        .then( res => {
          // console.log(res,'res');
          if(res.data.data.ret && res.data.data.data){
            const data = res.data.data.data;
            // console.log(data,'data');
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }
        })
        .catch( err => console.log(err, 'err'))
      }
  }
}
</script>

<style>
  #home{
    padding-bottom: 2.5rem;
  }
</style>
