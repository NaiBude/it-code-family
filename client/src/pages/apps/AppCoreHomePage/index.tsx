import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'umi';
import { OrderAscendingIcon, OrderDescendingIcon } from 'tdesign-icons-react';
import styles from './index.less';
import TabList from './components/TabList';
import DropDown from './components/DropDown/DropDown';
import { WithoRouterPropsInter } from '@/consts/propsTypes';
import { DescribeArticleList } from '@/api/article';
import { ArticleListResposeType } from '@/consts/requestTypes';

export default function AppIndexPage(props: WithoRouterPropsInter) {
  const { location } = props;
  const [routerState, setRouterState] = useState(0);
  const [articleData, setArticleData] = useState([]);
  const [articleP, setArticleP] = useState('');
  const [articleC, setArticleC] = useState('');

  useEffect(() => {
    const getArticle = async () => {
      console.log(articleP);
      const FilterCondition = [];
      if (articleP) {
        FilterCondition.push({
          Name: 'tag_parent',
          Values: [articleP],
        });
      }
      if (articleC) {
        FilterCondition.push({
          Name: 'tag_children',
          Values: [articleC],
        });
      }
      const result = await DescribeArticleList({
        Filter: [...FilterCondition],
      });
      setArticleData(result.Data);
      // console.log('111111', result.Data);
    };
    getArticle();
  }, [articleP, articleC]);
  if (location.pathname === '/index' || location.pathname === '/index/') {
    return <Redirect to='/index/recommend' />;
  }

  const routerList = [
    { id: 0, path: '/home', content: '推荐' },
    { id: 1, path: '/home/topsearch', content: '热榜' },
    { id: 2, path: '/home/nowplaying', content: '最新' },
  ];

  useEffect(() => {
    const tab = routerList.find(item => location.pathname === item.path);
    setRouterState(tab?.id);
  }, []);
  const handlechange = content => {
    if (content === '综合') {
      setArticleP(' ');
    } else {
      setArticleP(content);
    }
  };
  const handlechangeC = content => {
    setArticleC(content);
  };
  // console.log(articleP);
  return (
    <>
      <div className={styles.tabbar}>
        <TabList getArticleP={handlechange} getArticleC={handlechangeC} />
        <div className={styles.list}>
          <div className={styles.list_tab}>
            <ul>
              {routerList.map((item, index) => {
                return (
                  <li key={item.id} style={{ display: 'inline-block' }}>
                    <Link
                      onClick={() => setRouterState(item.id)}
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
                  </li>
                );
              })}
              <li>{routerState === 2 ? <DropDown /> : ''}</li>
            </ul>
          </div>
          <div className={styles.list_context}>
            {React.Children.map(props.children, child => {
              return React.cloneElement(child, {
                data: articleData,
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
}
