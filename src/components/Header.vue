<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      :class="isShow ? 'hide' : 'show'"
      mode="horizontal"
      menu-trigger="hover"
      :ellipsis="false"
      @select="handleSelect"
      router
    >
      <!-- 移动端展示 -->
      <div v-show="!isPc" class="mobile_icon">
        <el-icon size="20" class="no-inherit">
          <Operation @click="drawer = true" />
        </el-icon>
        <el-drawer v-model="drawer" direction="ltr" title="夜雨炊烟" size="50%">
          <div v-for="item in routerMF" key="item.name">
            <el-menu-item :index="item.name" :key="item.name">
              <el-icon size="15" color="red">
                <!-- 使用动态组件的方式 -->
                <component :is="item.meta.icon"></component>
              </el-icon>
              {{ item.meta.title }}
            </el-menu-item>
          </div>
        </el-drawer>
      </div>
      <div class="header_logo">夜雨炊烟</div>
      <div class="flex-grow"></div>
      <div>搜索</div>
      <!-- 子组件导航栏 -->
      <div class="header_layer" v-show="isPc">
        <SubMenu
          v-for="(item, index) in rou"
          :key="item.name"
          :menu="item"
          :index="item.name"
        ></SubMenu>
      </div>
      <div class="header_switch">
        <el-switch
          v-model="value"
          active-value="1"
          inactive-value="0"
          inline-prompt
          @change="triggerTheme"
          :active-icon="Sunny"
          :inactive-icon="Moon"
        />
      </div>
      <!-- <div>
        <el-sub-menu index="2">
          <template #title>用户管理</template>
          <el-menu-item index="2-1">个人中心</el-menu-item>
          <el-menu-item index="2-2">退出登录</el-menu-item>
        </el-sub-menu>
      </div> -->
    </el-menu>
    <!-- 回到顶部 -->
    <BackTop />
  </div>
</template>
<script setup lang="ts">
import "@/assets/header.less";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Sunny, Moon } from "@element-plus/icons-vue";
import BackTop from "@/components/BackTop.vue";
// pc端路由
import routerObj from "@/router/index";
// 移动端路由
import routerObjMobile from "@/router/indexMobile";
const route = useRoute();
let router = routerObj.options.routes;
let routerMobile = routerObjMobile.options.routes;
// 获取过滤后的路由
let rou = router.filter((item: any) => item.meta);
let routerMF = routerMobile.filter((item: any) => item.meta);
const activeIndex = ref(route.name);
// 导航栏滚动显示隐藏
let isShow = ref(false);
onMounted(() => {
  // 监听
  window.addEventListener("scroll", handleScroll);
  // 销毁
  return () => window.removeEventListener("scroll", handleScroll);
});
let lastScrollTop = 0;
const handleScroll = () => {
  let clientHeight = document.documentElement.clientHeight; //可视区域高度
  let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
  let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
  // console.log("scrollTop", scrollTop, 'lastScrollY', lastScrollTop, 'clientHeight', clientHeight, 'scrollHeight', scrollHeight);
  if (scrollTop > lastScrollTop) {
    // isShow.value = false;
    isShow.value = false;
  } else {
    isShow.value = false;
  }
  lastScrollTop = document.documentElement.scrollTop;
  // 判断是否滚动到底部
  if (scrollTop + clientHeight === scrollHeight) {
    console.log("滚动到底部");
  }
};
// 侧边栏显示
let drawer = ref(false);
// 下拉框选择的内容
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("key", key, keyPath);
  console.log("点击选择");
};
// 切换主题
const value = ref("1");
const triggerTheme = (key: string) => {
  console.log("切换值", key);
};
</script>

<style scoped></style>
