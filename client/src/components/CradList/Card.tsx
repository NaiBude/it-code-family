import moment from 'moment';
import React from 'react';
import { BrowseIcon, ThumbUpIcon, ChatIcon } from 'tdesign-icons-react';
import { useLocation } from 'umi';
import styles from './index.less';

const reg = /[<\u4e00-\u9fa5>]/g;

const Card = (props: { data: any }) => {
  const { data } = props;
  console.log('data', data);

  // const location = useLocation();

  return (
    <>
      {data.map(item => (
        <div
          className={styles.cardlist}
          key={item.id}
          onClick={() => {
            location.href = `${location.origin}/article?id=23479479295`;
          }}
        >
          <div className={styles.cardlist_theme}>
            <h2>{item.article_title}</h2>
          </div>
          <div className={styles.cardlist_main}>
            <div className={styles.cardlist_content}>
              <a className={styles.cardlist_a}>{item.sign}</a>
              <div className={styles.cardlist_icon}>
                <div className={styles.icon_text}>
                  <ul>
                    <li>
                      <a style={{ color: '#333', fontWeight: 500 }}>{item.username}</a>
                      <span style={{ marginLeft: 10, color: '#e4e6eb' }}>|</span>
                    </li>
                    <li>
                      <a>
                        {moment(item.create_time).locale('zh-cn').fromNow().split(' ').join('')}
                      </a>
                      <span style={{ marginLeft: 10, color: '#e4e6eb' }}>|</span>
                    </li>
                    <li>
                      <a>
                        {item.tag
                          .split('/')
                          .join('')
                          .replace(reg, '')
                          .split('-')
                          .filter(m => {
                            return m && m.trim();
                          })
                          .slice(0, 3)}
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={styles.icon_icon}
                  onClick={e => {
                    e.stopPropagation();
                  }}
                >
                  <ul>
                    <li>
                      <BrowseIcon />
                      <span>{item.show_count}</span>
                    </li>
                    <li>
                      <a>
                        <ThumbUpIcon />
                        <span>{item.praise}</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <ChatIcon />
                        <span>{item.comment_count}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.cardlist_img}></div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
