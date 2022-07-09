import React, { useEffect, useState } from 'react';
import * as moment from 'moment';
import CardList from '@/components/CradList/CardList';
import { DescribeArticleList } from '@/api/article';

export default function Recommend() {
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    const getArticle = async () => {
      const result = await DescribeArticleList({
        Filter: [
          {
            Name: 'tag_children',
            Values: ['html'],
          },
        ],
      });
      const newData = [...result.Data];
      newData.forEach((item, index, arr) => {
        const reg = /[<\u4e00-\u9fa5>]/g;
        // const regday = /[A-Z:.]/g;
        const str = item.tag
          .split('/')
          .join('')
          .replace(reg, '')
          .split('-')
          .filter(m => {
            return m && m.trim();
          })
          .slice(0, 3)
          .join('-');
        // const day_Y = item.create_time.replace(regday, '-').split('-').slice(0, 3).join('-');
        // const day_H = item.create_time.replace(regday, '-').split('-').slice(3, 6).join(':');
        // const time = `${day_Y} ${day_H}`; //三天内   三天前   指的是三天内还是两天后
        // const dtime = moment(item.create_time, 'YYYY-MM-DD HH:mm:ss')
        //   .locale('zh-cn')
        //   .fromNow()
        //   .split('')
        //   .filter(m => {
        //     return m && m.trim();
        //   })
        //   .join('');
        // item.create_time = time;
        // item.dtime = dtime;
        // item.tag = str;
      });
      setArticleData(newData);
    };
    getArticle();
  }, []);

  return (
    <div>
      <CardList data={articleData} />
    </div>
  );
}
