import React from 'react';
import styles from '../singIn.less';

export default function TipsId(props) {
  const { tips } = props;
  console.log(tips);

  // const [Tips] = useState(tips);
  return (
    <div>
      <ul className={styles.tips}>
        <li>账号不能为空</li>
        <li>账号必须为为8-16个数字</li>
      </ul>
    </div>
  );
}
