import React, { useState } from 'react';
import styles from './tabList.less';

export default props => {
  const [status, setStatus] = useState(0);
  const [tabStatus, setTabStatus] = useState('hidden');
  console.log('fsa');
  const optionsP = [
    { id: 0, content: '综合' },
    { id: 1, content: '综合' },
    { id: 2, content: '综合' },
    { id: 3, content: '综合' },
    { id: 4, content: '综合' },
    { id: 5, content: '综合' },
    { id: 6, content: '综合' },
    { id: 7, content: '综合' },
  ];

  const ChangeStatus = index => {
    setStatus(index);
  };

  const ChangetabStatusV = () => {
    setTabStatus('visible');
  };
  const ChangetabStatusH = () => {
    setTabStatus('hidden');
  };

  return (
    <div className={styles.tab_list} style={{ overflow: tabStatus }}>
      <div className={styles.tab_parent}>
        <ul className={styles.tab_parent_lsit}>
          {optionsP.map(item => (
            <li
              key={item.id}
              className={status === item.id ? styles.active : ''}
              onClick={() => {
                ChangeStatus(item.id);
              }}
              onMouseOver={ChangetabStatusV}
              onMouseOut={ChangetabStatusH}
            >
              {item.content}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.tab_child}></div>
    </div>
  );
};
