<template>
    <div>
        <div class="recommend-title">
            热门推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <!-- <div class="item-img-wrapper"> -->
                <img class="item-img" :src="item.imgUrl" alt="">
                <!-- </div> -->
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">敢于森林之王近距离接触吗？</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'HomeRecommend',
    data () {
        return {
            recommendList : [
                { id:'001',title:'北京野生动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg' },
                { id:'002',title:'北京欢乐谷',imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg' },
                { id:'003',title:'故宫',imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg' },
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .recommend-title
        margin-top .2rem
        line-height : .8rem
        background-color : #eeeeee
        text-indent :.2rem
    .item
        overflow : hidden
        display : flex
        height : 1.9rem
        .item-img
            width : 1.7rem
            height : 1.7rem
            padding : .1rem
        .item-info
            flex : 1
            padding : .1rem
            min-width : 0
            .item-title
                line-height : .54rem
                font-size : .32rem
                ellipsis()
            .item-desc
                line-height : .4rme
                color : #cccccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background-color : #ff9300
                padding : .1rem
                border-radius : .06rem
                color : #ffffff
                border : none
            

</style>
