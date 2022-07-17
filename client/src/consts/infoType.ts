export interface UserInfoInter {
  username?: string;
  nickname?: string;
  birthday?: string;
  photo_key?: string;
  fans?: number;
  visit?: number;
  concern?: number;
  read?: number;
  hobby_tag?: string;
  skill?: string;
  message?: string;
  hobby?: string;
  register_time?: string;
}
export interface DraftInfoDataResponseType {
  id: number;
  username: string;
  article_title: string;
  sign: string;
  tag: string;
  photo_key: string;
  word: number;
  create_time: string;
  update_time: string;
}
