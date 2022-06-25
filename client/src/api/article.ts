import { request } from '@/service/axiosRequest';
/**
 * 用于查询用户数据信息
 * @param params
 * @returns
 */
export async function DescribeArticleList(params = null) {
  const result = await request<null>({
    url: '/api/article/DescribeArticleList',
    method: 'post',
    data: params,
  });
  return { ...result };
}
