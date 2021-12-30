<template>
  <div class="sidebar transition-common" :class="{ 'is-collapse': isCollapse }">
    <div
      class="translate transition-common"
      :class="{ 'is-collapse': isCollapse }"
    >
      <el-button type="text" @click="handleCollapse">
        <Icon name="el-d-arrow-left" />
      </el-button>
    </div>
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
                :name="component.name"
                :title="component.title"
              />
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </transition>
  </div>
</template>
<script>
import DraggableComponent from './DraggableComponent.vue'

export default {
  name: 'SideBar',
  components: {
    DraggableComponent
  },
  data() {
    return {
      isCollapse: false,
      activeNames: null,
      searchKey: null,
      menu: [],
      componentsList: [
        {
          name: 'basic',
          title: '基础组件',
          children: [
            {
              name: 'button',
              title: '按钮'
            },
            {
              name: 'button',
              title: '按钮'
            },
            {
              name: 'button',
              title: '按钮'
            },
            {
              name: 'button',
              title: '按钮'
            },
            {
              name: 'button',
              title: '按钮'
            }
          ]
        }
      ]
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
  .translate {
    position: fixed;
    top: 50%;
    left: 280px;
    transform: translateY(-50%);
  }
  .is-collapse {
    left: 20px;
    transform: translateY(-50%) rotate(180deg);
  }
  .menu {
    height: inherit;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    .components {
      display: flex;
    }
  }
}
.is-collapse {
  width: 0;
}
</style>
