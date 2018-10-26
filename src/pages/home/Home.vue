<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekends></home-weekends>
    </div>
</template>

<script>
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper' ;
import HomeIcons from './components/icons' ;
import HomeRecommend from './components/recommend' ;
import HomeWeekends from './components/weekends' ;
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekends
    }
}
</script>
