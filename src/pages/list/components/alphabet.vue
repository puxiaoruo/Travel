<template>
    <ul class="list">
        <li class="item" 
            v-for="item in letters" 
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
            >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities : Object
    },
    computed: {
        letters() {
            const letters = [];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
    },
    data () {
        return {
            touchStatus : false,
            startY : 0,
            timer : null
        };
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop;
    },
    methods : {
        handleLetterClick : function(e) {
            // console.log(e.target.innerText);
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart : function() {
            this.touchStatus = true;
        },
        handleTouchMove : function(e) {
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79;
                    const index = Math.floor((touchY - this.startY) / 20) ;
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index-1]);
                    }
                },16)
                
            }
        },
        handleTouchEnd : function() {
            this.touchStatus = false;
        }
    }
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
