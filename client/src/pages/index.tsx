import React from 'react';
import styles from './index.less';
// import { request } from '../service/request';
import Header from '@/layouts/header';

export default function IndexPage(props) {
  return (
    <div className={styles.center_content}>
      <Header></Header>
      <div>{props.children}</div>
    </div>
  );
}
