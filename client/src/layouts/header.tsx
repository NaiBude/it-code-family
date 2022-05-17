import React, { Fragment, useState } from 'react';
import { Menu, Input, Button } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { Link } from 'umi';
import style from './header.less';
import SideBar from '@/pages/apps/AppSideBarPage';
import Footer from '@/pages/apps/AppFooterPage';

const { HeadMenu, SubMenu } = Menu;

export default function Header(props: any) {
  const [active, setActive] = useState('1');
  return (
    <div>
      <Fragment>
        <HeadMenu
          value={active}
          onChange={v => setActive(`${v}`)}
          logo={
            <img
              src='https://www.tencent.com/img/index/menu_logo_hover.png'
              width='136'
              alt='logo'
            />
          }
          style={{ marginBottom: 20 }}
        >
          <Link to='/index'>
            <SubMenu value='sub-0' title='首页'></SubMenu>
          </Link>
          <Link to='/ask'>
            <SubMenu value='sub-1' title='问答'></SubMenu>
          </Link>
          <Link to='/study'>
            <SubMenu value='sub-2' title='学习'></SubMenu>
          </Link>
          <Link to='/news'>
            <SubMenu value='sub-3' title='资讯'></SubMenu>
          </Link>
          <Link to='/bbs'>
            <SubMenu value='sub-4' title='社区'></SubMenu>
          </Link>
          <Link to='/app'>
            <SubMenu value='sub-5' title='App'></SubMenu>
          </Link>
          <Link to='/plug'>
            <SubMenu value='sub-6' title='插件'></SubMenu>
          </Link>
          <Input
            align='left'
            clearable
            size='large'
            status='success'
            type='search'
            style={{ maxWidth: '799px' }}
          />
          <Button
            shape='rectangle'
            size='large'
            type='button'
            variant='base'
            theme='success'
            icon={<IconFont name='search' />}
          />
          <SubMenu value='sub-7' title='登陆'></SubMenu>
        </HeadMenu>
      </Fragment>
      <SideBar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
