<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>
        
    </div>
</template>
<script>
export default {
    name: "HomeIcons",
    data() {
        return {
            swiperOption: {},
            iconLists:[
                { id:'001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',text:'景点门票' },
                { id:'002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',text:'北京必游' },
                { id:'003',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',text:'一日游' },
                { id:'004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',text:'文化古迹' },
                { id:'005',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',text:'动植物园' },
                { id:'006',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',text:'故宫' },
                { id:'007',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',text:'野生动物园' },
                { id:'008',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',text:'泡温泉' },
                { id:'009',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',text:'泡温泉' },
            ]
        }
    },
    computed: {
        pages() {
            const pages = [];
            this.iconLists.forEach((item,index) => {
                const page = Math.floor(index / 8); //这个数据应该展示在第几页上
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            console.log(pages)
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    icons >>> .swiper-container
        height : 0
        padding-bottom: 50%
    
    .icon
        position : relative
        float :left
        width: 25%
        height : 0
        padding-bottom: 25%
        overflow : hidden
        .icon-img
            position : absolute
            top: 0
            left: 0
            right: 0
            bottom: 0.44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display : block
                margin : auto
                height : 100%
        .icon-desc
            position : absolute
            left: 0
            right: 0
            bottom: 0
            height : .44rem
            line-height .44rem
            color : $darkTextColor
            text-align : center
            ellipsis()
</style>
