import React, { useEffect, useState } from 'react';
import { message } from 'tdesign-react';
import Card from '../../Card';
import { DescribeArticleList } from '@/api/article';
import { ArticleListResposeType } from '@/consts/requestTypes';
import CardList from '@/components/CradList/CardList';
import { UserInfoInter } from '@/consts/infoType';

export default function MyArticles({ userInfo }) {
  const [user, setUser] = useState<UserInfoInter>({});
  const [articleList, setArticleList] = useState<ArticleListResposeType[]>([]);

  const getArticleData = async () => {
    const result = await DescribeArticleList({
      Filter: [
        {
          Name: 'username',
          Values: [userInfo.username],
        },
      ],
    });
    console.log('result---', result);

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

  useEffect(() => {
    console.log('userInfo', userInfo);
  }, [userInfo]);
  return (
    <div style={{ paddingBottom: '10px' }}>
      {articleList.map(item => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
}
