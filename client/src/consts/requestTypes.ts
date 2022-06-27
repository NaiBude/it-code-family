export interface ResponseType<T> {
  Code: number;
  Message: string;
  Data: T;
}
export interface ArticleListResposeType {
  article_title: string;
  collect: string;
}
