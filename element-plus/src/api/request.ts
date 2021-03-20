/*
 * @Author: ccfish
 * @Date: 2020-11-19 14:05:38
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-23 09:50:10
 * @Description: axios/xmlHttp请求
 */
import axios, { AxiosRequestConfig } from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import qs from "qs";
import { saveFile } from "./utils";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
  withCredentials: true,
  paramsSerializer: params => {
    return qs.stringify(params);
  }
});

// Request interceptors
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

/**
 * 请求
 * @param params 参数
 */
export function request(config: AxiosRequestConfig): Promise<any> {
  const args = Object.assign({}, config);
  return new Promise(function(resolve, reject) {
    service
      .request(config)
      .then(res => {
        const {
          status,
          statusText,
          data: { code, msg, data, success }
        } = res;

        if (status === 200) {
          if (success) {
            return resolve(data);
          } else {
            console.log(code, msg);
            ElMessage({
              message: msg || "网络异常",
              type: "error"
            });
            return reject(new Error(msg || "服务器端错误"));
          }
        }
      })
      .catch(err => {
        if (!err.response) {
          return reject(new Error("网络错误:" + err.message));
        }

        const {
          status,
          statusText,
          data: { code, msg, data, success }
        } = err.response;
        if (status === 401) {
          ElMessageBox.confirm("登录超时, 重新登录或继续停留？", "确定登出", {
            confirmButtonText: "重新登录",
            cancelButtonText: "继续停留",
            type: "warning"
          }).then(() => {
            //   UserModule.ResetToken();
            // TODO 清除缓存，跳转至登录
            location.reload(); // To prevent bugs from vue-router
          });
        } else if (status === 403) {
          ElMessage({
            message: msg || "没有授权",
            type: "error",
            duration: 5 * 1000
          });
          return reject(msg);
        } else if (status === 500) {
          ElMessage({
            message: msg || "网络异常, 请稍后再试",
            type: "error",
            duration: 5 * 1000
          });
          return reject(msg);
        } else if (status === 502) {
          ElMessage({
            message: "服务器故障, 请稍后再试",
            type: "error",
            duration: 5 * 1000
          });
          return reject("服务器故障, 请稍后再试");
        } else {
          ElMessage({
            message: statusText || "网络异常",
            type: "error",
            duration: 5 * 1000
          });
          return reject(new Error(statusText || "网络异常"));
        }
      });
  });
}

export function download(config: any) {
  const { url, method, params } = config;
  const queryStr = qs.stringify(params);
  const xhr = new XMLHttpRequest();

  return new Promise(function(resolve, reject) {
    // 执行请求
    xhr.responseType = "blob";
    xhr.open(method, `${url}?${queryStr}`);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const responseType = xhr.getResponseHeader("content-type");
          if (responseType && responseType.startsWith("application/json")) {
            const result = xhr.response;
            const reader = new FileReader();
            reader.onload = function(event) {
              // 内容就在这里
              const rescontent = reader.result?.toString();
              const content = rescontent ? JSON.parse(rescontent) : {};
              // alert('下载文件异常:' + content.msg)
              ElMessage({
                message: content.msg || "下载失败",
                type: "error",
                duration: 5 * 1000
              });

              return reject(content.msg || "下载失败");
            };
            reader.readAsText(result);
          } else {
            const fileName = xhr.getResponseHeader("content-disposition");
            console.log("fileName", fileName);
            let name: string;
            if (fileName) {
              name = fileName.split("=")[1];
            } else {
              name = "file";
            }
            const response = xhr.response;
            const oriFilName = decodeURI(name);
            saveFile(response, oriFilName);
            resolve(oriFilName);
          }
        } else {
          const { status, statusText } = xhr;
          const msg = `status[${status}], statusText[${statusText}]`;
          ElMessage({
            message: "下载失败: " + msg,
            type: "error",
            duration: 5 * 1000
          });

          return reject(msg);
        }
      }
    };
    xhr.send();
  });
}

/**
 * 处理路径参数
 * @param path 路径
 * @param pathParams 路径参数
 */
export function bindUrl(path: string, pathParams?: any) {
  if (!path.match(/^\//)) {
    path = "/" + path;
  }
  let url = path;
  url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
    let value;
    //if (pathParams.hasOwnProperty(key)) {
    if (key in pathParams) {
      value = pathParams[key];
    } else {
      value = fullMatch;
    }
    return encodeURIComponent(value);
  });

  return url;
}

// export default { request, bindUrl };
