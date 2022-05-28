import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const contents = [
  {
    id: 1,
    text: 'HTML',
  },
  {
    id: 2,
    text: '前端',
  },
  {
    id: 3,
    text: '后端',
  },
];
export default function Button({ listdata, onClick }) {
  const [list, setList] = useState([]);
  const [siderstate, setSiderstate] = useState(false);
  useEffect(() => {
    setList(contents);
  }, []);
  const handleClick = () => {
    setSiderstate(true);
  };
  return (
    <div>
      <Sidebar listdata={list} onClick={handleClick} />
    </div>
  );
}
