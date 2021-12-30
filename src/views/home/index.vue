<template>
  <div class="body">
    <h1>Page Builder</h1>
    <h2>HTML构造器</h2>
    <div>
      <el-button type="primary" @click="$router.push('/builder')">
        开始使用
        <el-icon style="vertical-align: middle">
          <right />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script>
import { Right } from '@element-plus/icons'

export default {
  components: { Right },
  methods: {}
}
</script>
<style lang="scss" scoped>
.body {
  text-align: center;
}
</style>
