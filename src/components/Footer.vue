<template>
  <div class="footer">
    <div class="copyright">
      <a href="#">备案编号</a>
      <div>描述信息</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import "@/assets/footer.less";
const props = defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});
</script>
