import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-it';
import hljs from 'highlight.js';
import { DescribeArtcleContent } from '@/api/article';
import { ArtcleContentInter } from '@/consts/requestTypes';
import './index.less';

const md = new Markdown({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
        console.log('a');
      }
    }

    return '';
  },
});

export default props => {
  const [data, setData] = useState<ArtcleContentInter>();
  const [text, setText] = useState('');

  const fn = async () => {
    const result = await DescribeArtcleContent({ ParentId: 18 });
    console.log('resultA', result);
    const str = result.Data[0]?.content.split('\\');
    const strLast = '';
    const record = 0;
    // str.forEach((item, index) => {
    //   if (item === '') {
    //     record++;
    //   } else {
    //     if (record) {
    //       console.log('==', record);

    //       for (let i = 0; i < record; i++) {
    //         strLast += '\\';
    //       }
    //       console.log((strLast += '\\'));

    //       record = 0;
    //     }
    //     strLast += item;
    //   }
    // });
    // console.log('strLast=====', strLast);
    // setText(strLast);
    // const reg = /\\{0,}/;
    // console.log('result++', result.Data[0]?.content);

    if (result.Code === 0) {
      setData(result.Data[0]);
    }
  };
  useEffect(() => {
    fn();
  }, []);
  const result = md.render(data?.content ? data.content : '');
  console.log('result', result);
  return (
    <div
      className='markdown_box'
      ref={node => {
        if (node) {
          node.innerHTML = result;
        }
      }}
    >
      fdsafsa
    </div>
  );
};
