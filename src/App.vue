<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/**
 * 设置不同屏幕宽度的根元素，以供rem使用
 * */
document.querySelector('html').style.fontSize = window.screen.width / 10 + 'px'
export default {
  name: 'App'
}
</script>

<style>

</style>
