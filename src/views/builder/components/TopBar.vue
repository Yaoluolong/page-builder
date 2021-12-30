<template>
  <div class="topbar">
    <div
      class="transition-common"
      :class="{ 'is-collapse': isCollapse }"
    >
      <el-button type="text" @click="handleCollapse">
        <Icon name="el-fold" :size="size"></Icon>
      </el-button>
    </div>
    <div>123</div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      size: 30,
      isCollapse: false
    }
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
      this.$emit('handleCollapse')
    }
  }
}
</script>
<style lang="scss" scoped>
.topbar {
  height: 50px;
  padding-left: 10px;
  box-shadow: 6px 0px 10px var(--el-text-color-placeholder);
  display: flex;
  align-items: center;
  .translate {
    position: fixed;
    top: 50%;
    left: 280px;
    transform: translateY(-50%);
  }
  .is-collapse {
    transform: rotate(180deg);
  }
}
</style>
