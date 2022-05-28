import React from 'react';
import { IconFont } from 'tdesign-icons-react';
import styles from './index.less';

const Card = (props: { data: any }) => {
  // console.log(props);

  const { data } = props;
  return (
    <>
      {data.map((item: any) => (
        <div key={item.id} className={styles.box}>
          <div className={styles.header}>
            <span>{item.theme}</span>
          </div>
          <div className={styles.left}>
            <img src={item.url} alt={item.id} />
          </div>
          <div className={styles.right}>
            <div className={styles.footer}>
              <span>
                <IconFont name='browse' size='1.7em' />
                {item.browse}
              </span>
              <span>
                <IconFont name='chat' size='1.7em' />
                {item.chat}
              </span>
              <span>
                <IconFont name='thumb-up' size='1.7em' />
                {item.thumb}
              </span>
            </div>
            <p>{item.context}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
