import React from 'react';
// import Input from 'tdesign-react/es/input';
import styles from './style.less';
import MarkdownRender from '@/components/MarkdownRender';

export default function AppStudyPage() {
  return (
    <div className={styles.box}>
      <MarkdownRender />
    </div>
  );
}
