import React, { useState } from 'react';
import { Input, Button } from 'tdesign-react';
import styles from './singIn.less';
// import TipsId from './Tips/TipsId';
import Tips from './Tips/TipsUser';

export default function SingIn(props) {
  // User
  const [isUser, setIsUser] = useState(false);
  // ID
  const [IsShowId, setIsShowId] = useState(false);
  // password
  const [IsShow, setIsShow] = useState(false);
  // user
  const handleChangeUser = event => {
    setIsUser(false);
  };
  const handleFocusUser = event => {
    if (event === '') {
      setIsUser(!isUser);
    }
  };
  const handleBlurUser = event => {
    if (event === '') {
      setIsUser(!isUser);
    }
  };
  // ID
  const handleChangeID = event => {
    console.log('isShowId', IsShowId);

    const reg = /^[0-9]{1,17}$/;
    if (reg.test(event)) {
      console.log(reg.test(event));
      setIsShowId(false);
    } else {
      setIsShowId(true);
    }
    if (event === '') {
      setIsShowId(false);
    } else {
      setIsShowId(true);
    }
  };
  const handleFocusID = event => {
    if (event === '') {
      setIsShowId(!IsShowId);
    }
  };
  const handleBlurID = event => {
    // if (event === '') {
    //   setIsShowId(!IsShowId);
    // }
  };
  //password
  const handleChangePassword = event => {
    console.log(event);
  };
  const handleChangeCpassword = event => {
    console.log(event);
  };
  const handleClick = event => {
    console.log(1);
  };

  const handleFocus = event => {
    setIsShow(!IsShow);
  };

  const handleBlur = () => {
    setIsShow(!IsShow);
  };
  return (
    <div>
      <div className={styles.register}>
        <div>欢迎注册IMJ</div>
        <div>
          <span>昵称：</span>
          <Input
            align='left'
            autoWidth={false}
            autofocus={false}
            clearable
            defaultValue=''
            disabled={false}
            readonly={false}
            showClearIconOnEmpty={false}
            maxlength={10} //设置最大长度
            size='medium'
            tips={isUser && '昵称不能为空'}
            type='text'
            status={isUser ? 'error' : 'success'} //状态判定 成功success 失败error 信息不全error
            onChange={handleChangeUser}
            onFocus={handleFocusUser}
            onBlur={handleBlurUser}
          />
        </div>
        <div>
          <span>账号：</span>
          <Input
            align='left'
            autoWidth={false}
            autofocus={false}
            clearable
            defaultValue=''
            disabled={false}
            readonly={false}
            showClearIconOnEmpty={false}
            size='medium'
            type='text'
            tips={IsShowId ? '账号不能为空' : '账号必须为为8-16个数字'}
            status={IsShowId ? 'error' : 'success'} //状态判定 成功success 失败error 信息不全error
            onChange={handleChangeID}
            onFocus={handleFocusID}
            onBlur={handleBlurID}
          />
        </div>
        <div>
          <span>密码：</span>
          <Input
            align='left'
            autoWidth={false}
            autofocus={false}
            clearable
            defaultValue=''
            disabled={false}
            readonly={false}
            showClearIconOnEmpty={false}
            size='medium'
            tips={IsShow && <Tips />}
            type='password'
            status='success'
            onChange={handleChangePassword}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <span>确认密码：</span>
          <Input
            align='left'
            autoWidth={false}
            autofocus={false}
            clearable
            defaultValue=''
            disabled={false}
            readonly={false}
            showClearIconOnEmpty={false}
            size='medium'
            type='password'
            status='success'
            onChange={handleChangeCpassword}
          />
        </div>
        <div className={styles.button}>
          <Button
            block
            disabled={false}
            ghost={false}
            loading={false}
            shape='rectangle'
            size='large'
            type='submit'
            variant='base'
            theme='success'
            onClick={handleClick}
          >
            立即注册
          </Button>
        </div>
      </div>
    </div>
  );
}
