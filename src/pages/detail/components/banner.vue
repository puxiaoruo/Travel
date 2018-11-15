<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-image" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number"><span class="iconfont icon-banner">&#xe66d;</span>{{gallaryImgs.length}}</div>
            </div>
        </div>
        <common-gallary 
            :imgs="gallaryImgs" 
            v-show="showGallary"
            @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary';
export default {
    name: "DetailBanner",
    props: {
        gallaryImgs: Array,
        sightName: String,
        bannerImg: String
    },
    components:{
        CommonGallary
    },
    data () {
        return {
            showGallary: false,
            imgs: [
                "http://img1.qunarzz.com/sight/p0/201403/07/baf02b36fbd3e3405e28e27ab9598d26.jpg_r_800x800_899034fa.jpg",
                "http://img1.qunarzz.com/sight/p0/1508/fe/9a5cc63de16d872559b96eb43f328c2d.water.jpg_r_800x800_7ae72593.jpg",
                "http://img1.qunarzz.com/sight/p0/1508/83/3f6b35aabfa44a720cacda63e1f9dada.water.jpg_r_800x800_bb8dbd17.jpg"
            ]
        }
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true;
        },
        handleGallaryClose() {
            this.showGallary = false;
        }
    },
    mounted() {
        console.log(this.gallaryImgs)
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden;
        height: 0
        padding-bottom: 55%;
        .banner-image
            width 100%;
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
            .banner-number
                padding 0 .4rem
                line-height .32rem
                height .32rem
                margin-top .14rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                .icon-banner
                    font-size .24rem
</style>
