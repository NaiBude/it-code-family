import { request } from '@/service/axiosRequest';
import {
  ArticleListResposeType,
  ArtcleContentInter,
  SelectArticleDataType,
  TagChildResponseType,
  ArticleListParamsInter,
  AddDraftInfoDataParams,
} from '@/consts/requestTypes';
import { DraftInfoDataResponseType } from '@/consts/infoType';

/**
 * 用于文章列表数据查询
 */
export async function DescribeArticleList(params: ArticleListParamsInter = {}) {
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
  const result = await request<{ id: number; content: string }[]>({
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
  const result = await request<TagChildResponseType[]>({
    url: '/api/article/SelectTagChild',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 请求文章内容数据
 */
export async function selectArticle(params: { id: number }) {
  const result = await request<ArticleListResposeType[]>({
    url: '/api/article/selectArticle',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 保存草稿箱
 */
export async function AddDraftInfoData(params: AddDraftInfoDataParams) {
  const result = await request<null>({
    url: '/api/article/AddDraftInfoData',
    method: 'post',
    data: params,
  });
  return { ...result };
}
export async function DescribeDraftInfoData(params: { id?: number; username: string }) {
  const result = await request<DraftInfoDataResponseType[]>({
    url: '/api/article/DescribeDraftInfoData',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 发布文章至待审核
 */
export async function AddAuditInfoData(params: AddDraftInfoDataParams) {
  const result = await request<null>({
    url: '/api/article/AddAuditInfoData',
    method: 'post',
    data: params,
  });
  return { ...result };
}
/**
 * 获取待审核文章列表
 */
export async function DescribeAuditInfoData(params: { id?: number; username: string }) {
  const result = await request<DraftInfoDataResponseType[]>({
    url: '/api/article/DescribeAuditInfoData',
    method: 'post',
    data: params,
  });
  return { ...result };
}
