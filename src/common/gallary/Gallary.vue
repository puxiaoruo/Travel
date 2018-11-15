<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: {
            type: Array,
            default() {
                return [
                    "http://img1.qunarzz.com/sight/p0/201403/07/baf02b36fbd3e3405e28e27ab9598d26.jpg_r_800x800_899034fa.jpg",
                    "http://img1.qunarzz.com/sight/p0/1508/fe/9a5cc63de16d872559b96eb43f328c2d.water.jpg_r_800x800_7ae72593.jpg",
                    "http://img1.qunarzz.com/sight/p0/1508/83/3f6b35aabfa44a720cacda63e1f9dada.water.jpg_r_800x800_bb8dbd17.jpg"
                    ]
            }
        }
    },
    data() {
        return {
            swiperOptions : {
                pagination: '.swiper-pagination',
                paginationType: "fraction",
                observeParents: true,
                observer: true   // 自动的自我刷新一次
            }
        }
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close')
        }
    }   
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit 
    .container
        display flex
        flex-direction column
        justify-content center
        width 100%
        height 100%
        position fixed
        left 0
        righ 0
        bottom 0
        top 0
        z-index 99
        background-color #000
        .wrapper
            width 100%
            height 0
            padding-bottom: 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>
