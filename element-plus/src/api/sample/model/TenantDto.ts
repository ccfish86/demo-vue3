import Tenant from "./Tenant";

/**
 * 租户详情
 */
export default interface TenantDto {
  /**
   * 应用列表
   */
  appList: string[];
  /**
   * 租户模块
   */
  codeList: number[];
  /**
   * 租户信息
   */
  tenant: Tenant;
}
