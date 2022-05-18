import React, { useState } from 'react';
import { Link } from 'umi';
import styles from './header.less';
import AvtarHead from '@/components/AvtarHead';
// import SideBar from '@/pages/apps/AppSideBarPage';
import SearchInput from '@/components/SearchInput';
// import Footer from '@/pages/apps/AppFooterPage';

const tabbarList = ['首页', '问答', '学习', '资讯', '社区', 'App', '插件'];

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
          {tabbarList.map((item, index) => (
            <li
              key={item}
              className={tabbarStatus === index ? styles.tabber_header_select : ''}
              onClick={() => {
                tabbarClickHandle(index);
              }}
            >
              <Link to='/index'>
                <span>{item}</span>
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
