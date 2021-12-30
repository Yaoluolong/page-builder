<template>
  <div class="container">
    <side-bar @handle-collapse="isCollapse = !isCollapse" />
    <div class="main transition-common" :class="{ 'is-collapse': isCollapse }">
      <div class="container">
        123
        <Icon name="form-button"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  components: {
    SideBar
  },
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  .main {
    margin-left: 300px;
    padding: 10px 20px;
    width: 100%;
    background: #f6f8f9;
    .container {
      background: var(--el-color-white);
    }
  }
  .is-collapse {
    margin-left: 0;
  }
}
</style>
