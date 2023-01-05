<template>
  <div>
    <Header />
    <div :class="isPc ? 'category' : 'category_mobile'">
      <el-container>
        <el-main>
          <div class="cate_articles">
            <el-card class="box-card">
              <div class="article_title">文章标题</div>
              <div class="cate_card">
                <div class="cate_card_img">图片</div>
                <div class="cate_card_content">
                  <div class="cate_card_desc">描述</div>
                  <div class="cate_card_info">
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
          <div class="cate_articles">
            <el-card class="box-card">
              <div class="article_title">文章标题</div>
              <div class="cate_card">
                <div class="cate_card_img">图片</div>
                <div class="cate_card_content">
                  <div class="cate_card_desc">描述</div>
                  <div class="cate_card_info">
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
        <div>
          <UserInfo />
          <Category />
          <LastUpdate />
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
import { Folder } from "@element-plus/icons-vue";
import Category from "@/components/Category.vue";
import LastUpdate from "@/components/LastUpdate.vue";
import UserInfo from "@/components/UserInfo.vue";
</script>
