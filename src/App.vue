<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/**
 * 设置不同屏幕宽度的根元素，以供rem使用
 * */
// document.querySelector('html').style.fontSize = window.screen.width / 10 + 'px'
export default {
  name: 'App',
  mounted(){

  },
  methods: {
    // getRootFontSize(){
    //   console.log('fontSize');
    //   let screenWidth = document.documentElement.clientWidth
    //   let rootFontSize = 75*(screenWidth/320) > 40 ? 40+'px' : (75*(screenWidth/320)+'px')
    //   document.documentElement.style.fontSize = rootFontSize
    // }
  }
}
</script>

<style>

</style>
