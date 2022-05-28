import React, { useState } from 'react';
import { SearchIcon } from 'tdesign-icons-react';
import styles from './search.less';

export default props => {
  const [focusStatus, setFocusStatus] = useState(false);
  return (
    <div
      {...props}
      className={`${styles.search_input_box} ${focusStatus ? styles.search_box_focus : ''} ${
        props.className ? props.className : ''
      }`}
    >
      <input
        onChange={props.onChange}
        onFocus={() => {
          setFocusStatus(true);
          props.onFocus();
        }}
        onBlur={() => {
          setFocusStatus(false);
          props.onBlur();
        }}
      ></input>
      <span onClick={props.searchHandle}>
        <SearchIcon />
      </span>
    </div>
  );
};
