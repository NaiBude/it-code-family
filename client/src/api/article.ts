import { request } from '@/service/axiosRequest';
import {
  ArticleListResposeType,
  ArtcleContentInter,
  SelectArticleDataType,
} from '@/consts/requestTypes';

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
/**
 * 请求父类标签
 */
export async function SelectTagParent(params = null) {
  const result = await request<{ id: number; content: string }>({
    url: '/api/article/SelectTagParent',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 请求子类标签
 */
export async function SelectTagChild(params: { belong?: number }) {
  const result = await request<{}>({
    url: '/api/article/SelectTagChild',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 请求文章内容数据
 */
export async function selectArticle(params = null) {
  const result = await request<null>({
    url: '/api/article/selectArticle',
    method: 'post',
    data: params,
  });
  return { ...result };
}
