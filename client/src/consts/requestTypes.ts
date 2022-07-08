export interface ResponseType<T> {
  Code: number;
  Message: string;
  Data: T;
}
export interface ArticleListResposeType {
  article_title: string;
  collect: string;
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
