import React from 'react';
// import Input from 'tdesign-react/es/input';
import styles from './style.less';
import MarkdownEditor from '@/components/MarkdownEditor';

export default function AppStudyPage() {
  return (
    <div className={styles.box}>
      <MarkdownEditor />
    </div>
  );
}
