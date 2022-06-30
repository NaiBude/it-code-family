import React, { useState } from 'react';
import { Form, Input, Button, MessagePlugin, message } from 'tdesign-react';
import styles from './singIn.less';
import LogoPhoto from '../../../../assets/logo.png';
import { AddUserAvtar } from '@/api/userInfo';

const { FormItem } = Form;
export default function SingIn(props) {
  const form = React.createRef();
  const [inputUserValue, setInputUserValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputPreValue, setInputPreValue] = useState('');
  const ChangeUserHandler = evt => {
    setInputUserValue(evt);
  };
  const ChangePasswordHandler = evt => {
    setInputPasswordValue(evt);
  };
  const ChangePreHandler = evt => {
    setInputPreValue(evt);
  };
  const onSubmit = ({ validateResult, firstError }) => {
    const regest = async () => {
      const result = await AddUserAvtar({
        username: inputUserValue,
        password: inputPasswordValue,
        job: inputPreValue,
      });
      console.log('result---------:::', result);
      if (result.Code === 0) {
        message.success({ content: result.Message });
      } else {
        message.error({ content: result.Message });
      }
    };

    // if (validateResult === true) {
    //   MessagePlugin.success('注册成功');
    // } else {
    //   console.log('Errors: ', validateResult);
    //   MessagePlugin.warning(firstError);
    // }
    regest();
  };
  return (
    <div className={styles.form}>
      <div className={styles.icon}>
        <img className={styles.icon_img} src={LogoPhoto} alt='itmj' />
      </div>
      <div className={styles.text}>
        <span className={styles.text_span}>用代码</span>
        <p className={styles.text_p}>让世界变得更简单</p>
      </div>
      <div className={styles.d_form}>
        <div className={styles.header_zc}>
          <h3>欢迎注册</h3>
          <p>
            <span>
              已有账号？<a>登录</a>
            </span>
          </p>
        </div>
        <Form ref={form} statusIcon onSubmit={onSubmit} labelWidth={80}>
          <FormItem label={`用户名`} name='account'>
            <Input onChange={ChangeUserHandler} />
          </FormItem>
          <FormItem label={`密码`} name='password'>
            <Input onChange={ChangePasswordHandler} />
          </FormItem>
          <FormItem label={`爱好`} name='description'>
            <Input placeholder='一句话介绍自己' onChange={ChangePreHandler} />
          </FormItem>

          <FormItem>
            <Button
              theme='primary'
              type='submit'
              style={{
                borderRadius: 25,
                height: 50,
                backgroundColor: '#047e1c',
              }}
            >
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
function AddUser() {
  throw new Error('Function not implemented.');
}
