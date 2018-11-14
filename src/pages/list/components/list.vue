<template>
    <div class="list" ref="wrapper">
        <div class="">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                        v-for="(item,index) in hot" 
                        :key="index" 
                        @click="clickTest(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                        v-for="innerItem in item" 
                        :key="innerItem.id"
                        @click="clickTest(innerItem.name)"    
                    >{{innerItem.name}}</div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hot : Array,
        cities : Object,
        letter : String
    },
    computed: {
        ...mapState(['city'])   // 将vuex中的city映射到computed中计算属性为city上来
    },
    methods: {
        clickTest(city) {
            // this.$store.dispatch('changeCity',city);  //调用actions方法，通过actions在调用mutations   --> dispatch

            // this.$store.commit('changeCity',city);   // 也可以跳过actions直接调用mutaions --》commit
            this.changeCity(city); //调用的是本组件中的changeCity方法
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])   // 将mutations里的changeCity方法映射到本组件的methods中的changeCity方法
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper, { click: true })
    },
    watch: {
        letter () {
            if(this.letter){
                console.log(this.$refs)
                const element = this.$refs[this.letter][0];
                console.log(element)
                this.scroll.scrollToElement(element)
            }
            console.log(this.letter)
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .border-topbottom
        &:before
            border-color : #cccccc
        &:after
            border-color : #cccccc
    .border-bottom
        &:before
            border-color : #cccccc
        &:after
            border-color : #cccccc
    .list
        position : absolute;
        left : 0;
        right : 0;
        top : 1.58rem;
        bottom : 0;
        overflow hidden
        .title
            line-height :.54rem
            color : #666;
            padding-left : .2rem
            font-size: .26rem
            background-color : #eee
        .button-list    
            padding : .1rem .6rem .1rem .1rem
            overflow: hidden
            .button-wrapper
                float : left;
                width: 33.33%;
                .button
                    margin : .1rem
                    text-align : center;
                    border: .02rem solid #cccccc
                    border-radius : .06rem
        .item-list
            .item
                line-height : .76rem;
                padding-left: .2rem;

</style>
