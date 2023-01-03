<template>
  <div class="header">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    menu-trigger="click"
    :ellipsis="false"
    @select="handleSelect"

  >
    <div class="header_logo">夜雨炊烟</div>
    <div class="flex-grow"></div>

    <div v-for="item in data" :key="item.name">

      <el-menu-item :index="item.router" :key="item.name">
        <el-icon size="15" color="red">
          <!-- 使用动态组件的方式 -->
          <component :is="item.icon"></component>
        </el-icon>
        {{item.name}}
      </el-menu-item>
    </div>
  </el-menu>
  </div>
</template>
<script setup lang="ts">
import './Header.less'
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { Sunny,Position,Edit } from '@element-plus/icons-vue';
console.log("su",Sunny);

const menus= [
  {
    name: '首页',
    router: 'home',
    icon:'Sunny'
  },
  {
    name: '文章',
    router: 'articles',
    icon:Position
  },
]
const data = ref(menus)
const router = useRoute()
const activeIndex = ref(router.name?router.name:'home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("key", key, keyPath)
}
</script>

<style scoped>
</style>
