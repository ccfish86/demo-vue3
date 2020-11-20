/**
 * 企业申请
 */
export default interface TenantOperateDto {
  /**
   * 办公地址
   */
  address: string;
  /**
   * 联系人
   */
  contact: string;
  /**
   * 联系人电话
   */
  contactPhone: string;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 标识
   */
  id: number;
  /**
   * 企业名称
   */
  name: string;
  /**
   * 备注
   */
  remark: string;
  /**
   * 企业类型
   */
  type: number;
  /**
   * 企业规模
   */
  typeSize: number;
}
