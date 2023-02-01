<template>
  <div>
    <Header />
    <div class="home">
      <!-- <div class="home_image">图片</div> -->
      <div v-if="isPc" class="home_content">
        <el-container>
          <el-main>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="home_articles">
              <el-card class="box-card">
                <div class="article_title">文章标题</div>
                <div class="home_card">
                  <div class="home_card_img">图片</div>
                  <div class="home_card_content">
                    <div class="home_card_desc">描述</div>
                    <div class="home_card_info">
                      <span>发表人：张三</span>
                      <span>发布日期:2022-01-04</span>
                      <span>查看:10</span>
                      <span>评论:10</span>
                      <span>点赞:10</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
          </el-main>
          <div :class="isFixed ? 'is_fixed' : 'is_note_fixed'">
            <UserInfo />
            <Social />
            <Category />
            <PopularArticles />
          </div>
        </el-container>
      </div>
    </div>
    <div v-if="!isPc" class="home_mobile">
      <el-container>
        <el-main>
          <div class="home_articles">
            <el-card class="box-card">
              <div class="article_title">文章标题</div>
              <div class="home_card_info">
                <span>发表人：张三</span>
                <span>发布日期:2022-01-04</span>
                <span>查看:10</span>
                <span>评论:10</span>
                <span>点赞:10</span>
              </div>
              <div class="home_card">
                <div class="home_card_content">
                  <div class="home_card_desc">描述</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="home_articles">
            <el-card class="box-card">
              <div class="article_title">文章标题</div>
              <div class="home_card_info">
                <span>发表人：张三</span>
                <span>发布日期:2022-01-04</span>
                <span>查看:10</span>
                <span>评论:10</span>
                <span>点赞:10</span>
              </div>
              <div class="home_card">
                <div class="home_card_content">
                  <div class="home_card_desc">描述</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="home_articles">
            <el-card class="box-card">
              <div class="article_title">文章标题</div>
              <div class="home_card_info">
                <span>发表人：张三</span>
                <span>发布日期:2022-01-04</span>
                <span>查看:10</span>
                <span>评论:10</span>
                <span>点赞:10</span>
              </div>
              <div class="home_card">
                <div class="home_card_content">
                  <div class="home_card_desc">描述</div>
                </div>
              </div>
            </el-card>
          </div>
        </el-main>
        <div>
          <!-- <UserInfo />
          <Social /> -->
          <!-- <Category />
          <PopularArticles /> -->
        </div>
      </el-container>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import "./index.less";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PopularArticles from "@/components/PopularArticles.vue";
import Category from "@/components/Category.vue";
import UserInfo from "@/components/UserInfo.vue";
import Social from "@/components/Social.vue";
import { onMounted, onUnmounted, ref } from "vue";
let isFixed = ref(false);
onMounted(() => {
  // 监听
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  // 销毁
  return () => window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
  console.log("滚动内容高度：", scrollTop);
  // console.log("scrollTop", scrollTop, 'lastScrollY', lastScrollTop, 'clientHeight', clientHeight, 'scrollHeight', scrollHeight);
  if (scrollTop > 100) {
    console.log("scrollTop>100", scrollTop);
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
};
</script>
