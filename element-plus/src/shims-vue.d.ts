/*
 * @Author: ccfish
 * @Date: 2020-11-19 11:30:33
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-25 09:40:18
 * @Description: 定义ICON组件
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.svg'

declare module '@icon/*.svg' {
    import { Icon } from '@yzfe/vue3-svgicon'
    const resource: Icon
    export default resource
}
