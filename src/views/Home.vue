<template>
  <div class="home">
    <!-- DOM渲染 -->
    <transition name="car">
      <Car class="car-inf-list" v-if="isCarShow"></Car>
    </transition>
    <!-- 地图 -->
    <Map></Map>
    <!-- 导航栏 -->
    <navbar v-bind:isCarShow="this.isCarShow" @showCar="showThisCar"></navbar>
    <!-- 会员 -->
    <div id="User" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from './AMap/map.vue';
import Car from './Car/Car.vue';
import navbar from '../components/navbar.vue';

export default {
  name: 'Home',
  // 将Map分离，引入组件 当成一个标签引用
  components: {
    Map,
    Car,
    navbar,
  },
  data() {
    return {
      isCarShow: false,
    };
  },
  computed: {
    show() {
      return this.$route.name !== 'Home';
    },
  },
  watch: {},
  methods: {
    showThisCar(val) {
      this.isCarShow = val;
    },
  },
  mounted() {
    document.addEventListener(
      'mouseup', (e) => {
        const user = document.getElementById('User');
        if (e.target) {
          this.isCarShow = false;
          if (!user.contains(e.target)) {
            this.$router.push({ name: 'Home' });
          }
        }
      },
    );
  },
};
</script>

<style lang="scss" scoped>
#User {
  position: fixed;
  width: 405px;
  background-color: #34393f;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 999;
  border-radius: 5px;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  box-shadow: 0px 0px 10px #3d3d3d;
  &.open {
    right: 0;
  }
}
.car-enter-active,
.car-leave-active {
  transition: opacity 0.8s;
}
.car-enter,
.car-leave-to {
  opacity: 0;
}
</style>
