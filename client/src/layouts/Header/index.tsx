import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'umi';
import styles from './header.less';
import LogoPhoto from '../../../assets/logo.png';
import AvtarHead from '@/components/AvtarHead';
import SearchInput from '@/components/SearchInput';
import { WithoRouterPropsInter } from '@/consts/propsTypes';
import { UserInfoInter } from '@/consts/infoType';

interface HeaderProps extends WithoRouterPropsInter {
  userInfo: UserInfoInter;
}

const tabbarList = [
  { id: 0, tab: '首页', path: '/home' },
  { id: 1, tab: '论坛', path: '/study' },
  { id: 2, tab: '学习', path: '/news' },
  { id: 3, tab: '资讯', path: '/bbs' },
  { id: 4, tab: 'App', path: '/app' },
  { id: 5, tab: '插件', path: '/plug' },
];

function Header(props: HeaderProps) {
  const [tabbarSearchStatus, setTabbarSearchStatus] = useState(false);
  const [tabbarStatus, setTabbarStatus] = useState(0);
  const [articelStatus, setArticelStatus] = useState(false);

  useEffect(() => {
    if (props.location?.pathname) {
      const tab = tabbarList.find(item => props.location.pathname.indexOf(item.path) === 0);
      if (tab) {
        setTabbarStatus(tab.id);
      } else {
        setTabbarStatus(-1);
      }
    }
  }, []);

  const tabbarClickHandle = index => {
    setTabbarStatus(index);
  };
  return (
    <div className={styles.header_box}>
      <div className={styles.tabbar_header}>
        <img className={styles.header_image} src={LogoPhoto} alt='' />

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
        <AvtarHead userInfo={props.userInfo} className={styles.login_module} />
        <div className={styles.message_dymanic}>
          <p>消息</p>
        </div>
        <div className={styles.message_dymanic}>
          <p>动态</p>
        </div>
        <div className={styles.creation_station}>
          <span>创作空间站</span>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Header);
