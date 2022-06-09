import React from 'react';
import './index.less';
import { useHistory } from 'umi';

export default props => {
  const history = useHistory();
  history.push('/login');
  return (
    <div {...props} className={`avtar_login ${props.className}`}>
      登陆
    </div>
  );
};
