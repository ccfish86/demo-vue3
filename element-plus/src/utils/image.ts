/*
 * @Author: ccfish
 * @Date: 2020-11-19 11:54:11
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-20 10:05:12
 * @Description: 图片压缩处理
 */
export default class ImageCompress {
  private file: File;
  private fileSize: number;
  private maxWH: number;

  constructor(file: File, fileSize: number, maxWH = 1920) {
    this.file = file;
    this.fileSize = fileSize;
    this.maxWH = maxWH; // 最大长宽
  }

  compress(): Promise<File | Blob> | boolean | unknown {
    // 压缩
    const fileType = this.file.type;
    const fileSize = this.file.size / 1024;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        const canvas = document.createElement("canvas");
        const img = document.createElement("img");
        debugger;
        if (!img) {
          return reject("读取失败，当前环境不支持");
        }
        const loaded = reader.result?.toString();
        img.src = loaded ? loaded : img.src;
        img.onload = () => {
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return reject("读取失败");
          }
          const _dWH = this.dWH(img.width, img.height, this.maxWH);
          canvas.width = _dWH.width;
          canvas.height = _dWH.height;

          // 清空后, 重写画布
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const newImgData = canvas.toDataURL(fileType, 0.9);

          // 压缩宽高后的图像大小
          const newImgSize = this.fileSizeKB(newImgData);

          if (newImgSize > this.fileSize) {
            console.log("图片尺寸太大!" + fileSize + " >> " + newImgSize);
            return reject("图片尺寸太大");
          }

          const blob = this.dataURLtoBlob(newImgData, fileType);
          const nfile = new File([blob], this.file.name);
          resolve(nfile);
        };
      };
    });
  }

  /*
   * 长宽等比缩小
   * 图像的一边(长或宽)为最大目标值
   * */
  dWH(srcW: number, srcH: number, dMax: number) {
    const defaults = {
      width: srcW,
      height: srcH
    };
    if (Math.max(srcW, srcH) > dMax) {
      if (srcW > srcH) {
        defaults.width = dMax;
        defaults.height = Math.round(srcH * (dMax / srcW));
        return defaults;
      } else {
        defaults.height = dMax;
        defaults.width = Math.round(srcW * (dMax / srcH));
        return defaults;
      }
    } else {
      return defaults;
    }
  }

  fileSizeKB(dataURL: string) {
    const sizeKB = Math.round((dataURL.split(",")[1].length * 3) / 4 / 1024);
    return sizeKB;
  }

  /*
   * 转为Blob
   * */
  dataURLtoBlob(dataURL: string, fileType: string) {
    const byteString = atob(dataURL.split(",")[1]);
    let mimeString = dataURL
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    if (fileType) {
      mimeString = fileType;
    }
    return new Blob([ab], { type: mimeString }); //lastModifiedDate: new Date()
  }
}