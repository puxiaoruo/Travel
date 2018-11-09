<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import axios from "axios";
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import CityAlphabet from './components/alphabet.vue'
export default {
    name: 'List',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities : {},
            hotCities : []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            console.log(res);
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>

</style>

