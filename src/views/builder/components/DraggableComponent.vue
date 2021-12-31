<template>
  <div
    class="card transition-common--fast"
    draggable="true"
    @dragstart="drag"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div>
      <Icon
        :name="component.name"
        :size="40"
        :color="hover ? '#fff' : 'var(--el-color-primary)'"
      />
    </div>
    <div class="title">{{ component.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'DraggableComponent',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false
    }
  },
  methods: {
    drag(e) {
      e.dataTransfer.setData('component', JSON.stringify(this.component))
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  padding: 10px 23.3px;
  &:hover {
    color: #fff;
    background: var(--el-color-primary);
  }
  .title {
    text-align: center;
  }
}
</style>
