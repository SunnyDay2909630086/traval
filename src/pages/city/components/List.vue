<template>
  <div class="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button-box">
            <div class="aButton">{{this.city}}</div>
          </li>
        </ul>
      </div>
      <div class="area hot" ref="hot">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li class="button-box" v-for="item of hot" :key="item.id" @click="handleChangeCity(item.name)">
            <div class="aButton">{{ item.name }}</div>
          </li>
        </ul>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="item-box border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleChangeCity(innerItem.name)"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
import { mapState, mapMutations } from 'vuex'

export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  updated() {
        //数据滚动效果
        this.scroll = new BScroll(".wrapper", {
          probeType: 3
        })
        //监听页面元素滚动，改变导航栏选中
        this.scroll.on('scroll', (position) => {
            this.scrollToTop(position)
        })
  },
  watch: {
    letter() {
      if (this.letter) {
        const ele = this.$refs[this.letter][0];
        // console.log(ele, 'ele');
        this.scroll.scrollToElement(ele, {});
      }
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    scrollToTop(pos) {
        //dom滚动位置
        const scrollTop = -pos.y
        // console.log(scrollTop, 'y');
        for(let key in this.cities) {
            //获取监听元素距离视窗顶部距离
            const offsetTop = this.$refs[key][0].offsetTop; 
            // console.log(offsetTop,'top');
            //获取监听元素本身高度
            const scrollHeight = this.$refs[key][0].scrollHeight; 
            // console.log(scrollHeight, 'height');
            //如果 dom滚动位置 >= 元素距离视窗距离 && dom滚动位置 <= 元素距离视窗距离+元素本身高度 //则表示页面已经滚动到可视区了。
            if (scrollTop >= offsetTop && scrollTop <= offsetTop + scrollHeight) {
                //导航栏背景色选中
                this.$emit('update:current', key)
                // console.log(key, 'key');
            }
        }
    },
    handleChangeCity(city){
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 3.9rem;
  left: 0;
  bottom: 0;
  right: 0;
  .title {
    background-color: #eee;
    line-height: 1.25rem;
    padding-left: 0.25rem;
  }
  .button-list {
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    overflow: hidden;
    .button-box {
      float: left;
      width: 33.3%;
      .aButton {
        border: 1px solid #eee;
        border-radius: 0.1rem;
        padding: 0.15rem 0;
        text-align: center;
        margin: 0.15rem;
      }
    }
  }
  .item-list {
    .item-box {
      line-height: 1.5rem;
      padding-left: 0.25rem;
    }
  }
}
</style>
