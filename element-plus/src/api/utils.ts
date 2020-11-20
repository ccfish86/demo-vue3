/*
 * @Author: ccfish
 * @Date: 2020-11-19 17:10:16
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-19 17:40:39
 * @Description: 文件保存工具类
 */
function getBrowser(): string {
  const ua = window.navigator.userAgent;
  // var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
  const isIE = !!window.ActiveXObject || "ActiveXObject" in window;
  const isFirefox = ua.indexOf("Firefox") !== -1;
  const isOpera = "opr" in window;
  const isChrome = ua.indexOf("Chrome") && "chrome" in window;
  const isSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Version") !== -1;
  if (isIE) {
    return "IE";
  } else if (isFirefox) {
    return "Firefox";
  } else if (isOpera) {
    return "Opera";
  } else if (isChrome) {
    return "Chrome";
  } else if (isSafari) {
    return "Safari";
  } else {
    return "Unkown";
  }
}

export function saveFile(blob: Blob, fileName: string) {
  const b = getBrowser();
  if (b === "Chrome") {
    const link = document.createElement("a");
    const file = new Blob([blob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    link.href = window.URL.createObjectURL(file);
    link.download = fileName;
    link.click();
  } else if (b === "Firefox") {
    const file = new File([blob], fileName, {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    const url = URL.createObjectURL(file);
    // window.location.href = url;
    parent.location.href = url;
  } else if (b === "IE") {
    const file = new Blob([blob], { type: "application/force-download" });
    window.navigator.msSaveBlob(file, fileName);
  }
}
