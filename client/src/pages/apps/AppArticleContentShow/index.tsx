import React from 'react';
// import styles from './index.less';
import MarkdownEditor from '@/components/MarkdownEditor';

export default () => {
  console.log('a');

  return (
    <div>
      <span>article details</span>
      <MarkdownEditor></MarkdownEditor>
    </div>
  );
};
