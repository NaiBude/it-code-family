import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'umi';
import './index.less';
import { WithoRouterPropsInter } from '@/consts/propsTypes';

export default function AppIndexPage(props: WithoRouterPropsInter) {
  const { location } = props;
  const [routerState, setRouterState] = useState(0);
  if (location.pathname === '/index' || location.pathname === '/index/') {
    return <Redirect to='/index/recommend' />;
  }

  const routerList = [
    { id: 0, path: '/home', content: '推荐' },
    { id: 1, path: '/home/nowplaying', content: '最新' },
    { id: 2, path: '/home/topsearch', content: '热榜' },
  ];

  useEffect(() => {
    const tab = routerList.find(item => props.location.pathname === item.path);
    console.log('tab', tab);

    setRouterState(tab.id);
  }, []);

  return (
    <div>
      <div className='tabr'>
        <div className='tabr-li'>
          <ul>
            {routerList.map(item => {
              return (
                <Link
                  onClick={() => setRouterState(item.id)}
                  key={item.path}
                  to={item.path}
                  className={routerState === item.id ? 'active' : ''}
                >
                  {item.content}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={'context'}>{props.children}</div>
    </div>
  );
}
