import React from 'react';
import { IconFont } from 'tdesign-icons-react';
import { List, Comment } from 'tdesign-react';

export default function Recommend() {
  const actionTextStyle = {
    display: 'inline-block',
    marginLeft: '6px',
    lineHeight: '15px',
  };
  const actions = [
    <span key='browse'>
      <IconFont name='browse' />
      <span style={actionTextStyle}>999</span>
    </span>,
    <span key='thumbUp'>
      <IconFont name='thumb-up' />
      <span style={actionTextStyle}>999</span>
    </span>,
    <span key='chat'>
      <IconFont name='chat' />
      <span style={actionTextStyle}>999</span>
    </span>,
  ];
  const commentsData = [
    {
      id: 'A',
      avatar: 'https://tdesign.gtimg.com/list-icon.png',
      author: '标题1',
      datetime: '今天13:38',
      content: '详细内容',
      actions,
    },
    {
      id: 'B',
      avatar: 'https://tdesign.gtimg.com/list-icon.png',
      author: '标题2',
      datetime: '今天14:38',
      content: '详细内容',
      actions,
    },
    {
      id: 'C',
      avatar: 'https://tdesign.gtimg.com/list-icon.png',
      author: '标题3',
      datetime: '今天15:30',
      content: '详细内容',
      actions,
    },
  ];

  return (
    <List>
      {commentsData.map((item, index) => (
        <List.ListItem key={item.id}>
          <Comment
            author={item.author}
            datetime={item.datetime}
            content={item.content}
            actions={actions}
          />
        </List.ListItem>
      ))}
    </List>
  );
}
