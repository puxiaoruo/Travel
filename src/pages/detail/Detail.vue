<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from "axios";
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            list: [
                // { 
                //     title: "成人票",
                //     children: [
                //         { 
                //             title: "成人三馆联票",
                //             children: [
                //                 { title: "成人三馆联票--酒店" },
                //                 { title: "成人五馆联票-饭店" },
                //             ] 
                //         },
                //         { title: "成人五馆联票" },
                        
                //     ]
                //  },
                // { title: "学生票" },
                // { title: "儿童票" },
                // { title: "特惠票" },
            ]
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail.json?id=' + this.$route.params.id).then( this.handleGetDataSucc );
        },
        handleGetDataSucc(res) {
            res = res.data;
            if(res.ret && res.data){
                const data = res.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.gallaryImgs = data.gallaryImgs;
                this.list = data.categoryList;
                console.log(this.list)
            }
        }
    },
    mounted() {
        this.getDetailInfo();
    },
    
}
</script>
<style lang="stylus" scoped>
    .content
        width 100%
</style>
