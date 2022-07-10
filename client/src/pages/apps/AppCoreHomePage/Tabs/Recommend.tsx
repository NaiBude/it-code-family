import React, { useEffect, useState } from 'react';
import * as moment from 'moment';
import { connect, useHistory, useLocation } from 'umi';

import CardList from '@/components/CradList/CardList';
import { DescribeArticleList } from '@/api/article';

function Recommend({ dispatch, ...res }) {
  // const [articleData, setArticleData] = useState([]);
  // const location = useLocation();
  // const { query } = location as unknown as { query: string };

  // useEffect(() => {
  //   const getArticle = async () => {
  //     const result = await DescribeArticleList({
  //       // Filter: [
  //       //   {
  //       //     Name: 'tag_children',
  //       //     Values: ['html'],
  //       //   },
  //       // ],
  //     });
  //     const newData = [...result.Data];
  //     setArticleData(newData);
  //   };
  //   getArticle();
  // }, []);

  return <div>{/* <CardList data={articleData} /> */}</div>;
}
export default connect(({ articleInfo, ...res }) => {
  console.log('res', res);
  console.log('articleInfo', articleInfo);

  return articleInfo;
})(Recommend);
