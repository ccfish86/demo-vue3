/*
 * @Author: ccfish
 * @Date: 2020-11-25 09:39:13
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-25 09:45:46
 * @Description: vm扩展
 */

import { IMessage, IMessageBox } from "element-plus";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: IMessage;
    $msgbox: IMessageBox;
  }
}
