<!--
 * @Author: ccfish
 * @Date: 2020-11-23 14:03:54
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-23 14:08:11
 * @Description: file content
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./demo/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
