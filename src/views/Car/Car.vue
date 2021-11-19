<template>
  <div id="carList">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
          <list v-bind:height="height"></list>
      </swiper-slide>
      <swiper-slide >
          <list></list>
      </swiper-slide>
      <swiper-slide >
          <list></list>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import list from '../../components/list.vue';

export default {
  components: {
    swiper,
    swiperSlide,
    list,
  },
  name: 'Car',
  data() {
    return {
      height: 794,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#carList {
  position: absolute;
  z-index: 10;
  bottom: 95px;
  width: 1814px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%)
}
.swiper-slide{
    width: 505px;
}
.swiper-container{
    width: 1614px;
    overflow: inherit;
}
.swiper-button-prev,
.swiper-button-next {
  z-index: 10;
  background-color: #fff;
  border-radius: 25px;
  width: 60px;
  height: 100px;
  transform: translateY(-30%);
  transition: all .3s ease 0s;
  &:hover {
    background-color: #34393f;
  }
}
.swiper-button-prev::after {
  content: "";
  width: 16px;
  height: 16px;
  border: #00a3ff solid 5px;
  border-right: none;
  border-bottom: none;
  transform: rotate(-45deg);
  margin-left: 5px;
}
.swiper-button-next::after {
  content: "";
  width: 16px;
  height: 16px;
  border: #00a3ff solid 5px;
  border-left: none;
  border-bottom: none;
  transform: rotate(45deg);
  margin-right: 5px;
}
</style>
