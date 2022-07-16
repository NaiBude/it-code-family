import React, { useEffect, useState } from 'react';
import { Button, Dialog, Input, message, Select, InputValue } from 'tdesign-react';
import { FullscreenExitIcon, FullscreenIcon } from 'tdesign-icons-react';
import Other from '@assets/other.svg';
import OtherHover from '@assets/other_hover.svg';
import Markdown from 'markdown-it';
import styles from './index.less';
import MarkdownEditor from '@/components/MarkdownEditor';
import { AddDraftInfoData } from '@/api/article';
import UserInfo from '@/models/userInfo';

const { Option } = Select;
const mdParser = new Markdown();
const options1 = [
  { label: '架构云', value: '1' },
  { label: '大数据', value: '2' },
  { label: '区块链', value: '3' },
  { label: '物联网', value: '4', disabled: true },
  { label: '人工智能', value: '5' },
  {
    label: '计算场景',
    value: '6',
  },
];

const options2 = [
  { label: '云服务器', value: '1' },
  { label: '云数据库', value: '2' },
  { label: '域名注册', value: '3' },
  { label: '网站备案', value: '4' },
  { label: '对象存储', value: '5' },
  { label: '低代码平台', value: '6' },
];

export default function ArticleEditor(props: any) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const [scrnStatus, setScrnStatus] = useState(false);
  const [editorValue, setEditorValue] = useState('');
  const [editorHtml, setEditorHtml] = useState('');
  const [visible, setVisible] = useState(false);
  const [titleText, setTitleText] = useState<InputValue>('');
  const [signText, setSignText] = useState<InputValue>('');
  const [parentTag, setParentTag] = useState('');
  const [subTag, setSubTag] = useState([]);
  const Scrn = scrnStatus ? FullscreenExitIcon : FullscreenIcon;
  return (
    <div
      style={
        scrnStatus
          ? { width: '100vw', height: '100vh', zIndex: 100, position: 'fixed', top: 0, left: 0 }
          : {}
      }
      className={styles.article_editor}
    >
      <div className={styles.art_header}>
        <div className={styles.opera_btn}>
          <Button
            onClick={async () => {
              if (titleText === '||signText === ' || parentTag === '' || subTag.length === 0) {
                message.warning('完成创作前请完成文章信息编辑');
              } else {
                const list = [];
                let record = 0;
                while (record < editorValue.length - 1) {
                  if (record > editorValue.length - 5001) {
                    list.push(editorValue.slice(record, editorValue.length - 1));
                  } else {
                    list.push(editorValue.slice(record, record + 5000));
                  }
                  record += 5000;
                }
                console.log('list', list, editorValue);

                const result = await AddDraftInfoData({
                  content: [...list],
                  username: props.userInfo.username,
                  tag_children: subTag,
                  tag_parent: parentTag,
                  title: titleText as string,
                  sign: signText as string,
                });
                console.log(result, result);
              }
            }}
          >
            完成
          </Button>
          <Button
            onClick={() => {
              if (editorValue.length === 0) {
                message.warning({ content: '请先输入内容在保存草稿' });
              }
            }}
          >
            保存草稿
          </Button>
          <Button
            onClick={() => {
              setVisible(true);
            }}
          >
            编辑文章信息
          </Button>
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
        <MarkdownEditor
          value={editorValue}
          className={styles.editor_box}
          htmlClass={styles.editor_html}
          markdownClass={styles.editor_opera}
          onChange={({ html, text }, e) => {
            setEditorValue(text);
            setEditorHtml(html);
          }}
          renderHTML={(text: string) => mdParser.render(text)}
          placeholder={'开始创作吧...'}
          view={{ html: false, md: true, menu: false }}
          canView={{
            fullScreen: false,
            menu: false,
            html: false,
            both: true,
            md: true,
            hideMenu: true,
          }}
          // renderHTML={editorHtml}
        />
      </div>
      <Dialog
        className={styles.artcle_editor}
        header='选择文章分类'
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div className={styles.tag_choose}>
          <p>文章标题</p>
          <Input type='text' value={titleText} onChange={value => setTitleText(value)} />
          <p>文章签名</p>
          <Input type='text' value={signText} onChange={value => setSignText(value)} />
          <p>文章分类</p>
          <Select
            value={parentTag}
            onChange={value => {
              setParentTag(value as string);
            }}
            style={{ width: '100%' }}
            clearable
            options={[
              { label: '架构云', value: '1' },
              { label: '大数据', value: '2' },
              { label: '区块链', value: '3' },
              { label: '物联网', value: '4', disabled: true },
              { label: '人工智能', value: '5' },
            ]}
          ></Select>
          <p>文章技术栈（请先选择文章分类）</p>
          <Select
            value={subTag}
            onChange={v => setSubTag(v as string[])}
            filterable
            multiple
            options={options1}
          />
        </div>
      </Dialog>
    </div>
  );
}
