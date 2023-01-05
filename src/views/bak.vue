<template>
  <div class="category">
    <Header />
    <Footer fixed />
  </div>
</template>
<script lang="ts">
import "./index.less";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
