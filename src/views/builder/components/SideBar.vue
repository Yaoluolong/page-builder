<template>
  <div class="sidebar transition-common" :class="{ 'is-collapse': isCollapse }">
    <transition name="transition-fade">
      <div v-if="!isCollapse" class="menu" accordion>
        <div style="margin-bottom: 10px">
          <el-input
            v-model="searchKey"
            size="small"
            placeholder="请输入关键字搜索"
          />
        </div>
        <div v-if="searchKey" style="flex-grow: 1">
          <NoData />
        </div>
        <el-collapse v-else v-model="activeNames">
          <el-collapse-item
            v-for="item in componentsList"
            :key="item.name"
            :title="item.title"
            :name="item.name"
          >
            <div class="components">
              <DraggableComponent
                v-for="component in item.children"
                :key="component.name"
                :component="component"
              />
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </transition>
  </div>
</template>
<script>
import Components from '@/assets/configJson/components.json'
import DraggableComponent from './DraggableComponent.vue'

export default {
  name: 'SideBar',
  components: {
    DraggableComponent
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeNames: null,
      searchKey: null,
      menu: [],
      componentsList: Components
    }
  }
}
</script>
<style lang="scss">
.sidebar {
  .el-input__inner {
    border: 0px;
    border-radius: 15px;
    background: var(--el-color-info-light);
  }
}
</style>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 300px;
  height: 100%;
  box-shadow: 1px 0px 10px var(--el-text-color-placeholder);
  .menu {
    height: inherit;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    .components {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
.is-collapse {
  width: 0;
}
</style>
