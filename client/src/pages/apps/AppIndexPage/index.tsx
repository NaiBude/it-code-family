import React from 'react';
import { Redirect, useLocation } from 'umi';
import './index.less';
import { NavLink } from 'umi';

export default function AppIndexPage(props: any) {
  console.log(props);
  const location = useLocation();
  if (location.pathname === '/index' || location.pathname === '/index/') {
    return <Redirect to='/index/recommend' />;
  }
  return (
    <div>
      <div className='tabr'>
        <div className='tabr-li'>
          <ul>
            <NavLink to='/index/recommend' activeClassName='active'>
              推荐
            </NavLink>
            <NavLink to='/index/nowplaying'>最新</NavLink>
            <NavLink to='/index/topsearch'>热榜</NavLink>
          </ul>
        </div>
      </div>
      <div className='context'>{props.children}</div>
    </div>
  );
}
