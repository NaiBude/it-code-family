import React from 'react';
import styles from './tabList.less';

export default props => {
  console.log('fsa');
  return (
    <div className={styles.tab_list}>
      <ul>
        <li>全部｜</li>
        <li>前端</li>
        <li>后端</li>
        <li>大数据</li>
        <li>物联网</li>
        <li>Phtyon</li>
        <li>Java</li>
      </ul>
    </div>
  );
};
