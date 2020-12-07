<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe743;</span>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe60a;</span>
      <input type="text" placeholder="请输入城市">
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
 @import '~styles/variable.less';
  .header{
    // width: 100%;
    height: 1.1467rem;
    line-height: 1.1467rem;
    background-color: @bgColor;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header-left{
      float: left;
      width: 1.3333rem;
      text-align: center;
      font-size: 0.8533rem;
    }
    .header-center{
      width: 80%;
      flex: 1;
      display: flex;
      border-radius: 0.0667rem;
      height: 0.8533rem;
      background-color: #fff;
      line-height: 0.8533rem;
      padding-left: 0.1333rem;
      font-size: 0.4267rem;
      color: #ccc;
      input{
        width: 100%;
        border-radius: 0.0667rem;
        padding-left: 0.1333rem;
        &::-webkit-input-placeholder{
          color: #ccc;
          font-size: 0.4267rem;
        }
      }
    }
    .header-right{
      width: 17%;
      float: right;
      text-align: center;
      padding: 0 0.2667rem;
      font-size: 0.4324rem;
      margin-right: 0.1333rem;
      span{
        margin-left: -0.0533rem;
      }
    }
  }
</style>
