import React, { useState } from 'react';
import styles from '../DropDown/dropdown.less';

const DropDown = props => {
  const [text, setText] = useState([]);
  const [content, setContent] = useState('3天内');
  const [heightStatus, setHeightStatus] = useState(false);
  const data = [
    { id: 0, text: '3天内' },
    { id: 1, text: '7天内' },
    { id: 2, text: '30天内' },
    { id: 3, text: '全部' },
  ];
  const changText = () => {
    setText(data);
    setHeightStatus(!heightStatus);
  };
  const addBtnContent = text => {
    setContent(text);
    setHeightStatus(false);
  };
  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdown_btn} onClick={changText}>
          <button>{content}</button>
          <i className={`${styles.dropdown_icon} ${heightStatus ? styles.active : ''} `}></i>
        </div>
        <div className={styles.down} style={{ fontSize: 12 }}>
          <ul style={{ height: `${heightStatus ? '100px' : 0}` }} className={styles.down_ul}>
            {text.map(item => (
              <li key={item.id} onClick={() => addBtnContent(item.text)}>
                <a>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default DropDown;
