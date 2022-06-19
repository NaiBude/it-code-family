import React, { useEffect, useState } from 'react';
import './index.less';
import { useHistory, connect } from 'umi';
import { Popup } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import cookie from 'react-cookies';
import OperaCardList from './OperaCardList';
import DefaultAvtar from '../../../assets/defaultAvtar.png';
import { UserInfoInter } from '@/consts/infoType';
import { AcquireUserAvtar } from '@/api/UserInfo';
import { AvtarCardListType } from '@/consts/variableType';

type propType = {
  userInfo: UserInfoInter;
  className: string;
  dispatch: any;
};

const SpalIconFont = props => {
  return <IconFont size={16} name={props.name} />;
};

function AvtarHead(props: propType) {
  const [userInfo, setUserInfo] = useState<UserInfoInter>({
    ...JSON.parse(localStorage.getItem('userInfo')),
  });
  const [firstLoad, setFirstLoad] = useState(true);
  const [avtar, setAvtar] = useState('');

  const history = useHistory();
  const getAvtar = async () => {
    const result = await AcquireUserAvtar({ photokey: userInfo.photokey });
    if (result.Code === 0 && result.Data?.Url) {
      setAvtar(result.Data.Url);
    }
  };
  const cardList: AvtarCardListType[] = [
    {
      key: 1,
      children: [
        {
          content: '个人中心',
          onClick: () => {
            console.log('');
          },
          icon: <SpalIconFont name='user' />,
        },
        {
          content: '我赞过的',
          onClick: () => {
            console.log('');
          },
          icon: <SpalIconFont name='heart' />,
        },
        {
          content: '我的收藏',
          onClick: () => {
            console.log('');
          },
          icon: <SpalIconFont name='star' />,
        },
        {
          content: '阅读记录',
          onClick: () => {
            console.log('');
          },
          icon: <SpalIconFont name='time' />,
        },
      ],
    },
    {
      key: 2,
      children: [
        {
          content: '签到领取积分',
          onClick: () => {
            // cookie
          },
          icon: <SpalIconFont name='edit-1' />,
        },
      ],
    },
    {
      key: 3,
      children: [
        {
          content: '偏好设置',
          onClick: () => {
            console.log('');
          },
          icon: <SpalIconFont name='setting' />,
        },
      ],
    },
    {
      key: 4,
      children: [
        {
          content: '退出登陆',
          onClick: () => {
            cookie.remove('ACCESSTOKEN');
            localStorage.removeItem('userInfo');
            props.dispatch({ type: 'userInfo/setUserInfo', payload: {} });
          },
          icon: <SpalIconFont name='logout' />,
        },
      ],
    },
  ];

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      setUserInfo(props.userInfo);
    }
  }, [props.userInfo]);

  useEffect(() => {
    if (!firstLoad) {
      getAvtar();
    }
  }, [userInfo]);

  return (
    <div className={`avtar_login ${props.className}`}>
      {userInfo.username && (
        <Popup
          attach='body'
          content={
            <>
              <div className='popup_header_username'>{props.userInfo.nickname}</div>
              <OperaCardList cardList={cardList} />
            </>
          }
          overlayClassName={'popup_header_avtar'}
          placement='bottom'
          trigger='hover'
        >
          <div className='header_avtar'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={avtar ? avtar : DefaultAvtar}
              alt=''
            />
          </div>
        </Popup>
      )}
      {!userInfo.username && (
        <div className='none_login'>
          <a
            onClick={() => {
              history.push('/login');
            }}
          >
            登陆
          </a>
          /<a>注册</a>
        </div>
      )}
    </div>
  );
}
export default React.memo(
  connect(() => {
    return {};
  })(AvtarHead),
);
