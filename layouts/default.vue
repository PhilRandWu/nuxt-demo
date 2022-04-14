<!--
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-14 12:52:58
 * @LastEditTime: 2022-04-14 22:31:25
 * @LastEditors: PhilRandWu
-->
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <nuxt-link to="/home">首页</nuxt-link>
          <nuxt-link to="/about">关于</nuxt-link>
          <nuxt-link to="/login">{{ user ? user : '登录' }}</nuxt-link>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row>
      <nuxt />
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    console.log(this.user);
  },
  data() {
    return {
      activeName: "second",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
