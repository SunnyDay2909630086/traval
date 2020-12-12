<template>
    <div class="weekend">
        <h4 class="title">周末游</h4>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="item-title">{{item.title}}</div>
                <div class="item-desc">{{item.desc}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data (){
        return {
            recommendList: [
                {
                    id: '01',
                    imgUrl: require('@/assets/images/sun.jpg'),
                    title: '深圳西湾红树林',
                    desc: '金湾大道与西海堤交汇处的深圳宝安西湾红树林湿地公园建设工程(一期)开工。于2015年8月26日开园，公园（一期）沿西海堤布局，长约705米，面积约9.3万平方米，其中陆域面积约3.3万平方米、海域面积约6万平方米。有观海栈道3座、下海台阶4座、观景栈道2座，绿化19300平方米，停车位123个。公园（一期）共设有16个景点。',
                    price: '￥00.00'
                },
                {
                    id: '02',
                    imgUrl: 'http://b1-q.mafengwo.net/s12/M00/5A/8F/wKgED1vuXV6APkfaAA_UkxNgnYQ33.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2IxLXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11',
                    title: '深圳西湾红树林',
                    desc: '金湾大道与西海堤交汇处的深圳宝安西湾红树林湿地公园建设工程(一期)开工。于2015年8月26日开园，公园（一期）沿西海堤布局，长约705米，面积约9.3万平方米，其中陆域面积约3.3万平方米、海域面积约6万平方米。有观海栈道3座、下海台阶4座、观景栈道2座，绿化19300平方米，停车位123个。公园（一期）共设有16个景点。',
                    price: '￥00.00'
                },
                {
                    id: '03',
                    imgUrl: require('@/assets/images/sun.jpg'),
                    title: '深圳西湾红树林',
                    desc: '金湾大道与西海堤交汇处的深圳宝安西湾红树林湿地公园建设工程(一期)开工。于2015年8月26日开园，公园（一期）沿西海堤布局，长约705米，面积约9.3万平方米，其中陆域面积约3.3万平方米、海域面积约6万平方米。有观海栈道3座、下海台阶4座、观景栈道2座，绿化19300平方米，停车位123个。公园（一期）共设有16个景点。',
                    price: '￥00.00'
                },
                {
                    id: '04',
                    imgUrl: require('@/assets/images/sun.jpg'),
                    title: '深圳西湾红树林',
                    desc: '金湾大道与西海堤交汇处的深圳宝安西湾红树林湿地公园建设工程(一期)开工。于2015年8月26日开园，公园（一期）沿西海堤布局，长约705米，面积约9.3万平方米，其中陆域面积约3.3万平方米、海域面积约6万平方米。有观海栈道3座、下海台阶4座、观景栈道2座，绿化19300平方米，停车位123个。公园（一期）共设有16个景点。',
                    price: '￥00.00'
                },
                {
                    id: '05',
                    imgUrl: require('@/assets/images/sun.jpg'),
                    title: '深圳西湾红树林',
                    desc: '金湾大道与西海堤交汇处的深圳宝安西湾红树林湿地公园建设工程(一期)开工。于2015年8月26日开园，公园（一期）沿西海堤布局，长约705米，面积约9.3万平方米，其中陆域面积约3.3万平方米、海域面积约6万平方米。有观海栈道3座、下海台阶4座、观景栈道2座，绿化19300平方米，停车位123个。公园（一期）共设有16个景点。',
                    price: '￥00.00'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import '~styles/mixin.less';
@import '~styles/variable.less';
    .title{
        .title();
    }
    .item{
        display: flex;
        flex-direction: column;
        margin-bottom: @rem;
        .item-img{
            height: 5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .item-title{
            font-weight: 800;
            font-size: 0.8rem;
            white-space: nowrap;
            .ellipsis();
            .text-style();
            margin-left: @rem;
            margin-top: @rem;
        }
        .item-desc{
            min-width: 0;
            .ellipsis();
            .text-style();
            margin: 0 @rem;
        }
    }
</style>