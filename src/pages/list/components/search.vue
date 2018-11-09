<template>
    <div class="search">
       <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
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
    
</style>
