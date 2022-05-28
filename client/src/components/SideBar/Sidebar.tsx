import React from 'react';
import { IconFont } from 'tdesign-icons-react';
import styles from './index.less';

const Sidebar = (props: { listdata; onClick }) => {
  console.log(props);

  const { listdata } = props;
  return (
    <>
      <div className={styles.content}>
        {listdata.map((item: any) => (
          <div className={styles.content_theme} key={item.id}>
            <div className={styles.content_theme_rigth}>{item.text}</div>
            <div className={styles.content_theme_left}>
              <IconFont name='chevron-right' />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Sidebar;
