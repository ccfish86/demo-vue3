/**
 * SysApiOperation（接口）
 */
export default interface ApiOperationPageDto {
  /**
   * 接口分组ID
   */
  apiId: number;
  apiName: string;
  /**
   * Controller名
   */
  className: string;
  /**
   * 创建时间
   */
  createTime: number;
  /**
   * 接口ID(module_id:2 +type:1 + api_id:3 + operate_id:2)
   */
  id: number;
  /**
   * Method名
   */
  methodName: string;
  /**
   * 请求方法
   */
  methods: string;
  /**
   * 后台模块ID
   */
  moduleId: number;
  /**
   * 请求路径
   */
  path: string;
  /**
   * 说明
   */
  remark: string;
  /**
   * 更新时间
   */
  updateTime: number;
}
