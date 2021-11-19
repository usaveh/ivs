<template>
  <div>
    <router-link :to="{ name: 'User' }" class="return-user">
      我的车辆
    </router-link>
    <ul id="my-car-list">
      <li class="own-car">车辆基本参数</li>
      <li class="own-car">车辆运行参数</li>
      <li class="own-car">车辆维保参数</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myCar',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#my-car-list{
  margin-top: 110px;
}
.return-user {
  display: block;
  height: 55px;
  color: #fff;
  font-size: 16px;
  padding-left: 30px;
  line-height: 90px;
  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-left: 1px solid #00a3ff;
    border-top: 1px solid #00a3ff;
    transform: rotate(-45deg);
    margin-right: 20px;
  }
}
.own-car {
  height: 65px;
  line-height: 65px;
  font-size: 16px;
  color: #7e8083;
  border-bottom: 1px #3a3f45 solid;
  padding-left: 30px;
  &::after {
    margin-left: 230px;
    display: inline-block;
    content: "";
    width: 13px;
    height: 13px;
    border-top: 1px #3e4349 solid;
    border-right: 1px #3e4349 solid;
    transform: rotate(45deg);
  }
}
</style>
