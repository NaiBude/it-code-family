import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'tdesign-react';
import { LockOnIcon } from 'tdesign-icons-react';
import './LoginEnter.less';
import { useHistory, connect } from 'umi';
import { VerifyUserInfo } from '@/api/userInfo';
import { checkRegular } from '@/utils/regular';

const LoginEnter = ({ dispatch, ...res }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginVerify = async () => {
    const result = await VerifyUserInfo({ username, password });
    if (result.Code === 0) {
      dispatch({ type: 'userInfo/setUserInfo', payload: result.Data });
      message.success(result.Message);
      localStorage.setItem('userInfo', JSON.stringify(result.Data));
      history.push('/home');
    } else if (result.Code === -1) {
      message.error(result.Message);
    } else {
      message.error('服务器崩溃！');
    }
  };

  const login = () => {
    if (username === '' || password === '') {
      message.error('用户名和密码不能为空！');
    } else if (!checkRegular.check(username, 'username')) {
      message.error('用户名不规范，请输入字符串加数字组且长度为4-16位用户名');
    } else if (!checkRegular.check(password, 'password')) {
      message.error('密码不规范，请输入字符串加数字组且长度为4-16位密码');
    }
    loginVerify();
  };

  return (
    <div className='login_content'>
      <div className='login_box'>
        <span>账号:</span>
        <Input
          className='from_input_login'
          onChange={value => {
            setUsername(value as string);
          }}
          placeholder='请输入账号'
        />
        <span>密码:</span>
        <Input
          className='from_input_login'
          prefixIcon={<LockOnIcon />}
          placeholder='请输入密码'
          // value={}
          type='password'
          onChange={value => {
            setPassword(value as string);
          }}
        />
        <div className='login_operation'>
          <div className='login_question'>
            <span>
              没有账号?去<a>注册账号</a>
            </span>
            <span>
              <a>忘记密码</a>
            </span>
          </div>

          <Button onClick={login} className='confim_button_login' theme='default' variant='outline'>
            确认登陆
          </Button>
        </div>
      </div>
    </div>
  );
};
export default connect(({ userInfo, ...res }) => {
  console.log('res', res);
  console.log('userInfo', userInfo);

  return userInfo;
})(LoginEnter);
