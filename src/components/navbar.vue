<template>
  <div id="nav">
    <ul id="navbar">
      <li id="sos">
        <i class="iconfont icon-alarm n"></i>
      </li>
      <li id="rest">
        <i class="iconfont icon-xiuxi n"></i>
      </li>
      <li id="menu" @click="displayList">菜单</li>
      <li id="call">
        <i class="iconfont icon-hujiao n"></i>
      </li>
      <li id="user" @click="user">
        <i class="iconfont icon-wode n"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import '../assets/iconfont';

export default {
  props: {
    isCarShow: {
      type: Boolean,
    },
  },
  methods: {
    user() {
      this.$router.push({ path: '/User' });
    },
    displayList() {
      let o = this.isCarShow;
      o = true;
      this.$emit('showCar', o);
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  #navbar {
    position: fixed;
    left: 50%;
    right: 50%;
    bottom: 85px;
    z-index: 999;
    text-align: center;
    transform: translateX(-50%);
    display: flex;
    width: 600px;
    justify-content: space-around;
    align-items: center;
    height: 90px;
    opacity: 70%;
    #sos {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #34393f;
      line-height: 60px;
      .icon {
        color: #fff;
        font-size: 25px;
      }
    }
    #rest {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #34393f;
      line-height: 60px;
      .icon {
        color: #fff;
        font-size: 25px;
      }
    }
    #menu {
      height: 85px;
      width: 250px;
      border-radius: 90px;
      background-color: #34393f;
      color: #fff;
      font-size: 30px;
      line-height: 85px;
      font-weight: lighter;
    }
    #call {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #34393f;
      line-height: 60px;
    }
    #user {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #34393f;
      line-height: 60px;
    }
  }
}
.n{
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
</style>
