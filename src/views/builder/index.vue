<template>
  <div class="wrap">
    <SideBar :is-collapse="isCollapse" />
    <div class="main transition-common" :class="{ 'is-collapse': isCollapse }">
      <TopBar @handle-collapse="isCollapse = !isCollapse" />
      <Container />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import Container from './components/Container'
export default {
  components: {
    SideBar,
    TopBar,
    Container
  },
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  .main {
    height: inherit;
    margin-left: 300px;
  }
  .is-collapse {
    margin-left: 0;
  }
}
</style>
