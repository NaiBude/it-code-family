import React, { useState, Fragment } from 'react';
import './index.less';
import { Menu } from 'tdesign-react';

const { MenuItem } = Menu;

export default function SideBar() {
  const [active, setActive] = useState('0');
  return (
    // <div className='sidebar'>
    //   <div className='sidebar-div'>
    //     <ul className='sidebar-ul'>
    //       <li>综合</li>
    //       <li>前端</li>
    //       <li>后端</li>
    //       <li>Android</li>
    //       <li>IOS</li>
    //       <li>人工智能</li>
    //       <li>开发工具</li>
    //       <li>代码人生</li>
    //       <li>阅读</li>
    //     </ul>
    //   </div>
    // </div>
    <Fragment>
      <Menu value={active} style={{ marginRight: 20 }}>
        <MenuItem value={'0'}>
          <span>综合</span>
        </MenuItem>
        <MenuItem value={'1'}>
          <span>前端</span>
        </MenuItem>
        <MenuItem value={'2'}>
          <span>后端</span>
        </MenuItem>
        <MenuItem value={'3'}>
          <span>Android</span>
        </MenuItem>
        <MenuItem value={'4'}>
          <span>IOS</span>
        </MenuItem>
        <MenuItem value={'5'}>
          <span>人工智能</span>
        </MenuItem>
        <MenuItem value={'6'}>
          <span>开发工具</span>
        </MenuItem>
        <MenuItem value={'7'}>
          <span>代码人生</span>
        </MenuItem>
        <MenuItem value={'8'}>
          <span>阅读</span>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
