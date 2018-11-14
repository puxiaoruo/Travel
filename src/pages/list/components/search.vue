<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyworld" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyworld != ''">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="clickTest(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="!list.length">
                    没有找到行管数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        cities : Object
    },
    data () {
        return {
            keyworld: "",
            list: [],
            timer: null
        }
    },
    watch: {
        keyworld() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if(this.keyworld == ""){
                this.list = [];
                return 
            }
            this.timer = setTimeout( () => {
                const result = [];
                // console.log(this.cities)
                for(let i in this.cities){
                    // console.log(this.cities[i])
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1){
                            result.push(value);
                        }
                    });
                }
                console.log(result)
                this.list = result
            } ,16)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search,{click:true})
    },
    methods: {
        clickTest(city) {
            // this.$store.dispatch('changeCity',city);  //调用actions方法，通过actions在调用mutations   --> dispatch

            // this.$store.commit('changeCity',city);   // 也可以跳过actions直接调用mutaions --》commit

            this.changeCity(city);

            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .search
        height : .72rem;
        background-color : $bgColor;
        padding : 0 .1rem
        .search-input  
            box-sizing :border-box;
            width : 100% ;
            height : 0.62rem;
            padding : 0 .1rem
            line-height : 0.62rem;
            text-align : center;
            color : #666;
            border-radius :.06rem;
            border: none;
            outline : none  
    .search-content
        overflow hidden;
        position absolute;
        top: 1.58rem;
        left : 0;
        right : 0;
        bottom : 0;
        background-color #eee;
        z-index : 1
        .search-item
            line-height .62rem;
            padding-left .2rem;
            background-color #fff;
    
</style>
