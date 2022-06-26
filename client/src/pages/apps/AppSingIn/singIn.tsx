import React, { useRef, useEffect } from 'react';
import { Form, Input, Button, MessagePlugin, Upload } from 'tdesign-react';
import styles from './singIn.less';
import LogoPhoto from '../../../../assets/logo.png';

const { FormItem } = Form;

const validateMessage = {
  account: [
    {
      type: 'error',
      message: '自定义用户名校验信息提示',
    },
  ],
  description: [
    {
      type: 'warning',
      message: '自定义个人简介校验信息提示',
    },
  ],
};

const rules: any = {
  account: [{ required: true }, { min: 2 }, { max: 10, type: 'warning' }],
  description: [
    { validator: val => val.length < 10, message: '不能超过 20 个字，中文长度等于英文长度' },
  ],
  password: [{ required: true }, { len: 8, message: '请输入 8 位密码' }],
};

export default function BaseForm() {
  const formRef = useRef();

  const onSubmit = ({ validateResult, firstError }) => {
    if (validateResult === true) {
      MessagePlugin.success('提交成功');
    } else {
      console.log('Errors: ', validateResult);
      MessagePlugin.warning(firstError);
    }
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
        <Form rules={rules} ref={formRef} onSubmit={onSubmit} scrollToFirstError='smooth'>
          <FormItem label='用户名' help='这是用户名字段帮助说明' name='account'>
            <Input placeholder='请设置用户名' />
          </FormItem>
          <FormItem label='密码' name='password'>
            <Input type='password' placeholder='请设置密码' />
          </FormItem>
          <FormItem label='确认密码' name='password'>
            <Input type='password' placeholder='请再次输入密码' />
          </FormItem>
          <FormItem label='个人简介' help='一句话介绍自己' name='description'>
            <Input placeholder='简单介绍' />
          </FormItem>
          <FormItem label='头像' name='avatar'>
            <Upload action='' theme='image' tips='请选择单张图片文件上传' accept='image/*'></Upload>
          </FormItem>
          <FormItem
            style={{
              marginLeft: 42,
            }}
          >
            <Button
              theme='primary'
              type='submit'
              style={{
                marginRight: 10,
                borderRadius: 25,
                width: 399,
                height: 50,
                backgroundColor: '#047e1c',
              }}
            >
              提交
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
