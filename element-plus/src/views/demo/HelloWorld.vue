<!--
 * @Author: ccfish
 * @Date: 2020-11-19 11:30:33
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-25 09:47:42
 * @Description: 测试用
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-tag name="1" color="primary">22</el-tag>
    <span>version:{{ version }}</span>
    <el-button name="1" type="primary" @click="handleClick">click me</el-button>

    <upload-image v-model="url" maxWH="600"></upload-image>

    <icon data="@icon/pdf.svg" original>no effect</icon>
    <icon data="@icon/bug.svg" class="icon-red">no effect</icon>

    <el-form name="form">
      <el-form-item label="名称">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="submit" @click="handleLogin">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import UploadImage from "@/components/upload/image.vue";
import { login } from "@/api/sample/login";
import UserLoginParam from "@/api/sample/model/UserLoginParam";
import { defineComponent, ref, getCurrentInstance } from "vue";

export default defineComponent({
  props: { msg: String },
  components: { UploadImage },

  setup(props, ctx) {
    const form = ref({ code: "0001", username: "", password: "" });
    const handleLogin = () => {
      const params: UserLoginParam = { ...form.value };
      login(params).then((res) => {
        console.log(res);
      });
    };
    const vm = getCurrentInstance()?.proxy;
    const handleClick = () => {
      // 获取查询参数
      console.log(vm);
      const queries = vm?.$route.query;
      vm?.$message({ message: "操作成功" });
      vm?.$msgbox({ message: "message box" });
      console.log(queries);
    };
    return { form, handleLogin, handleClick };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon-red {
  color: red;
}
</style>
