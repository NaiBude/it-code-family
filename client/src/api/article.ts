import { request } from '@/service/axiosRequest';
import { ArticleListResposeType, ArtcleContentInter } from '@/consts/requestTypes';

/**
 * 用于查询用户数据信息
 * @param params
 * @returns
 */
export async function DescribeArticleList(params = null) {
  const result = await request<ArticleListResposeType[]>({
    url: '/api/article/DescribeArticleList',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 请求文章内容数据，用于文章详情内容展示
 */
export async function DescribeArtcleContent(params: { ParentId?: number; Id?: number } = {}) {
  const result = await request<ArtcleContentInter[]>({
    url: '/api/article/DescribeArtcleContent',
    method: 'post',
    data: params,
  });
  return { ...result };
}
