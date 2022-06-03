import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'tdesign-react';
import { LockOnIcon } from 'tdesign-icons-react';
import './LoginEnter.less';
import request from '@/service/request';

export default () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const rex = /^[A-Za-z0-9_-]{4,16}$/;
    if (userName === '' || password === '') {
      message.error('用户名和密码不能为空！');
    } else if (rex.test(userName) && rex.test(password)) {
      console.log('ok');
    } else {
      message.error('请输入规范的用户名和密码！');
    }
  };

  const getData = async () => {
    console.log('aaa');

    const result = await request({ url: '/api/DescribeUserInfo', method: 'post' });
    console.log('result', result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='login_content'>
      <div className='login_box'>
        <span>账号:</span>
        <Input
          className='from_input_login'
          onChange={value => {
            setUserName(value as string);
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
