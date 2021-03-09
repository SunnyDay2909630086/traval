<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <ul class="button-list">
                <li class="button-box">
                    <div class="aButton">北京</div>
                </li>
            </ul>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <ul class="button-list">
                <li class="button-box">
                    <div class="aButton">北京</div>
                </li>
                <li class="button-box">
                    <div class="aButton">上海</div>
                </li>
                <li class="button-box">
                    <div class="aButton">广州</div>
                </li>
                <li class="button-box">
                    <div class="aButton">深圳</div>
                </li>
                <li class="button-box">
                    <div class="aButton">重庆</div>
                </li>
                <li class="button-box">
                    <div class="aButton">成都</div>
                </li>
                <li class="button-box">
                    <div class="aButton">武汉</div>
                </li>
                <li class="button-box">
                    <div class="aButton">杭州</div>
                </li>
            </ul>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <ul class="item-list">
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
                <li class="item-box border-bottom">阿尔法</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityList'
}
</script>

<style lang="less">
    .list{
        overflow: hidden;
        position: absolute;
        top: 3.9rem;
        left: 0;
        bottom: 0;
        right: 0;
        .title{
            background-color: #eee;
            line-height: 1.25rem;
            padding-left: 0.25rem;
        }
        .button-list{
            padding: 0.5rem 2rem 0.5rem 0.5rem;
            overflow: hidden;
            .button-box{
                float: left;
                width: 33.3%;
                .aButton{
                    border: 1px solid #eee;
                    border-radius: 0.1rem;
                    padding: 0.15rem 0;
                    text-align: center;
                    margin: 0.15rem;
                }
            }
        }
        .item-list{
            .item-box{
                line-height: 1.5rem;
                padding-left: 0.25rem;
            }
        }
    }
</style>