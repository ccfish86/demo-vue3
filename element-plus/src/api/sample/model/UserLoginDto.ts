import TreeModuleDto from "./TreeModuleDto";
import Role from "./Role";

/**
 * 用户权限
 */
export default interface UserLoginDto {
  /**
   * 账号标识
   */
  accountId: number;
  /**
   * 账号类型
   */
  accountType: number;
  /**
   * 头像
   */
  headUrl: string;
  /**
   * 登录时间
   */
  loginTime: string;
  /**
   * 模块列表
   */
  moduleList: TreeModuleDto[];
  /**
   * 是否修改密码:true是false否
   */
  passwordFlag: boolean;
  /**
   * 手机号
   */
  phone: string;
  /**
   * 角色列表
   */
  roleList: Role[];
  /**
   * 通知：1开启0关闭
   */
  settingNotify: boolean;
  /**
   * 声音：1开启0关闭
   */
  settingSound: boolean;
  /**
   * 震动：1开启0关闭
   */
  settingVibrate: boolean;
  /**
   * 企业标识，accountType=20时启用
   */
  tenantId: number;
  /**
   * 企业名称，accountType=20时启用
   */
  tenantName: string;
  /**
   * token令牌
   */
  token: string;
  /**
   * 用户标识
   */
  userId: number;
  /**
   * 用户名称
   */
  userName: string;
}
