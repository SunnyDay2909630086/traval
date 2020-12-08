<template>
    <div class="icon-wrapper">
        <swiper>
            <swiper-slide v-for="(pageVolume, index) of pages" :key="index">
                <div class="aicon" v-for="item in pageVolume" :key="item.id">
                    <div class="aicon-img">
                        <img :src="item.imgUrl" alt="" class="aicon-img-content">
                    </div>
                    <p class="aicon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconsList:[
                {
                    id: '01',
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607455188216&di=dae4fb509401d2db6ebb038ae610bb54&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2Fe4c33aafe0a1a2c0434d5ebdb6a7f4b144b9e4e1.jpg',
                    desc: '好奶盖1111111111111'
                },
                {
                    id: '02',
                    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607455319594&di=00730d3b2f087c53812b98403e9e37db&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20200220%2F76910f2f0ce8415ab8947cbb4c406a8f.jpg',
                    desc: '好奶盖2'
                },
                {
                    id: '03',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖3'
                },
                {
                    id: '04',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖4'
                },
                {
                    id: '05',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖5'
                },
                {
                    id: '06',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖6'
                },
                {
                    id: '07',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖7'
                },
                {
                    id: '08',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖8'
                },
                {
                    id: '09',
                    imgUrl: require('@/assets/images/cat.png'),
                    desc: '好奶盖9'
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []   //表示图标的页数
            this.iconsList.forEach((item, index)=>{
                const pageVolume = Math.floor( index / 8)  //每一页的图标容量，此为分页的依据
                // console.log(pages[pageVolume],'vol')
                if(!pages[pageVolume]){
                    pages[pageVolume] = []  //如果pages[pageVolume]没有值则创建二维数组
                }
                pages[pageVolume].push(item)
            })
            // console.log(pages,'pages');
            return pages
        }
    }
}
</script>

<style lang="less">
    @import '~styles/variable.less';
    @import '~styles/mixin.less';
    .icon-wrapper>.swiper-container{
        height: 0;
        padding-bottom: 50%;
        margin-top: 0.2667rem;
        .aicon{
            position: relative;
            width: 25%;
            height: 0;
            padding-bottom: 25%;
            overflow: hidden;
            float: left;
            .aicon-img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0.2667rem;
                box-sizing: border-box;
                padding: 0.1333rem;
                .aicon-img-content{
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .aicon-desc{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                padding: 0.0533rem 0;
                color: @textColor;
                .ellipsis()
            }
        }
    }
</style>