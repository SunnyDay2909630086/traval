<template>
  <div class="wrapper" ref="caroucel">
    <swiper
      v-if="list.length > 1"
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.less'
SwiperCore.use([Pagination])
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        },
        autoplay: true,
        loop: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true
      },
      // swiperList: [
      //   {
      //     id: 1,
      //     imgUrl:
      //       "https://imgs.qunarzz.com/vs_ceph_vcimg/8f45c9a4b40091390793e1c4a5ac3e40.jpeg"
      //   },
      //   {
      //     id: 2,
      //     imgUrl:
      //       "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/86ca4dc2777b997607e97eb8471dcafd.jpg_890x330_0eee7728.jpg"
      //   },
      //   {
      //     id: 3,
      //     imgUrl:
      //       "https://imgs.qunarzz.com/vs_ceph_vcimg/a59f46c137856a29be67446ab9c0ad5d.jpeg"
      //   }
      // ]
    };
  },
  computed: {
      // swiper () {
      //   return this.$refs.mySwiper.$list
      // }
    },
  mounted () {
    //   console.log(this.swiper.autoplay)
      // this.swiper.slideTo(3, 1000, false)
      //   if (this.swiperOptions.autoplay.running) {
      //       alert('能自动轮播')
      //   } else {
      //       console.log('轮播图不能自动播放')
      //   }
    }
  }
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  .swiper-img {
    width: 100%;
    height: 30vw;
  }
}
</style>
<style type="text/css">
.my-bullet-active {
  background: #fff;
  opacity: 1;
}
</style>
