<template>
    <div>
        <div class="recommend-title">
            周末去哪
        </div>
        <div class="item" v-for="item in weekendsLists" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-content">
                <div class="item-title">{{item.title}}</div>
                <div class="item-desc">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "HomeWeekends",
    data () {
        return {
            weekendsLists : [
                 { id:'001',title:'登高望远秋色佳',desc:'山顶满眼彩色，此情此景醉了',imgUrl:'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg' },
                { id:'002',title:'北京必游TOP10',desc:'来北京必去的景点非这些地方莫属',imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg' },
                { id:'003',title:'寻找北京的皇城范儿',desc:'数百年的宫廷庙宇，至今依旧威严霸气',imgUrl:'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg' },
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .recommend-title
        margin-top .2rem
        line-height : .8rem
        background-color : #eeeeee
        text-indent :.2rem
    .item 
        border-bottom : 5px solid #eeeeee
        .item-img
            width : 100%
        .item-content
            padding: 5px 15px;
            line-height : .4rem
            .item-desc
                font-size : .24rem
                color : #616161
</style>

