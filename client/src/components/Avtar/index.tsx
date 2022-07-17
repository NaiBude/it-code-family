import React, { useEffect, useState } from 'react';
import { message } from 'tdesign-react';
import styles from './index.less';
import DefaultAvtar from '../../../assets/defaultAvtar.png';
import { AcquireUserAvtar } from '@/api/userInfo';

interface PropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string;
  size: number;
}

const Avtar = (props: PropsType) => {
  const { img, size, ...rest } = props;
  const [url, setUrl] = useState('');

  useEffect(() => {
    const getUrl = async () => {
      const result = await AcquireUserAvtar({ photo_key: img });
      if (result.Code === 0) {
        setUrl(result.Data.Url);
      } else {
        message.error({ content: result.Message });
      }
    };
    if (img) {
      getUrl();
    }
  }, [img]);

  return (
    <div {...rest} className={styles.avtar} style={{ width: `${size}px`, height: `${size}px` }}>
      <img
        src={url ? url : DefaultAvtar}
        alt=''
        style={{ width: `${size - 2}px`, height: `${size - 2}px` }}
      />
    </div>
  );
};
export default React.memo(Avtar);
