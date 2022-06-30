export interface ResponseType<T> {
  Code: number;
  Message: string;
  Data: T;
}
export interface ArticleListResposeType {
  article_title: string;
  collect: string;
}
export interface AddUserDataType {
  username: string;
  password: string;
  job: string;
}
export interface ArtcleContentInter {
  id: number;
  pre_id: number;
  content: string;
}
