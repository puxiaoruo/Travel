<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekends :list="weekendList"></home-weekends>
    </div>
</template>

<script>
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper' ;
import HomeIcons from './components/icons' ;
import HomeRecommend from './components/recommend' ;
import HomeWeekends from './components/weekends' ;
import axios from "axios";
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekends
    },
    data () {
        return {
            iconList : [],
            recommendList : [],
            swiperList : [],
            weekendList : [],
            lastCity: ''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods:  {
        getHomeInfo () {
            axios.get('/api/index.json?city='+this.city).then(this.getHomeIndoSucc)
            console.log('测试添加')
        },
        getHomeIndoSucc (res) {
            const _this = this;
            _this.iconList = res.data.data.iconList;
            _this.swiperList = res.data.data.swiperList;
            _this.recommendList = res.data.data.recommendList;
            _this.weekendList = res.data.data.weekendList;
        }
    },
    mounted () {
        this.lastCity = this.city;
        this.getHomeInfo()
    },
    activated () {
        // 用了keep-alive组件后有的周期   页面重新被现实的时候加载
        if(this.lastCity !== this.city){
            this.getHomeInfo()
        }
    }
}
</script>
