<template>
  <el-icon v-if="elIconName" :size="size" :color="color" :style="style">
    <component :is="elIconName"></component>
  </el-icon>
  <i
    class="el-icon"
    :style="{ '--font-size': size + 'px', color: color }"
    v-else
  >
    <svg aria-hidden="true">
      <use :xlink:href="'#icon-' + name" />
    </svg>
  </i>
</template>

<script>
import { defineComponent } from 'vue'
import * as Icons from '@element-plus/icons'
export default defineComponent({
  name: 'Icon',
  components: Icons,
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    style: {
      type: String
    },
    size: {
      type: String,
      default: '14'
    },
    color: {
      type: String,
      default: 'var(--el-color-primary)'
    }
  },
  computed: {
    elIconName() {
      let name = ''
      if (this.name.startsWith('el-')) {
        name = this.name.slice(3)
      }
      return name
    }
  }
})
</script>

<style></style>
