import React from 'react';
import { Button } from 'tdesign-react';
import { FullscreenIcon } from 'tdesign-icons-react';
import styles from './index.less';
import Other from '../../../../../../assets/other.svg';

export default function ArticleEditor() {
  return (
    <div className={styles.article_editor}>
      <div className={styles.art_header}>
        <div>
          <Button>完成</Button>
          <Button>保存草稿</Button>
          <div>
            <img src={Other} alt='' />
          </div>
        </div>
        <div>
          <FullscreenIcon />
        </div>
      </div>
      <div className={styles.art_content}></div>
    </div>
  );
}
