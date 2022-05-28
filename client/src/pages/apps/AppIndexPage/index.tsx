import React, { useState } from 'react';
import { Redirect, useLocation, Link } from 'umi';
import style from './index.less';

const tabbarList = [
  { id: 0, tab: '推荐', path: '/home/recommend' },
  { id: 1, tab: '最新', path: '/home/nowplaying' },
  { id: 2, tab: '热榜', path: '/home/topsearch' },
];
export default function AppIndexPage(props: any) {
  const location = useLocation();
  const [tabbarStatus, setTabbarStatus] = useState(0);
  if (location.pathname === '/home' || location.pathname === '/home/') {
    return <Redirect to='/home/recommend' />;
  }
  const tabbarClickHandle = index => {
    setTabbarStatus(index);
  };
  return (
    <div>
      <div className={style.tab}>
        <ul className={style.tarb_header}>
          {tabbarList.map(item => (
            <li
              key={item.id}
              className={tabbarStatus === item.id ? style.tabber_elect : ''}
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
      <div className={style.context}>{props.children}</div>
    </div>
  );
}
