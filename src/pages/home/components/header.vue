<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-icon">&#xe601;</div></div>
        <div class="header-input"><span class="iconfont">&#xe66d;输入城市/景点/游玩主题</span></div>
        <router-link to="/list">
            <div class="header-right"><span class="iconfont">{{city}}&#xe614;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: { city : String },
    data () {
        return {}
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display: flex
        height :$headerHeight
        line-height .86rem 
        background-color :$bgColor;
        color: #fff;
        .header-left 
            float left
            width: .64rem;
            .back-icon
                text-align: center;
                font-size: .4rem
        .header-input
            flex : 1;
            background : #ffffff;
            border-radius : .1rem;
            margin-top : .12rem;
            margin-left : .2rem;
            color : #ccc;
            height : .64rem;
            line-height : .64rem;
            padding-left : .15rem;
        .header-right 
            float : right ;
            width : 1.24rem;
            text-align : center
            color : #fff
    
</style>
