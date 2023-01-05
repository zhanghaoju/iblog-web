<template>
  <div>
    <el-container>
      <el-aside>
        <el-card class="ib_user">
          <div className="ib_user_avatar">
            <el-avatar
              src="https://www.yychuiyan.com/iblog-web/avatar.jpeg"
              :size="80"
            />
          </div>
          <div className="ib_user_title">
            <div>炊烟</div>
            <div>时间如一捧流沙,缓缓的在指间流尽</div>
          </div>
          <div className="ib_user_aggregate">
            <div className="agg contents">
              <h3>文章</h3>
              <span>10</span>
            </div>
            <div className="agg categories">
              <h3>分类</h3>
              <span>10</span>
            </div>
            <div className="agg tags">
              <h3>标签</h3>
              <span>10</span>
            </div>
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import "@/assets/userinfo.less";
</script>
