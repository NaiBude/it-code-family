import React, { useState, useRef, useEffect, Suspense } from 'react';
import styles from './tabList.less';
// import { isParent } from '@/utils/tools';
import { WithoRouterPropsInter } from '@/consts/propsTypes';
import { DescribeArticleList, SelectTagChild, SelectTagParent } from '@/api/article';
import { ArticleListResposeType } from '@/consts/requestTypes';

const timeOut = 200;

export default props => {
  const [status, setStatus] = useState(0);
  const [optionsP, setOptionsP] = useState<{ id: number; content: string }[]>([]);
  const [optionChild, setOptionChild] = useState([]);
  const [subTagStatus, setSubTagStatus] = useState(false); // 控制子类下拉显示与隐藏
  const [historyTagHover, setHistoryTagHover] = useState(-1); // 在更改hoverTag之前记录它的状态，以此项请求子类tag
  const [hoverTag, setHoverTag] = useState(-1); // 记录父类实时hover状态
  const [selectBoxOver, setSelectBoxOver] = useState(false); // 子类下拉框是否有重新打开，用于监听此项请求数据
  const [subDownStatus, setSubDownStatus] = useState(false); // 从子类下拉框移出后是否还出与回退状态
  const [tagSubHeight, setTagSubHeight] = useState(0); // 动态计算子类下拉框的值
  const [tagChildCachet, setTagChildCachet] = useState({});
  const ref = useRef(null); // 获取setTimeout实例
  const tagRef = useRef({ id: null, tagStatus: false }); // tagStatus 深度保存父类hover状态 id 深度保存id，以便回调是使用
  const preRef = useRef(null);

  useEffect(() => {
    const getTagP = async () => {
      const result = await SelectTagParent();
      setOptionsP(result.Data);
    };
    getTagP();
  }, []);

  const getTagChild = async (target: number) => {
    const result = await SelectTagChild({ belong: target });
    if (result.Code === 0) {
      setTagChildCachet({ ...tagChildCachet, [`${target}`]: result.Data });
      setOptionChild(result.Data);
    }
  };
  useEffect(() => {
    if (optionsP.length) {
      setStatus(optionsP[0].id);
    }
  }, [optionsP]);
  useEffect(() => {
    // console.log('tagChildCachet', tagChildCachet);
  }, [tagChildCachet]);

  const changeStatus = index => {
    setStatus(index);
  };

  useEffect(() => {
    if (subTagStatus && hoverTag !== -1) {
      // console.log(hoverTag, historyTagHover);
      //此处执请求tagChildren逻辑
      if (!tagChildCachet[`${hoverTag}`]) {
        getTagChild(hoverTag);
      } else if (tagChildCachet[`${hoverTag}`]) {
        setOptionChild(tagChildCachet[`${hoverTag}`]);
      }
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

  const subTagChooseAciton = () => {
    //子项选择·逻辑
    setSubTagStatus(false);
    changeStatus(historyTagHover);
  };

  const changetabStatusHidden = () => {
    // 在更改hoverTag之前记录它的状态
    setHistoryTagHover(hoverTag);
    // 清除
    setHoverTag(-1);
    setSubTagStatus(false);
    // 清除深度保存的id
    tagRef.current.id = null;
    // console.log('preRef', preRef.current?.clientHeight, tagSubHeight);
    const time = (preRef.current?.clientHeight / tagSubHeight) * timeOut;
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
      }, time);
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
                props.getArticleP(item.content);
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
          ref={preRef}
          style={{
            height: `${subTagStatus ? `${tagSubHeight}px` : 0}`,
            transition: `all ${timeOut / 1000}s`,
          }}
        >
          <ul
            ref={dom => {
              if (tagSubHeight === 0 && dom?.clientHeight) {
                setTagSubHeight(dom.clientHeight);
              }
            }}
          >
            {optionChild.map(item => (
              <li key={item.id}>
                <a
                  onClick={() => {
                    subTagChooseAciton;
                    props.getArticleC(item.content);
                  }}
                >
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
