import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'umi';
import styles from './index.less';
import TabList from './components/TabList';
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
    const tab = routerList.find(item => location.pathname === item.path);
    setRouterState(tab?.id);
  }, []);

  return (
    <div>
      <div className={styles.tabbar}>
        <TabList />
        <div className={styles.tabr_li}>
          <ul>
            {routerList.map((item, index) => {
              return (
                <>
                  <Link
                    onClick={() => setRouterState(item.id)}
                    key={item.path}
                    to={item.path}
                    className={`${styles.link_style} ${
                      routerState === item.id ? styles.active : ''
                    }`}
                  >
                    {item.content}
                  </Link>
                  {index !== routerList.length - 1 && (
                    <span className={styles.interval_tab}>|</span>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.context}>{props.children}</div>
    </div>
  );
}
