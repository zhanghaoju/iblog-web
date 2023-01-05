<template>
  <div class="times">
    <Header />
    <div class="content">
      <ul class="timeline timeline-centered">
        <li class="timeline-item period">
          <div class="timeline-info"></div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h2 class="timeline-title">2022</h2>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-15</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何高效学习Vue</h3>
            <p>如何高效学习Vue如何高效学习Vue</p>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-14</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何高效学习React</h3>
            <p>如何高效学习React如何高效学习React</p>
          </div>
        </li>
      </ul>
      <ul class="timeline timeline-centered">
        <li class="timeline-item period">
          <div class="timeline-info"></div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h2 class="timeline-title">2021</h2>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-15</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何高效学习Vue</h3>
            <p>如何高效学习Vue如何高效学习Vue</p>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-14</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何高效学习React</h3>
            <p>如何高效学习React如何高效学习React</p>
          </div>
        </li>
      </ul>
      <ul class="timeline timeline-centered">
        <li class="timeline-item period">
          <div class="timeline-info"></div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h2 class="timeline-title">2021</h2>
          </div>
        </li>
        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-15</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何高效学习Vue</h3>
            <p>如何高效学习Vue如何高效学习Vue</p>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-14</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何高效学习React</h3>
            <p>如何高效学习React如何高效学习React</p>
          </div>
        </li>
      </ul>
    </div>
    <Footer />
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
