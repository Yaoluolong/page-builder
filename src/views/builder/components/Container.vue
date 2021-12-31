<template>
  <div class="container">
    <div class="content" @drop="drop" @dragover="allowDrop">
      new Vue
      <el-button>按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  methods: {
    allowDrop(e) {
      e.preventDefault()
    },
    drop(e) {
      e.preventDefault()
      var data = e.dataTransfer.getData('component')
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  height: calc(100% - 50px);
  .content {
    height: 100%;
  }
}
</style>
