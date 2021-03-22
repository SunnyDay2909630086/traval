<template>
  <div>
    <ul class="alphabet">
      <li
        class="letter"
        :class="{'isActive': item === navigatorItem}"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handletouchEnd"
        @click="clickLetter"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
    currentLetter: String
  },
  watch:{
    currentLetter(){
      if(this.currentLetter){
        this.navigatorItem = this.currentLetter
      }
    }
  },
  computed:{
    letters(){
      const letters = []
      for(let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data(){
    return{
      touchStatus: false,
      navigatorItem: '',
      startY: 0,
      timer: null
    }
  },
  updated(){
    this.startY = this.$refs['A'][0].offsetTop    //首字母距离组件顶部的位置
  },
  methods: {
    clickLetter(e) {
      // console.log(e,'e');        //实现字母高亮
      this.navigatorItem = e.target.innerText
      // console.log( this.navigatorItem, 'item');
      //把值改变以事件形式传给父组件
      this.$emit("update:newLetter", e.target.innerText);
    }, 
    handleTouchStart(){
        this.touchStatus = true
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        // 设置时间截流，过了16毫秒才执行高频触摸事件，优化性能
        this.timer = setTimeout(()=>{
          //触摸字母距离组件顶部的位置
          const touchY = e.touches[0].clientY - 78
          //两者相减除以字母高度即可获得字母下标index
          const index = Math.floor((touchY - this.startY)/23) - 1
          // console.log(index,'index');
          if( index >= 0 && index < this.letters.length){
            this.$emit('update:newLetter', this.letters[index])
          }
        }, 20)
      }
    },
    handletouchEnd(){
      this.touchStatus = false
    }
  }
};
</script>

<style lang="less">
@import "~styles/variable.less";
.alphabet {
  position: absolute;
  top: 3.9rem;
  right: 0;
  bottom: 0;
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .letter {
    line-height: 1rem;
    text-align: center;
    color: @bgColor;
    // touch-action: none;  //当你触摸并按住触摸目标时候，禁止或显示系统默认菜单
  }
  .isActive{
    color: #fff;
    background-color: @bgColor;
  }
}
</style>
