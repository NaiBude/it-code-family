import { request } from '@/service/axiosRequest';

/**
 * 用于查询用户数据信息
 * @param params
 * @returns
 */
export async function DescribeUserInfo(params = null) {
  const result = await request<null>({
    url: '/api/user/DescribeUserInfo',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 用于验证用户登陆信息获取凭据
 * @param params
 * @returns
 */
export async function VerifyUserInfo(params: { username: string; password: string }) {
  const result = await request<null>({
    url: '/api/user/VerifyUserInfo',
    method: 'post',
    data: params,
  });
  return { ...result };
}
