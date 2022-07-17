import React, { useEffect, useState } from 'react';
import { message } from 'tdesign-react';
import moment from 'moment';
import styles from './index.less';
import { DescribeAuditInfoData } from '@/api/article';
import { DraftInfoDataResponseType, UserInfoInter } from '@/consts/infoType';

export default function ArticleDraft({ userInfo }) {
  const [user, setUser] = useState<UserInfoInter>({});
  const [articleList, setArticleList] = useState<DraftInfoDataResponseType[]>([]);

  const getArticleData = async () => {
    const result = await DescribeAuditInfoData({ username: userInfo.username });

    if (result.Code === 0) {
      setArticleList([...result.Data]);
    } else {
      message.error({ content: result.Message });
    }
  };

  useEffect(() => {
    if (user.username) {
      getArticleData();
    }
  }, [user]);

  useEffect(() => {
    console.log('articleList', articleList);
  });

  useEffect(() => {
    if (userInfo?.username) {
      setUser(userInfo);
    }
  }, [userInfo.username]);

  return (
    <div style={{ paddingBottom: '10px' }}>
      {articleList.map(item => {
        return (
          <div className={styles.audit_card} key={item.id}>
            <p>{item.article_title}</p>
            <p>
              <span>{moment(item.create_time).format('YYYY-MM-DD HH:mm:ss')}</span>
              <span>字数：{item.word}</span>
            </p>
            <div className={styles.card}>待审核</div>
          </div>
        );
      })}
      {!articleList.length && <div className={styles.empty}>暂无数据</div>}
    </div>
  );
}
