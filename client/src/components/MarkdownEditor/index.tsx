import React from 'react';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import Markdown from 'markdown-it';

import 'react-markdown-editor-lite/lib/index.css';

MdEditor.use(Plugins.TabInsert, {
  /**
   * 用户按下 Tab 键时输入的空格的数目
   * 特别地，1 代表输入一个'\t'，而不是一个空格
   * 默认值是 1
   */
  tabMapValue: 1,
});
// const plugins = ['header', 'table', 'divider', 'link', 'clear', 'divider', 'font-bold'];

interface propsType {
  /** md编辑器id */
  id?: string;
  /** md编辑器名称 */
  name?: string;
  /** md编辑器内容 */
  value?: string;
  /**
   * 经过markdown-it处理md编辑器内容
   * 示例： const mdParser = new Markdown();
   * renderHTML={text => mdParser.render(text)}
   */
  renderHTML?: string;
  /** 编辑器内容为空的tips */
  placeholder?: string;
  /** 是否只读，不可编辑 */
  readOnly?: boolean;
  /** 插件列表 */
  plugins?: string[];
  /** 是否启用快捷键 */
  shortcuts?: boolean;
  /** 控制哪些项将默认显示，包括:menu(菜单栏)，md(编辑器)，html(预览) */
  view?: { menu?: boolean; md?: boolean; html?: boolean };
  /** 控件可以显示哪些项目，包括:menu(菜单栏)，md(编辑器)，html(预览)，fullScreen(全屏)，hideMenu(隐藏按钮切换菜单栏) */
  canView?: {
    menu?: boolean;
    md?: boolean;
    html?: boolean;
    fullScreen?: boolean;
    hideMenu?: boolean;
  };
  /** 预览窗格的className。如果你需要默认的html，默认为 custom-html-style*/
  htmlClass?: string;
  /** 编辑器面板的className */
  markdownClass?: string;
  /** 默认图像url,即在点击菜单栏添加图片的默认图片 */
  imageUrl?: string;
  /** 默认链接url,即在点击菜单栏添加链接的默认链接 */
  linkUrl?: string;
  /** 通过工具栏创建的表可以拥有的最大行和列数量,默认 6x4 */
  table?: {
    /** 最大行数 默认 4 */
    maxRow?: number;
    /** 最大列数 默认 6 */
    maxCol?: number;
  };
  /** 编辑和预览滚动同步模式 默认两值都存在
   * rightFollowLeft:右边跟着左边滚动
   * leftFollowRight：左边跟着右边滚动
   */
  syncScrollMode: ('rightFollowLeft' | 'leftFollowRight')[];
  /**
   * 接受图像的文件扩展名，逗号分隔值列表，如 .jpg,.png
   */
  imageAccept: string;
  /**
   * 编辑器内容更改回调，
   */
  onChange: ({ html, text }, event) => {};
  /**
   * 配置onChange何时触发，允许:both, beforeerender(在渲染html之前)，afterRender(在渲染html之后),默认 both
   *
   */
  onChangeTrigger: 'both' | 'beforeRender' | 'afterRender';
  /**
   * 在图像上传时调用，返回一个通过图像url解析的Promise
   */
  onImageUpload: (file: File) => Promise<string>;
  /** 自定义图片上传这里，用于图片其他上传方案 */
  onCustomImageUpload: (event: Event) => Promise<{ url: string; text?: string }>;
}

export default (props: propsType) => {
  const mdParser = new Markdown();
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
  }
  return (
    <MdEditor
      style={{ height: '500px' }}
      shortcuts
      syncScrollMode={['leftFollowRight']}
      // onImageUpload={file =>
      //   new Promise((resolve, reject) => {
      //     resolve('dcsacdsaca');
      //   })
      // }
      // onCustomImageUpload={async (event: any) => {
      //   console.log('adcfdsafcsacsacs');

      //   return { url: 'sss' };
      // }}
      // canView={{ fullScreen: false }}
      placeholder={'开始创作吧...'}
      renderHTML={text => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};
