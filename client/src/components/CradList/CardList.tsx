import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from './index.less';

const marqueedata = [
  { id: 1, text: 1111 },
  { id: 2, text: 2222 },
];
export default function CardList({ data }) {
  const [marqueelist, setMarqueelist] = useState([]);
  useEffect(() => {
    setMarqueelist(marqueedata);
  }, []);

  return (
    <>
      <Card data={data}></Card>
    </>
  );
}
