import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import Markdown from 'markdown-it';

import 'react-markdown-editor-lite/lib/index.css';

export default props => {
  const mdParser = new Markdown();
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
  }
  return (
    <MdEditor
      style={{ height: '500px' }}
      renderHTML={text => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};
