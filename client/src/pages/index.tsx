import React from 'react';
import styles from './index.less';
// import { request } from '../service/request';
import Header from '@/layouts/header';
import Sidebar from '@/components/SideBar/Sidebar';
import 'tdesign-react/es/style/index.css';
import Button from '@/components/SideBar/Button';

const context = [
  {
    id: 1,
    text: 'HTML',
    path: 'index/1',
  },
  {
    id: 2,
    text: '前端',
    path: 'index/2',
  },
  {
    id: 3,
    text: '后端',
    path: 'index/3',
  },
  {
    id: 4,
    text: '前端',
    path: 'index/4',
  },
  {
    id: 5,
    text: '后端',
    path: 'index/5',
  },
  {
    id: 6,
    text: '前端',
    path: 'index/6',
  },
  {
    id: 7,
    text: '后端',
    path: 'index/7',
  },
];
export default function IndexPage(props) {
  return (
    <div className={styles.center_content}>
      <Header></Header>
      <Button listdata={context} onClick />
      <div>{props.children}</div>
    </div>
  );
}
