<!--
 * @Author: ccfish
 * @Date: 2020-11-19 11:30:33
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-20 14:14:29
 * @Description: 测试用
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-tag name="1" color="primary">22</el-tag>

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
import { Options, Vue } from "vue-class-component";
import UploadImage from "@/components/upload/image.vue";
import { login } from "@/api/sample/login";
import UserLoginParam from "@/api/sample/model/UserLoginParam";

@Options({
  props: {
    msg: String,
  },
  components: {
    UploadImage,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  url = "";
  form = { code: "0001", username: "", password: "" };

  handleLogin() {
    console.log("logining");
    const params: UserLoginParam = { ...this.form };
    login(params).then((res) => {
      console.log(res);
    });
  }
}
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
