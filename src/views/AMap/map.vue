<template>
  <div class="home">
    <h3 class="title"></h3>
    <div class="amap-wrapper">
      <el-amap class="amap-box" vid="amap-vue"  :events="events"></el-amap>
    </div>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      events: '',
    };
  },
  mounted() {
    // 异步加载
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map('amap-vue', {
        mapStyle: 'amap://styles/light',
      });
    });
  },
};
</script>

<style lang="scss" scoped>
  .amap-box{
    height: 100vh;
  }
</style>
