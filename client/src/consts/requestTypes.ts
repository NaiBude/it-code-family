export interface ResponseType<T> {
  Code: number;
  Message: string;
  Data: T;
}
export interface ArticleListResposeType {
  article_title: string;
  collect: string;
  id: number;
  user_id: number;
  username: string;
  sign: string;
  read: number;
  url: string | null;
  tag: string;
  praise: number;
  show_count: number;
  comment_count: number;
  create_time: string;
  update_time: string;
}
export interface ArticleListParamsInter {
  Filter?: {
    Name:
      | 'article_title'
      | 'collect'
      | 'id'
      | 'username'
      | 'sign'
      | 'praise'
      | 'show_count'
      | 'comment_count'
      | 'tag_parent'
      | 'tag_children';
    Values: string[] | number[];
  }[];
  Sort?: { Name: 'collect' | 'id' | 'praise' | 'show_count' | 'comment_count'; Value: string }[];
  PageNumber?: number;
  PageSize?: number;
}
export interface ArtcleContentInter {
  id: number;
  pre_id: number;
  content: string;
}
export interface AddUserDataType {
  nickname: string;
  username: string;
  password: string;
  job: string;
}
export interface SelectArticleDataType {
  data: {
    id: number;
    username: string;
    article_title: string;
    sign: string;
    tag: string;
    praise: number;
    show_count: number;
    comment_count: number;
  };
}
export interface TagChildResponseType {
  id: number;
  belong: number;
  content: string;
  article_count: number;
  read_count: number;
  click_count: number;
}
export interface AddDraftInfoDataParams {
  title: string;
  sign: string;
  tag_parent: string;
  tag_children: string[];
  content: string[];
  username: string;
  word: number;
}
