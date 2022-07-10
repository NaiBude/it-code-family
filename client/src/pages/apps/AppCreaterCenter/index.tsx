import React, { useEffect, useState } from 'react';
import { Icon, NotificationFilledIcon } from 'tdesign-icons-react';
import { connect } from 'umi';
import styles from './index.less';
import ArticleEditor from './component/ArticleEditor';
import MyArticles from './component/MyArticles';
import ArticleAudit from './component/ArticleAudit';
import itmjLogo from '../../../../assets/itmj_Logo.svg';
import Avtar from '@/components/Avtar';
import CardList from '@/components/CradList/CardList';
import { UserInfoInter } from '@/consts/infoType';
import { DescribeArticleList } from '@/api/article';

const tabList = [
  { id: 1, content: '我的文章', component: MyArticles },
  { id: 2, content: '文章创作', component: ArticleEditor },
  { id: 3, content: '文章审核', component: ArticleAudit },
  { id: 4, content: '阅读文章', component: ArticleAudit },
];

const infoList = [
  { id: 1, content: '关注', key: 'concern' },
  { id: 2, content: '主页访问', key: 'visit' },
  { id: 3, content: '粉丝', key: 'fans' },
  { id: 4, content: '阅读文章', key: 'read' },
];

const artDataList = [
  { id: 1, content: '文章总点赞数', key: '' },
  { id: 1, content: '文章总收藏数', key: '' },
  { id: 1, content: '文章评论总数', key: '' },
  { id: 1, content: '文章被阅读总数', key: '' },
];

const CreaterCenter = props => {
  const [tabStatus, setTabStatus] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfoInter>({
    ...JSON.parse(localStorage.getItem('userInfo')),
  });

  useEffect(() => {
    setUserInfo(props.userInfo);
  }, [props.userInfo]);

  useEffect(() => {
    props.dispatch({ type: 'userInfo/verifyTokenUser' });
  }, []);

  const Component = tabList.find(item => tabStatus === item.id).component;

  return (
    <div className={styles.creater_center}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src={itmjLogo}
            onClick={() => {
              location.href = location.origin;
            }}
          />
          <div>创作空间站</div>
        </div>
        <div>
          <div className={styles.inform}>
            <NotificationFilledIcon size={30} color='#5d5fef' />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.brief}>
          <div className={styles.info}>
            <div>
              <Avtar size={50} img={userInfo?.photo_key ? userInfo.photo_key : ''} />
              <p>{userInfo.nickname}</p>
            </div>
            <div>
              {infoList.map(item => (
                <span key={item.id}>
                  {item.content}:&nbsp;&nbsp;<a>{userInfo[item.key]}</a>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.article_num}>
            <div>
              <span>文章点赞数</span>
              <span>324324</span>
            </div>
            <div>
              <span>文章点赞数</span>
              <span>324324</span>
            </div>
            <div>
              <span>文章点赞数</span>
              <span>324324</span>
            </div>
            <div>
              <span>文章点赞数</span>
              <span>324324</span>
            </div>
          </div>
        </div>
        <div className={styles.opera}>
          <div className={styles.tab}>
            <h3>控制台</h3>
            <div className={styles.tab_list}>
              <ul>
                {tabList.map(item => (
                  <li
                    {...(tabStatus === item.id ? { className: styles.active } : '')}
                    key={item.id}
                    onClick={() => {
                      setTabStatus(item.id);
                    }}
                  >
                    <a>{item.content}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.profession}>
            {Boolean(userInfo?.username) && <Component userInfo={userInfo} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(({ userInfo }) => {
  return userInfo;
})(CreaterCenter);
