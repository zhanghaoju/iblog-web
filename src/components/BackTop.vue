<template>
  <el-backtop :bottom="150" :right="90">
    <div class="backTop">
      <el-icon size="3.5em" color="#ffffff">
        <ArrowUpBold />
      </el-icon>
    </div>
  </el-backtop>
</template>
<script setup lang="ts">
import "@/assets/top.less";
import { ArrowUpBold } from "@element-plus/icons-vue";
</script>
<style scoped></style>
