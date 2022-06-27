import { connect } from 'umi';
import React, { useEffect } from 'react';
import styles from './index.less';
import Header from '@/layouts/Header';
import 'tdesign-react/es/style/index.css';
import Button from '@/components/SideBar/Button';
import { DescribeArticleList } from '@/api/article';

function IndexPage(props) {
  const { userInfo, dispatch } = props;

  const getdata = async () => {
    const result = await DescribeArticleList({
      Filter: [
        { Name: 'tag-parent', Values: ['前端'] },
        { Name: 'tag-children', Values: ['webpack'] },
        { Name: 'show_count', Values: ['12'] },
      ],
      Sort: [
        {
          Name: 'show_count',
          Value: 'Desc',
        },
        {
          Name: 'create_time',
          Value: 'Desc',
        },
      ],
    });
    console.log('result:::', result);
    result.Data;
  };

  useEffect(() => {
    dispatch({ type: 'userInfo/verifyTokenUser' });
    getdata();
  }, []);

  // useEffect(() => {
  //   let count = 1;
  //   console.log('feafwaf');

  //   const ws = new WebSocket('ws://localhost:3000');
  //   console.log(ws);

  //   ws.onopen = function (evt) {
  //     console.log('connect open');
  //     console.log(evt);
  //   };
  //   ws.onmessage = function (evt) {
  //     console.log(`后端发来的数据:${evt.data}`);
  //     if (count++ === 10) {
  //       ws.close();
  //     }
  //   };
  //   ws.onclose = function (evt) {
  //     console.log(evt);
  //     console.log('connection close');
  //   };
  //   ws.onerror = function (evt) {
  //     console.log(evt);
  //     console.log('error!!');
  //   };
  // }, []);

  return (
    <div className={styles.center_content}>
      <Header userInfo={userInfo}></Header>
      <div>{props.children}</div>
    </div>
  );
}
export default connect(userInfo => {
  return userInfo.userInfo;
})(IndexPage);
