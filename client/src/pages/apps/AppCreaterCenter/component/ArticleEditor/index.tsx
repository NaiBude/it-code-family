import React, { useEffect, useState } from 'react';
import { Button, Dialog, Input, message, Select, InputValue } from 'tdesign-react';
import { FullscreenExitIcon, FullscreenIcon } from 'tdesign-icons-react';
import Other from '@assets/other.svg';
import OtherHover from '@assets/other_hover.svg';
import Markdown from 'markdown-it';
import styles from './index.less';
import MarkdownEditor from '@/components/MarkdownEditor';
import { AddDraftInfoData, SelectTagParent, SelectTagChild, AddAuditInfoData } from '@/api/article';
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
type OptionType = { label: string; value: number };

export default function ArticleEditor(props: any) {
  const [hoverStatus, setHoverStatus] = useState(false);
  const [scrnStatus, setScrnStatus] = useState(false);
  const [editorValue, setEditorValue] = useState('');
  const [editorHtml, setEditorHtml] = useState('');
  const [visible, setVisible] = useState(false);
  const [titleText, setTitleText] = useState<InputValue>('');
  const [signText, setSignText] = useState<InputValue>('');
  const [parentTag, setParentTag] = useState(0);
  const [subTag, setSubTag] = useState([]);
  const [parentTagList, setParentTagList] = useState<OptionType[]>([]);
  const [childrenTagList, setChildrenTagList] = useState<OptionType[]>([]);
  const Scrn = scrnStatus ? FullscreenExitIcon : FullscreenIcon;

  useEffect(() => {
    const parentTagAction = async () => {
      const result = await SelectTagParent();
      if (result.Code === 0) {
        setParentTagList(result.Data.map(item => ({ label: item.content, value: item.id })));
      } else {
        message.error({ content: result.Message });
      }
    };
    parentTagAction();
  }, []);

  useEffect(() => {
    if (parentTag !== 0) {
      setSubTag([]);
      const getChildrenTagList = async () => {
        const result = await SelectTagChild({ belong: parentTag });
        if (result.Code === 0) {
          setChildrenTagList(result.Data.map(item => ({ label: item.content, value: item.id })));
        } else {
          message.error({ content: result.Message });
        }
      };
      getChildrenTagList();
    }
  }, [parentTag]);

  const saveDraftAction = async () => {
    if (editorValue.length === 0) {
      message.warning({ content: '请先输入内容在保存草稿' });
    } else if (titleText === '' || signText === '' || parentTag === 0 || subTag.length === 0) {
      message.warning('保存草稿前请完成文章信息编辑');
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
        tag_children: subTag.map(item => childrenTagList.find(el => el.value === item).label),
        tag_parent: parentTagList.find(item => item.value === parentTag).label,
        title: titleText as string,
        sign: signText as string,
        word: editorValue.length,
      });
      if (result.Code === 0) {
        message.success({ content: '保存草稿成功' });
      } else {
        message.error({ content: '保存草稿失败，联系客服' });
      }
    }
  };

  const saveArticeInfo = async () => {
    if (editorValue.length === 0) {
      message.warning({ content: '请先输入内容再发布文章' });
    } else if (titleText === '' || signText === '' || parentTag === 0 || subTag.length === 0) {
      message.warning('发布文章前请完成文章信息编辑');
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

      const result = await AddAuditInfoData({
        content: [...list],
        username: props.userInfo.username,
        tag_children: subTag.map(item => childrenTagList.find(el => el.value === item).label),
        tag_parent: parentTagList.find(item => item.value === parentTag).label,
        title: titleText as string,
        sign: signText as string,
        word: editorValue.length,
      });
      if (result.Code === 0) {
        message.success({ content: '发布成功，请等待审核' });
      } else {
        message.error({ content: '发布失败，请联系客服' });
      }
    }
  };

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
          <Button onClick={saveArticeInfo}>发布</Button>
          <Button onClick={saveDraftAction}>保存草稿</Button>
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
          onImageUpload={file => {
            return new Promise((resolve, reject) => {
              resolve(
                'https://itfamilycode-1308254816.cos.ap-guangzhou.myqcloud.com/avtar_test/user123.png?q-sign-algorithm=sha1&q-ak=AKID3vXsynLcePcYEenfGbfSyECtJTN0NTJs&q-sign-time=1658074772;1658074832&q-key-time=1658074772;1658074832&q-header-list=host&q-url-param-list=&q-signature=c03816688b895625a84472b5fe8244ec4c528653',
              );
            });
          }}
          className={styles.editor_box}
          markdownClass={styles.editor_opera}
          onChange={({ html, text }, e) => {
            setEditorValue(text);
            setEditorHtml(html);
          }}
          syncScrollMode={['leftFollowRight', 'rightFollowLeft']}
          renderHTML={(text: string) => mdParser.render(text)}
          placeholder={'开始创作吧...'}
          view={{ html: true, md: true, menu: true }}
          canView={{
            fullScreen: false,
            menu: true,
            html: true,
            md: true,
            both: true,
            hideMenu: true,
          }}
          // renderHTML={editorHtml}
        />
      </div>
      <Dialog
        className={styles.artcle_editor}
        header='选择文章分类'
        onConfirm={() => {
          setVisible(false);
        }}
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
              if (value !== parentTag) {
                setParentTag(value as number);
              }
            }}
            style={{ width: '100%' }}
            clearable
            options={parentTagList}
          ></Select>
          <p>文章技术栈（请先选择文章分类，最多三项）</p>
          <Select
            value={subTag}
            onChange={v => {
              if ((v as string[]).length > 3) {
                message.warning('技术栈最多选择三项哦！');
              } else {
                setSubTag(v as string[]);
              }
            }}
            filterable
            multiple
            options={childrenTagList}
          />
        </div>
      </Dialog>
    </div>
  );
}
