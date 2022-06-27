import React from 'react';
import Markdown from 'markdown-it';

const md = new Markdown();
export default props => {
  const result = md.render('fdsafdsafdsafsda');
  console.log('result', result);

  return (
    <div
      style={{ width: '1000px', border: '1px solid red ' }}
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
