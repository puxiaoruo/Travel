<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeSwiper",
    props: { list : Array },
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true,
        },
        // swiperList: [
        //     {
        //         id: '0001',
        //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
        //     },
        //     {
        //         id: '0002',
        //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
        //     }
        // ]
        // swiperList : this.list
      }
    },
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color :#fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        .swiper-img
            width : 100%
</style>
