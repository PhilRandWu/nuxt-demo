<!--
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-14 13:30:15
 * @LastEditTime: 2022-04-14 13:31:27
 * @LastEditors: PhilRandWu
-->
<template>
  <div>
    <div>url: {{ error.path }}</div>
    <div>code: {{ error.statusCode }}</div>
    <div>msg: {{ error.message }}</div>
    <nuxt-link to="/home">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
</style>
