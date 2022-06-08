import React from 'react';
import styles from '../singIn.less';

export default function Tips() {
  return (
    <div>
      <ul className={styles.tips}>
        <li>密码不能为空</li>
        <li>密码为8-16个字符</li>
        <li>必须包含字母、数字、符号中至少2种</li>
      </ul>
    </div>
  );
}
