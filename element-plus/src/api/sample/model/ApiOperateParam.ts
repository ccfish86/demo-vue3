/**
 * 接口
 */
export default interface ApiOperateParam {
  className: string;
  /**
   * 标识
   */
  id: number;
  methodName: string;
  /**
   * 请求方法
   */
  methods: string;
  moduleId: number;
  /**
   * 请求路径
   */
  path: string;
  /**
   * 接口名称
   */
  remark: string;
}
