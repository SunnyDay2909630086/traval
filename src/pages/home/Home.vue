<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted(){
    // console.log(window.screen.width,'width');
        window.addEventListener('load', this.getRootFontSize())
    window.addEventListener('resize', this.getRootFontSize())
  },
    methods: {
    getRootFontSize(){
      console.log('fontSize');
      let screenWidth = document.documentElement.clientWidth
      let rootFontSize = 20*(screenWidth/320) > 40 ? 40+'px' : (20*(screenWidth/320)+'px')
      document.documentElement.style.fontSize = rootFontSize
    }
  }
}
</script>

<style>
  #home{
    padding-bottom: 2.5rem;
  }
</style>
