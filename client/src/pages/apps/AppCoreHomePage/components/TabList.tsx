import React, { useState, useRef, useEffect } from 'react';
import styles from './tabList.less';
// import { isParent } from '@/utils/tools';

const timeOut = 200;

export default props => {
  const [status, setStatus] = useState(0);
  const [subTagStatus, setSubTagStatus] = useState(false); // 控制子类下拉显示与隐藏
  const [historyTagHover, setHistoryTagHover] = useState(-1); // 在更改hoverTag之前记录它的状态，以此项请求子类tag
  const [hoverTag, setHoverTag] = useState(-1); // 记录父类实时hover状态
  const [selectBoxOver, setSelectBoxOver] = useState(false); // 子类下拉框是否有重新打开，用于监听此项请求数据
  const [subDownStatus, setSubDownStatus] = useState(false); // 从子类下拉框移出后是否还出与回退状态
  const [tagSubHeight, setTagSubHeight] = useState('auto'); // 动态计算子类下拉框的值
  const ref = useRef(null); // 获取setTimeout实例
  const tagRef = useRef({ id: null, tagStatus: false }); // tagStatus 深度保存父类hover状态 id 深度保存id，以便回调是使用
  // const tagSubRef = useRef(null);
  const optionsP = [
    { id: 1, content: '前端' },
    { id: 10, content: '大数据' },
    { id: 2, content: '后端' },
    { id: 3, content: '物联网' },
    { id: 4, content: '综合' },
    { id: 5, content: '综合' },
    { id: 6, content: '综合' },
    { id: 7, content: '综合' },
  ];

  const optionChild = [
    { id: 1, content: '大数据' },
    { id: 2, content: '后端' },
    { id: 3, content: '物联网' },
    { id: 4, content: '综合' },
    { id: 5, content: '综合' },
    { id: 6, content: '综合' },
    { id: 7, content: '综合' },
    { id: 8, content: '前端' },
    { id: 9, content: '大数据' },
    { id: 10, content: '后端' },
    { id: 11, content: '物联网' },
    { id: 12, content: '综合' },
    { id: 13, content: '综合' },
    { id: 14, content: '综合' },
    { id: 15, content: '综合' },
    { id: 16, content: '前端' },
    { id: 17, content: '大数据' },
    { id: 18, content: '后端' },
    { id: 19, content: '物联网' },
    { id: 20, content: '综合' },
    { id: 21, content: '综合' },
    { id: 22, content: '综合' },
    { id: 23, content: '综合' },
  ];

  const changeStatus = index => {
    setStatus(index);
  };

  useEffect(() => {
    if (subTagStatus && hoverTag !== -1) {
      //此处执请求tagChildren逻辑
    }
  }, [selectBoxOver]);

  useEffect(() => {
    //深度保存父类hover状态，以便于在回调中获取最新父类hover状态
    tagRef.current.tagStatus = subTagStatus;
  }, [subTagStatus]);

  const changetabStatusVisible = id => {
    // 实时获取最新tag
    setHoverTag(id);
    // 在下拉框关闭前，不进行下拉框显示状态的跟新，不执行数据请求
    if (!ref.current) {
      setSubTagStatus(true);
      setSelectBoxOver(true);
    }
    // 深度保存id，以便回调是使用
    tagRef.current.id = id;
  };
  const changetabStatusHidden = () => {
    // 在更改hoverTag之前记录它的状态
    setHistoryTagHover(hoverTag);
    // 清除
    setHoverTag(-1);
    setSubTagStatus(false);
    // 清除深度保存的id
    tagRef.current.id = null;
    // 在定时器不存在引用的时候可以执行定时器
    if (!ref.current) {
      ref.current = setTimeout(() => {
        if (!tagRef.current.tagStatus) {
          setSelectBoxOver(false);
        }
        //执行回调，调用最新tag状态，重新setHoverTag，重新打开下拉框，在鼠标不在父类tag上的时候，则不执行
        if (tagRef.current.id) {
          setHoverTag(tagRef.current.id);
          setSubTagStatus(true);
          setSelectBoxOver(true);
          if (subDownStatus) {
            setSubDownStatus(false);
          }
          tagRef.current.id = null;
        }
        // 清除定时引用
        ref.current = null;
      }, timeOut);
    }
  };

  useEffect(() => {
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, []);

  return (
    <div className={styles.tab_list}>
      <div className={styles.tab_parent}>
        <ul className={styles.tab_parent_lsit}>
          {optionsP.map(item => (
            <li
              key={item.id}
              className={status === item.id ? styles.active : ''}
              onClick={() => {
                changeStatus(item.id);
              }}
              onMouseOver={() => changetabStatusVisible(item.id)}
              onMouseLeave={() => changetabStatusHidden()}
            >
              <a>{item.content}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={styles.tab_child}
        onMouseOver={e => {
          if (!subDownStatus) {
            setSubTagStatus(true);
            setSubDownStatus(true);
            ref.current = null;
          }
        }}
        onMouseLeave={() => {
          changetabStatusHidden();
        }}
        // ref={tagSubRef}
      >
        <div
          className={styles.sub_visiable}
          style={{
            height: `${subTagStatus ? tagSubHeight : 0}`,
            transition: `all ${timeOut / 1000}s`,
          }}
        >
          <ul
            ref={dom => {
              if (tagSubHeight === 'auto' && dom?.clientHeight) {
                setTagSubHeight(`${dom.clientHeight}px`);
              }
            }}
          >
            {optionChild.map(item => (
              <li key={item.id}>
                <a>{item.content}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
