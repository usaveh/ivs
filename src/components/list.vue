<template>
  <div>
    <div class="li">
      <div id="listTitle">
        <p>
          <img src="../assets/logo.jpeg" alt="logo" />
        </p>
        <p id="carName">ei5 2020款</p>
        <p id="carInf">新能源汽车5坐</p>
      </div>
      <div id="carImg">
        <p id="power">
          <i>沪AD12345</i>
          <i style="display: block" id="powerLine">
            <i class="blueLine"></i><i class="blueLine"></i
            ><i class="blueLine"></i><i class="blueLine"></i
            ><i class="blueLine"></i><i class="blueLine"></i
            ><i class="blueLine"></i><i class="blueLine"></i
            ><i class="blueLine"></i><i class="blueLine"></i>
            <i id="powerDistance">约400KM</i>
          </i>
        </p>
        <p>
          <img src="../assets/ei5.png" alt="car" />
        </p>
      </div>
      <div id="moreInf">点击展开更多信息</div>
    </div>
    <div class="li longLi" v-bind:style="'height:' + height + 'px'">
      <ul id="car-long-list">
        <li id="car-long-title">
          <span>车辆任务详情</span>
        </li>
        <li id="car-list-map">
          <div class="amap-wrapper-list">
            <el-amap class="amap-box-list" vid="amap-vue-list"></el-amap>
          </div>
        </li>
        <li id="car-passenger-num">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-iconset0436"></use>
            </svg>
            <i>6人</i>
          </div>
          <div>
            <svg class="icon" aria-hidden="true" id="end">
              <use xlink:href="#icon-iconset0436"></use>
            </svg>
            <i>3人</i>
          </div>
        </li>
        <li id="car-list-start-name" class="car-item">
          预计发车时间<span class="car-time"></span>
        </li>
        <li id="car-list-end-name" class="car-item">
          预计到站时间<span class="car-time"></span>
        </li>
        <li id="car-list-queue" class="car-item">
          当前处于车队序列<span class="car-time"></span>
        </li>
        <li id="car-list-arrive-time" class="car-item">
          预计到站需要的时间<span class="car-time"></span>
        </li>
        <li id="car-plus">
          以上信息均有计算得出，仅供参考，具体已实际路况为准
        </li>
        <button id="car-list-button">结束任务</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    height: {
      type: Number,
      default: 274,
    },
    mounted() {

    },
  },
};
</script>

<style lang="scss" scoped>
.li {
  background-color: #fff;
  border-radius: 23px;
  -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
  box-sizing: border-box;
  height: 257px;
  width: 505px;
}
#listTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 46px;
  }
  #carName {
    font-size: 16px;
    text-align: center;
  }
  #carInf {
    font-size: 16px;
    color: #adaeb0;
  }
}
#carImg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 206px;
  }
  #powerLine {
    #powerDistance {
      font-size: 22px;
      margin-left: 10px;
    }
    .blueLine {
      height: 24px;
      width: 7px;
      background-color: #0c90de;
      display: inline-block;
      margin-right: 3px;
      border-radius: 3px;
      margin-top: 14px;
    }
  }
}
#moreInf {
  color: #adaeb0;
}
.longLi {
  position: absolute;
  bottom: 0px;
}
.amap-box-list {
  height: 240px;
}
#car-long-list {
  #car-long-title {
    color: rgba($color: #929496, $alpha: 0.8);
    font-size: 20px;
    &::after {
      content: "";
      border: rgba($color: #e1e1e1, $alpha: 0.8) 1px solid;
      margin-top: 23px;
      margin-bottom: 20px;
      display: block;
    }
    span{
      &::after,&::before{
        float: right;
        content: '';
        border: #999c9f solid 1px;
        height: 20px;
      }
      &::after{
        transform: rotate(45deg) translateY(-5%);
      }
      &::before{
        transform: rotate(-45deg) translateY(-5%);
      }
    }
  }
  #car-list-map {
    height: 240px;
  }
  #car-passenger-num {
    margin-top: 30px;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .icon {
      font-size: 24px;
      width: 30px;
      height: 30px;
    }
    #end {
      transform: rotate(180deg);
    }
  }
  .car-item {
    height: 47px;
    background-color: #fafafa;
    margin-bottom: 15px;
    line-height: 47px;
    border-radius: 9px;
    font-size: 16px;
  }
  #car-list-button {
    position: relative;
    left: 22%;
    bottom: -30px;
    height: 84px;
    width: 238px;
    border-radius: 90px;
    background-color: #34393f;
    color: #fff;
    font-size: 30px;
    line-height: 84px;
    font-weight: lighter;
  }
  #car-plus{
    margin-top: 25px;
    color: #34393f;
  }
}
</style>
