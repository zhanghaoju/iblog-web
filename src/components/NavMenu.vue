<template>
  <!-- 有子节点渲染这个 -->
  <el-sub-menu
    :index="menu.name"
    v-if="menu?.children"
    :hide-timeout="100"
    hide-on-click
  >
    <template #title>
      <el-icon size="15" color="red">
        <!-- 使用动态组件的方式 -->
        <component :is="menu?.meta.icon"></component>
      </el-icon>
      <span>{{ menu?.meta.title }}</span>
    </template>
    <!-- 递归调用本身，该组件在index.ts中全局注册了 -->
    <SubMenu v-for="item in menu.children" :menu="item" />
  </el-sub-menu>
  <!-- 没有子节点渲染这个 -->
  <el-menu-item v-else :index="menu?.name" :key="menu?.name">
    <el-icon size="15" color="red">
      <!-- 使用动态组件的方式 -->
      <component :is="menu?.meta.icon"></component>
    </el-icon>
    <span slot="title">{{ menu?.meta.title }}</span>
  </el-menu-item>
</template>
<script lang="ts" setup>
// 拿到父组件传入的值
defineProps({
  menu: Object,
});
</script>

<style lang="less" scoped></style>
