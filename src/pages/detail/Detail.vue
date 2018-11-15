<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">

        </div>
    </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>
    .content
        width 100%
        height 10rem
        border 1px solid red
</style>
