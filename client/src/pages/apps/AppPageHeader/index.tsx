import React, { useState } from 'react';
import { Link } from 'umi';
import styles from './index.less';
import Logo from '../../../../assets/logo.png';
import TextLogo from '../../../../assets/textLogo.png';
import { request } from '@/service/request';

export default function IndexPage(props) {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <img className={styles.logo} src={Logo} />
        <img className={styles} src={TextLogo} />
        <ul>
          <li>
            <Link to='/'>主页</Link>
          </li>
          <li>
            <Link to='/forum'>论坛</Link>
          </li>
          <li>
            <Link to=''>提问专区</Link>
          </li>
          <li>
            <Link to=''>IT遨游馆</Link>
          </li>
          <li>
            <Link to=''>笔记</Link>
          </li>
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
