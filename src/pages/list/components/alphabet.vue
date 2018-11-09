<template>
    <ul class="list">
        <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities : Object
    },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';

    ul
        list-style : none 
    .list
        display : flex;
        flex-direction : column;
        justify-content : center;
        position : absolute
        right : 0;
        top : 2.2rem;
        bottom : 0;
        width : .4rem
        .item
            line-height : .4rem;
            text-align : center;
            color : $bgColor
    
</style>
