import { bindUrl, request } from "../request";
import UserLoginParam from "./model/UserLoginParam";
import UserLoginDto from "./model/UserLoginDto";

/**
 * 登录
 * POST \api\user\home\login
 * @param {UserLoginParam} bodyParams - loginParam
 */
export function login(bodyParams: UserLoginParam): Promise<UserLoginDto> {
  return request({
    url: bindUrl("/ibms-user/api/user/home/login", {}),
    method: "POST",
    data: bodyParams
  });
}
