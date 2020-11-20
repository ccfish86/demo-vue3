/**
 * 租户实体
 */
export default interface Tenant {
  /**
   * 0无效1有效
   */
  activeFlag: boolean;
  /**
   * 办公地址
   */
  address: string;
  /**
   * 开放接口
   */
  apiFlag: boolean;
  /**
   * APPID
   */
  appId: string;
  /**
   * 密匙
   */
  appSecret: string;
  /**
   * 审核日期
   */
  checkTime: number;
  /**
   * 编码
   */
  code: string;
  /**
   * 联系人
   */
  contact: string;
  /**
   * 联系人电话
   */
  contactPhone: string;
  /**
   * 创建人
   */
  createBy: number;
  /**
   * 创建日期
   */
  createTime: number;
  /**
   * 0未删除1已删除
   */
  deleteFlag: boolean;
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
   * 1未审核2审核通过3审核不通过
   */
  status: number;
  /**
   * 企业类型
   */
  type: number;
  /**
   * 企业规模
   */
  typeSize: number;
  /**
   * 更新人
   */
  updateBy: number;
  /**
   * 更新日期
   */
  updateTime: number;
}
