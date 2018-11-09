<template>
    <div class="header">城市选择
        <router-link to="/">
            <div class="header-left"><div class="iconfont header-back">&#xe601;</div></div>
        </router-link>
       <!--  <div class="header-input"><span class="iconfont">&#xe66d;输入城市/景点/游玩主题</span></div>
        <router-link to="/list">
            <div class="header-right"><span class="iconfont">{{city}}&#xe614;</span></div>
        </router-link> -->
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
    data () {
        return {}
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        position relative;
        height :$headerHeight
        line-height $headerHeight 
        background-color :$bgColor;
        color: #fff;
        font-size : 0.32rem;
        text-align : center;
        overflow : hidden;
        background-color : $bgColor
        .header-back
            position : absolute;
            text-align: center;
            font-size: .4rem
            top: 0;
            left : 0;
            color : #fff
    
</style>
