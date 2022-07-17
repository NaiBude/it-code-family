import React, { useEffect, useState } from 'react';
import { useLocation } from 'umi';
import moment from 'moment';
import styles from '../AppArticleContentShow/index.less';
import picture from '../../../../assets/defaultAvtar.png';
import { selectArticle } from '@/api/article';

const reg = /[<\u4e00-\u9fa5>]/g;
export default () => {
  const [articleData, setArticleData] = useState([]);
  const location = useLocation();
  const { query } = location as unknown as { query: any };

  useEffect(() => {
    const getArticle = async () => {
      const result = await selectArticle({ id: Number(query.id) });
      setArticleData(result.Data);
    };
    getArticle();
  }, []);
  return (
    <div className={styles.content_show}>
      {articleData.map(item => (
        <div key={item.id}>
          <div className={styles.theme}>
            <h1>{item.article_title}</h1>
          </div>
          <div className={styles.content_user}>
            <div className={styles.picture}>
              <img src={picture} alt='picture' width='100%' height='100%' />
            </div>
            <div className={styles.author_box_info}>
              <div className={styles.username}>
                <a>
                  <span>{item.username}</span>
                </a>
              </div>
              <div className={styles.meta_box}>
                <span>{moment(item.create_time).locale('zh-cn').format('lll')}</span>
                <span>· 阅读 {item.show_count}</span>
              </div>
            </div>
            <button className={styles.button_follwore}>
              <span>+</span>
              <span>关注</span>
            </button>
          </div>
          <div className={styles.content}>{item.sign}</div>
          <div className={styles.tag_list_box}>
            <div className={styles.tag_list}>
              <div className={styles.tag_list_title}>标签:</div>
              <div className={styles.tag_list_container}>
                <a>
                  {item.tag
                    .split('/')
                    .join('')
                    .replace(reg, '')
                    .split('-')
                    .filter(m => {
                      return m && m.trim();
                    })
                    .slice(0, 3)
                    .join('-')}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
