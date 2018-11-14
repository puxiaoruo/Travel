<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-icon">&#xe601;</div></div>
        <div class="header-input"><span class="iconfont">&#xe66d;输入城市/景点/游玩主题</span></div>
        <router-link to="/list">
            <div class="header-right"><span class="iconfont">{{this.city}}&#xe614;</span></div>
        </router-link>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city']),   // 将vuex中的city映射到computed中计算属性为city上来
        ...mapGetters(['doubleCity'])
    },
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
            min-width : 1.04rem;
            padding : .1rem
            text-align : center
            color : #fff
    
</style>
