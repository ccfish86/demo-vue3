export default interface JsonResult<T> {
  /**
   * 状态码
   */
  code: number;
  /**
   * 业务数据
   */
  data: T;
  /**
   * 消息
   */
  msg: string;
  success: boolean;
}
