import React from 'react';
import styles from './card.less';
import { AvtarCardType } from '@/consts/variableType';

interface PropsType extends AvtarCardType {
  key: any;
}

export default function Card(props: PropsType) {
  const { icon, content, onClick } = props;
  return (
    <div
      onClick={() => {
        onClick();
      }}
      key={props.key}
      className={styles.card}
    >
      {icon}
      <span style={{ paddingLeft: '10px' }}>{content}</span>
    </div>
  );
}
