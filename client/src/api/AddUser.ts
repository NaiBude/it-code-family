import { request } from '@/service/axiosRequest';
import { AddUserDataType } from '@/consts/requestTypes';

/**
 * 用于插入用户数据
 * @param params
 */
export async function AddUserAvtar(params: { username: string; password: string; job: string }) {
  const result = await request<AddUserDataType>({
    url: '/api/user/AdduserInfo',
    method: 'post',
    data: params,
  });
  return { ...result };
}
