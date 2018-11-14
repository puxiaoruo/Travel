<template>
  <div id="app">
    <!-- 路由内容被加载过之后放入内存，这样就不需要每次跳转路由都能再执行一次 -->
    <keep-alive>  
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}
  html{
    font-size: 50px;
  }
  body{
    font-size: .28em
  }
</style>
