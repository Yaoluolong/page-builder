<template>
  <div class="nodata">暂无数据</div>
</template>

<script>
export default {
  name: 'NoData'
}
</script>
<style lang="scss" scoped>
.nodata {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: var(--el-color-info);
}
</style>
