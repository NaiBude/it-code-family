import React, { useState } from 'react';
import { Link } from 'umi';
import styles from './header.less';
import AvtarHead from '@/components/AvtarHead';
// import SideBar from '@/pages/apps/AppSideBarPage';
import SearchInput from '@/components/SearchInput';
// import Footer from '@/pages/apps/AppFooterPage';

const tabbarList = [
  { id: 0, tab: '首页', path: '/home' },
  { id: 1, tab: '问答', path: '/study' },
  { id: 2, tab: '学习', path: '/news' },
  { id: 3, tab: '资讯', path: '/bbs' },
  { id: 4, tab: 'App', path: '/app' },
  { id: 5, tab: '插件', path: '/plugin' },
];

export default function Header(props) {
  const [tabbarSearchStatus, setTabbarSearchStatus] = useState(false);
  const [tabbarStatus, setTabbarStatus] = useState(0);

  const tabbarClickHandle = index => {
    setTabbarStatus(index);
  };
  return (
    <div className={styles.header_box}>
      <div className={styles.tabbar_header}>
        <img
          className={styles.header_image}
          src='https://www.tencent.com/img/index/menu_logo_hover.png'
          alt=''
        />
        <ul className={styles.tabber_header}>
          {tabbarList.map(item => (
            <li
              key={item.id}
              className={tabbarStatus === item.id ? styles.tabber_header_select : ''}
              onClick={() => {
                tabbarClickHandle(item.id);
              }}
            >
              <Link to={item.path}>
                <span>{item.tab}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.header_box_right}>
        <SearchInput
          onFocus={() => {
            setTabbarSearchStatus(true);
          }}
          onBlur={() => {
            setTabbarSearchStatus(false);
          }}
          style={tabbarSearchStatus ? { width: '400px' } : {}}
          className={styles.header_box_search}
        />
        <AvtarHead className={styles.login_module} />
      </div>
    </div>
  );
}
