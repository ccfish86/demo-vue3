<!--
 * @Author: ccfish
 * @Date: 2020-11-19 11:44:59
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-20 10:26:19
 * @Description: 文件上传
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
      :before-upload="beforeImageUpload"
      :multiple="false"
    >
      <img v-if="imageUrl" :src="imageUrl" class="image" />
      <i v-else class="el-icon-plus image-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script lang="ts">
const path = process.env.VUE_APP_BASE_API;
import ImageCompress from "@/utils/image.ts";
import { Options, Vue } from "vue-class-component";

@Options({
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
})
export default class Image extends Vue {
  imageUrl!: string;
  fileSize!: number;
  maxWH!: number;

  path: string = path;

  beforeImageUpload(
    file: File
  ): boolean | Promise<File | Blob> | boolean | unknown {
    console.log("before image upload");
    const isRightSize = file.size / 1024 < this.fileSize;
    if (!isRightSize) {
      // 压缩
      const compress = new ImageCompress(file, this.fileSize, this.maxWH);
      return compress.compress();
    }
    return isRightSize;
  }
  handleImageSuccess(res: any) {
    // this.imageUrl = URL.createObjectURL(file.raw);
    const { data } = res;
    if (data.file) {
      this.$emit("change", data.file.url);
    }
  }
}
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
