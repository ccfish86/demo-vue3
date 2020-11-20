/**
 * 租户模块配置
 */
export default interface TenantModuleParam {
  /**
   * 应用列表
   */
  appList: string[];
  /**
   * 租户标识
   */
  id: number;
  /**
   * 模块类型列表
   */
  moduleCode: number[];
}
