import React from 'react';
import './index.less';

export default props => {
  return (
    <div {...props} className={`avtar_login ${props.className}`}>
      登陆
    </div>
  );
};
