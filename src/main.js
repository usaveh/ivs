import Vue from 'vue';
import VueAMap from 'vue-amap';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAMap);

// 引入高德地图
VueAMap.initAMapApiLoader({
  key: 'f6cbbe24d492cb7da05496f1e495139f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
