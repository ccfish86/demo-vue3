<!--
 * @Author: ccfish
 * @Date: 2020-11-23 10:24:13
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-23 11:25:36
 * @Description: file content
-->
<!--
  <div>
    带压缩的上传
    <upload-image v-model="imageUrl" :fileSize="512" />
    已上传文件 {{ imageUrl }}
  </div>
-->
<template>
  <div>
    <el-upload
      class="image-uploader"
      :action="`${path}/fileUploadAndDownload/upload`"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      :on-error="handleImageError"
      :before-upload="beforeImageUpload"
      :multiple="false"
    >
      <img v-if="imageUrl" :src="imageUrl" class="image" />
      <i v-else class="el-icon-plus image-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script lang="ts">
const PATH = process.env.VUE_APP_BASE_API;
import ImageCompress from "@/utils/image.ts";
import { defineComponent, ref, onMounted, watchEffect } from "vue";

export default defineComponent({
  // type inference enabled
  name: "upload-image",
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    fileSize: {
      type: Number,
      default: 2048, // 2M 超出后执行压缩
    },
    maxWH: {
      type: Number,
      default: 1920, // 图片长宽上限
    },
  },
  model: {
    prop: "imageUrl",
    event: "change",
  },
  emits: ["change"],
  setup(props, ctx) {
    const path = ref(PATH);
    const beforeImageUpload = (
      file: File
    ): boolean | Promise<File | Blob> | boolean | unknown => {
      console.log("before image upload");
      const isRightSize = file.size / 1024 < props.fileSize;
      if (!isRightSize) {
        // 压缩
        const compress = new ImageCompress(file, props.fileSize, props.maxWH);
        return compress.compress();
      }
      return isRightSize;
    };
    // 初始化
    const handleImageSuccess = (res: any) => {
      // this.imageUrl = URL.createObjectURL(file.raw);
      const { data } = res;
      if (data.file) {
        ctx.emit("change", data.file.url);
      }
    };

    const handleImageError = (err: any) => {
      const { status, message } = err;
      console.log(err.response);
    };

    return { path, beforeImageUpload, handleImageSuccess, handleImageError };
  },
});
</script>

<style scoped>
.image-uploader {
  border: 1px dashed #d9d9d9;
  width: 180px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.image-uploader {
  border-color: #409eff;
}
.image-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.image {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
