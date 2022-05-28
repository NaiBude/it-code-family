import React from 'react';
import { Input, Button } from 'tdesign-react';
import { LockOnIcon } from 'tdesign-icons-react';
import './LoginEnter.less';

export default () => {
  return (
    <div className='login_content'>
      <div className='login_box'>
        <span>账号:</span>
        <Input className='from_input_login' />
        <span>密码:</span>
        <Input
          className='from_input_login'
          prefixIcon={<LockOnIcon />}
          placeholder='请输入'
          // value={}
          type='password'
          onChange={value => {
            // onChange(value);
          }}
        />
        <Button className='confim_button_login' theme='default' variant='outline'>
          确认登陆
        </Button>
      </div>
    </div>
  );
};
