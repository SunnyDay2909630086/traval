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
    window.addEventListener('load', this.getRootFontSize())
    window.addEventListener('resize', this.getRootFontSize())
  },
  methods: {
    getRootFontSize(){
      console.log('fontSize');
      let screenWidth = document.documentElement.clientWidth
      let rootFontSize = 20*(screenWidth/320) > 40 ? 40+'px' : (20*(screenWidth/320)+'px')
      document.documentElement.style.fontSize = rootFontSize
    },
  }
}
</script>

<style>

</style>
