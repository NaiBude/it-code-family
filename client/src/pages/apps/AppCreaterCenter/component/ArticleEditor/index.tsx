import React, { useState } from 'react';
import { Button } from 'tdesign-react';
import { FullscreenExitIcon, FullscreenIcon } from 'tdesign-icons-react';
import Other from '@assets/other.svg';
import OtherHover from '@assets/other_hover.svg';
import styles from './index.less';
import MarkdownEditor from '@/components/MarkdownEditor';

export default function ArticleEditor() {
  const [hoverStatus, setHoverStatus] = useState(false);
  const [scrnStatus, setScrnStatus] = useState(false);
  const Scrn = scrnStatus ? FullscreenExitIcon : FullscreenIcon;
  return (
    <div
      style={
        scrnStatus
          ? { width: '100%', height: '100%', zIndex: 100, position: 'fixed', top: 0, left: 0 }
          : {}
      }
      className={styles.article_editor}
    >
      <div className={styles.art_header}>
        <div className={styles.opera_btn}>
          <Button>完成</Button>
          <Button>保存草稿</Button>
          <div>
            <img
              onMouseEnter={() => {
                setHoverStatus(true);
              }}
              onMouseLeave={() => {
                setHoverStatus(false);
              }}
              src={hoverStatus ? OtherHover : Other}
              alt=''
            />
          </div>
        </div>
        <div className={styles.scrn}>
          <Scrn
            size={22}
            onClick={() => {
              setScrnStatus(!scrnStatus);
            }}
          />
        </div>
      </div>
      <div className={styles.art_content}>
        <MarkdownEditor />
      </div>
    </div>
  );
}
