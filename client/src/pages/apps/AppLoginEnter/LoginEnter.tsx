import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'tdesign-react';
import { LockOnIcon, UserIcon } from 'tdesign-icons-react';
import './LoginEnter.less';
import { useHistory, connect, Link } from 'umi';
import DefaultAvtar from '../../../../assets/defaultAvtar.png';
import { VerifyUserInfo } from '@/api/userInfo';
import { checkRegular } from '@/utils/regular';

const LoginEnter = ({ dispatch, ...res }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

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
        <div className='login_header_content'>
          <h2>IT码家用户登录</h2>
          <img src={DefaultAvtar} alt='' />
        </div>
        <div className='login_form'>
          <Input
            className={`${usernameErr ? 'from_input_login_err ' : ''}from_input_login`}
            prefixIcon={<UserIcon />}
            onChange={value => {
              if (usernameErr) {
                if (!value || checkRegular.check(value as string, 'username')) {
                  setUsernameErr(false);
                }
              }
              setUsername(value as string);
            }}
            onBlur={() => {
              if (username && !checkRegular.check(username, 'username')) {
                setUsernameErr(true);
              }
            }}
            placeholder='账号'
          />
          <p>
            <span style={{ display: `${usernameErr ? 'inline' : 'none'}` }}>
              您输入的账号格式不符合规范
            </span>
          </p>
          <Input
            className={`${passwordErr ? 'from_input_login_err ' : ''}from_input_login`}
            prefixIcon={<LockOnIcon />}
            placeholder='密码'
            // value={}
            type='password'
            onChange={value => {
              if (passwordErr) {
                if (!value || checkRegular.check(value as string, 'password')) {
                  setPasswordErr(false);
                }
              }
              setPassword(value as string);
            }}
            onBlur={() => {
              if (password && !checkRegular.check(password, 'password')) {
                setPasswordErr(true);
              }
            }}
          />
          <p>
            <span style={{ display: `${passwordErr ? 'inline' : 'none'}` }}>
              您输入的密码格式不符合规范
            </span>
          </p>
          <div className='login_operation'>
            <Button onClick={login} className='confim_button_login' theme='default' variant='base'>
              确认登陆
            </Button>{' '}
            <div className='login_forget_pass'>
              <a>忘记密码</a>
            </div>
            <div className='login_question'>
              <span>
                没有账号?去<Link to='/singin'>注册账号</Link>
              </span>
            </div>
          </div>
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
