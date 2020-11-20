/*
 * @Author: ccfish
 * @Date: 2020-11-19 16:57:46
 * @LastEditors: ccfish
 * @LastEditTime: 2020-11-19 17:13:59
 * @Description: file content
 */
export default interface UserLoginParam {
  /**
   * 企业编码
   */
  code: string;
  /**
   * 是否加载所有菜单
   */
  loadAllPages?: boolean;
  /**
   * 密码
   */
  password: string;
  /**
   * 用户名
   */
  username: string;
}
