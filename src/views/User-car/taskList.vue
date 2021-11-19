<template>
  <div>
    <router-link :to="{ name: 'User' }" class="return-user">
      任务列表
    </router-link>
    <ul id="task-lists">
        <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'taskList',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
</style>
