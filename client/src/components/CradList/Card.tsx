import moment from 'moment';
import React, { useState } from 'react';
import { BrowseIcon, ThumbUpIcon, ChatIcon } from 'tdesign-icons-react';
import { Link, useLocation } from 'umi';
import styles from './index.less';

const reg = /[<\u4e00-\u9fa5>]/g;

const Card = (props: { data: any }) => {
  const [status, setStatus] = useState(false);
  const { data } = props;
  console.log(data);

  // console.log('data', data);

  // const location = useLocation();
  const changeStatus = () => {
    setStatus(!status);
  };
  return (
    <>
      {data.map(item => (
        <div
          className={styles.cardlist}
          key={item.id}
          // onClick={() => {
          //   // console.log(item.id);

          //   location.href = `${location.origin}/article?id=${item.id}`;
          // }}
        >
          <div className={styles.cardlist_theme}>
            <h2>{item.article_title}</h2>
          </div>
          <div className={styles.cardlist_main}>
            <div className={styles.cardlist_content}>
              <Link target='_blank' className={styles.cardlist_a} to={`/article?id=${item.id}`}>
                {item.sign}
              </Link>
              <div className={styles.cardlist_icon}>
                <div
                  className={styles.icon_text}
                  onClick={e => {
                    e.stopPropagation();
                  }}
                >
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
                          .slice(0, 3)
                          .join('-')}
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
                      <a onClick={changeStatus} className={status ? styles.active : ''}>
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
            <div className={styles.cardlist_img}>{Boolean(item.url) && <img src={item.url} />}</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
