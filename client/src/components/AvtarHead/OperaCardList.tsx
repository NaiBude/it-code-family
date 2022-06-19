import React from 'react';
import Card from './Card';
import { AvtarCardListType } from '@/consts/variableType';

type PropsTypes = {
  cardList: AvtarCardListType[];
};

export default function OperaCardList(props: PropsTypes) {
  const { cardList } = props;
  return (
    <>
      {Array.isArray(cardList) &&
        cardList.map(item => {
          if (Array.isArray(item.children)) {
            return (
              <div style={{ borderTop: '1px solid #e3e9e3', padding: '6px 0' }} key={item.key}>
                {item.children.map(el => (
                  <Card key={el.content} {...el} />
                ))}
              </div>
            );
          }
          return '';
        })}
    </>
  );
}
