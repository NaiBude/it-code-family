import React, { useState } from 'react';
import styles from './index.less';
import Logo from '../../assets/logo.png';
import TextLogo from '../../assets/textLogo.png';
import { request } from '../service/request';

export default function IndexPage() {
  const [name, setName] = useState([1, 2, 32, 4]);
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <img className={styles.logo} src={Logo} />
        <img className={styles} src={TextLogo} />
        <iframe sandbox='' src='' frameBorder={0}></iframe>
        {name.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div>huhuhu</div>
      <div className={styles.box}></div>
    </div>
  );
}
