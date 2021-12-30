<template>
  <div
    class="card transition-common--fast"
    draggable="true"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div>
      <Icon
        :name="name"
        :size="40"
        :color="hover ? '#fff' : 'var(--el-color-primary)'"
      />
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'DraggableComponent',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  padding: 10px 15px;
  &:hover {
    color: #fff;
    background: var(--el-color-primary-light-4);
  }
  .title {
    text-align: center;
  }
}
</style>
