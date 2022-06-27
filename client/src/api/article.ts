import { request } from '@/service/axiosRequest';
import { ArticleListResposeType } from '@/consts/requestTypes';

/**
 * 用于查询用户数据信息
 * @param params
 * @returns
 */
export async function DescribeArticleList(params = null) {
  const result = await request<ArticleListResposeType>({
    url: '/api/article/DescribeArticleList',
    method: 'post',
    data: params,
  });
  return { ...result };
}
