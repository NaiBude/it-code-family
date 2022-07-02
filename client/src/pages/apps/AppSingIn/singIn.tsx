import React, { useState } from 'react';
import { Form, Input, Button, MessagePlugin, message, Select } from 'tdesign-react';
import { Link, useHistory } from 'umi';
import styles from './singIn.less';
import LogoPhoto from '../../../../assets/logo.png';
import { AddUserAvtar } from '@/api/userInfo';

const { FormItem } = Form;
export default function SingIn(props) {
  const form = React.createRef();
  const [inputUserValue, setInputUserValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputJobValue, setInputJobValue] = useState('');
  const [nickNameValue, setNickNameValue] = useState('');
  const history = useHistory();
  const options = [
    { label: '后端开发', value: '0' },
    { label: 'Java', value: '1' },
    { label: '测试工程师', value: '2' },
    { label: 'web前端', value: '3' },
    { label: '运维工程师', value: '4' },
    { label: '项目管理', value: '5' },
    { label: '算法工程师', value: '6' },
    { label: '数据分析师', value: '7' },
    { label: '网络工程师', value: '8' },
  ];

  const ChangeUserHandler = evt => {
    setInputUserValue(evt);
  };
  const ChangePasswordHandler = evt => {
    setInputPasswordValue(evt);
  };
  const ChangeNicknameHandler = evt => {
    setNickNameValue(evt);
  };
  const ChangeJobHandler = evt => {
    setInputJobValue(options[evt].label);
  };

  const onSubmit = () => {
    const regest = async () => {
      const result = await AddUserAvtar({
        nickname: nickNameValue,
        username: inputUserValue,
        password: inputPasswordValue,
        job: inputJobValue,
      });
      if (result.Code === 0) {
        if (nickNameValue !== '' && inputUserValue !== '' && inputPasswordValue !== '') {
          message.success({ content: result.Message });
          history.push('/login');
        } else {
          message.error({ content: result.Message });
        }
      } else {
        message.error({ content: result.Message });
      }
    };
    regest();
  };
  const rules = {
    nickname: [
      { required: true },
      {
        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{2,10}$/,
        message: '昵称可以包括中文、英文、数字包括下划线',
      },
    ],
    account: [
      { required: true },
      {
        pattern: /^[a-zA-Z0-9_-]{4,16}$/,
        message: '用户名为4到16位字母数字_-组成',
      },
    ],
    password: [
      { required: true },
      {
        pattern: /^[.@a-zA-Z0-9_-]{4,16}$/,
        message: '密码为4到16位字母数字组成_-.@',
      },
    ],
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
              已有账号？<Link to='login'>登录</Link>
            </span>
          </p>
        </div>
        <Form ref={form} statusIcon onSubmit={onSubmit} labelWidth={80} rules={rules}>
          <FormItem label={`昵称`} name='nickname'>
            <Input onChange={ChangeNicknameHandler} />
          </FormItem>
          <FormItem label={`用户名`} name='account'>
            <Input onChange={ChangeUserHandler} />
          </FormItem>
          <FormItem label={`密码`} name='password'>
            <Input onChange={ChangePasswordHandler} type='password' />
          </FormItem>
          <FormItem label='职位' name='job'>
            {
              <Select onChange={ChangeJobHandler}>
                {options.map((item, index) => (
                  <Select.Option value={item.value} label={item.label} key={item.value} />
                ))}
              </Select>
            }
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
