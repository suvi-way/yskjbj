<template>
  <div id="app" style="background-image: url(imgage/1.jpg);width: 100%;height: 100%">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
