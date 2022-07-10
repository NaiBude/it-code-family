import React from 'react';
import moment from 'moment';
import styles from './index.less';
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
      <div>
        <span>...</span>
      </div>
    </div>
  );
}
