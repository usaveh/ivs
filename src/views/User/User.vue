<template>
  <div id="info">
    <div id="user-id">
      <div id="user-photo">
        <svg class="icon zzz" aria-hidden="true">
          <use xlink:href="#icon-ivs"></use>
        </svg>
      </div>
      <ul id="user-num">
        <li class="num">{{ num }}</li>
        <li id="use-mark">您今日上岗小时:{{ hour }}</li>
      </ul>
    </div>
    <ul id="user-options">
      <router-link :to="{ name: 'myCar' }">
        <li class="option">
          <i class="iconfont icon-icon-test o"></i>
          我的车辆
        </li>
      </router-link>
      <router-link :to="{ name: 'taskList' }">
        <li class="option">
          <i class="iconfont icon-wode o"></i>
          任务列表
        </li>
      </router-link>
      <li class="option">
        <i class="iconfont icon-chaxun o"></i>
        消息记录
      </li>
      <li class="option">
        <i class="iconfont icon-shouye_jiashijilu o"></i>
        驾驶记录
      </li>
      <li class="option">
        <i class="iconfont icon-bangzhu o"></i>
        获取帮助
      </li>
    </ul>
    <button id="exit">退出</button>
    <router-view id="display" :class="{ open: isDisplay }" />
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      num: '752668496@qq.com',
      hour: '5',
    };
  },
  computed: {
    isDisplay() {
      return !!(this.$route.name == 'myCar' || this.$route.name == 'taskList');
    },
  },
};
</script>

<style lang="scss" scoped>
#user-id {
  margin-left: 45px;
  margin-top: 50px;
  display: flex;
  width: 280px;
  justify-content: space-between;
}
.zzz {
  width: 78px;
  height: 79px;
  box-shadow: 0px 0px 6px #2f343a;
  border-radius: 50%;
}
#use-mark {
  width: 150px;
  height: 27px;
  border-radius: 14px;
  background: linear-gradient(to right, #11a5f9, #0b8ad7);
  line-height: 27px;
  color: #fff;
  font-size: 14px;
  text-align: center;
}
#user-num {
  display: flex;
  flex-wrap: wrap;
}
.num {
  height: 18px;
  color: #909090;
  font-size: 18px;
}
#user-options {
  width: 407px;
  margin-top: 95px;
  box-sizing: border-box;
  padding-left: 30px;
}
.option {
  height: 65px;
  line-height: 65px;
  font-size: 16px;
  color: #7e8083;
  border-bottom: 1px #3a3f45 solid;
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
#exit {
  margin-top: 260px;
  margin-left: 130px;
  height: 58px;
  width: 164px;
  border-radius: 90px;
  background-color: #2d3339;
  color: #fff;
  font-size: 18px;
  line-height: 58px;
  font-weight: lighter;
  opacity: 0.8;
  border: none;
}
.u {
  color: #00a3ff;
}
//图标样式
.o {
  color: #00a3ff;
  font-size: 25px;
  margin-right: 15px;
}
#display {
  position: fixed;
  width: 405px;
  background-color: #34393f;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 999;
  border-radius: 5px;
  -webkit-transition: all 0.8s ease 0s;
  -moz-transition: all 0.8s ease 0s;
  box-shadow: 0px 0px 10px #3d3d3d;
  &.open {
    right: 0px;
  }
}
</style>
