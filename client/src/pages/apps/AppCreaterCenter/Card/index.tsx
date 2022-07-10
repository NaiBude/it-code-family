// import a from 'assert/other.svg';
import React from 'react';
import moment from 'moment';
// import Other from 'assets/other.svg';
// import other from
// import {} from '';
// import a from ''
import styles from './index.less';
// import Other from '../../../../../assets/other.svg';
import { ArticleListResposeType } from '@/consts/requestTypes';

export default function Card(props: { data: ArticleListResposeType }) {
  const { data } = props;
  return (
    <div className={styles.card_detail}>
      <div>{data.article_title}</div>
      <div>
        <span className={styles.time}>
          {moment(data.create_time).format('YYYY:MM:DD HH:mm:ss')}
        </span>
        <span>{data.show_count}展示</span>
        <span>{data.read}阅读</span>
        <span>{data.collect}点赞</span>
        <span>{data.comment_count}评论</span>
      </div>
      <div>{/* <img src={Other} alt='' /> */}</div>
    </div>
  );
}
