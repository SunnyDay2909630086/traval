<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe743;</span>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe60a;</span>
      <input type="text" placeholder="请输入城市">
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
    ...mapState(['city'])
  }
}
</script>

<style lang="less" scoped>
 @import '~styles/variable.less';
  .header{
    width: 100%;
    height: 1.8347rem;
    background-color: @bgColor;
    color: #fff;
    display: flex;
    align-items: center;
    .header-left{
      flex: 1;
      text-align: center;
      font-size: 1.5rem;
    }
    .header-center{
      flex: 5;
      display: flex;
      border-radius: 0.15rem;
      height: 1.4rem;
      background-color: #fff;
      line-height: 1.4rem;
      padding-left: 0.15rem;
      font-size: 1rem;
      color: #ccc;
      input{
        width: 100%;
        border-radius: 0 0.15rem 0.15rem 0;
        padding-left: 0.15rem;
        &::-webkit-input-placeholder{
          color: #ccc;
          font-size: 0.8rem;
        }
      }
    }
    .header-right{
      min-width: 1.5rem;
      flex: 0 0 3rem;
      text-align: center;
      padding: 0 0.5rem;
      font-size: 0.8rem;
      color: #fff;
      span{
        margin-left: -0.1rem;
      }
    }
  }
</style>
