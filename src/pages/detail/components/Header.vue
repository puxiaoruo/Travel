<template>
    <div>
        <router-link 
            to="/" 
            tag="div" 
            class="header-abs" 
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe601;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <div class="header-left"><div class="iconfont header-fixed-back">&#xe601;</div></div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailHeader",
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop;
            if(top > 60){
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity 
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false;
            }else{
                this.showAbs = true;
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll)
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius: .4rem 
        text-align center
        line-height .8rem
        background rgba(255,255,255,.8)
        .header-abs-back
            color #000
            font-size .4rem
    .header-fixed
        position fixed;
        top 0
        left 0
        right 0
        height :$headerHeight
        line-height $headerHeight 
        background-color :$bgColor;
        font-size : 0.32rem;
        text-align : center;
        overflow : hidden;
        color #fff
        background-color : $bgColor
        .header-fixed-back
            position : absolute;
            text-align: center;
            font-size: .4rem
            top: 0;
            left : 0;
            color : #fff
</style>
