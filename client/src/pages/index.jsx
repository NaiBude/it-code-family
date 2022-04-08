import { useState } from 'react';
import styles from './index.less';
import Logo from '../../assets/logo.png';
import TextLogo from '../../assets/textLogo.png';

export default function IndexPage() {
  console.log('飞机暗室逢灯酸辣粉');
  console.log('fdsafdsafdsafsadfsafdsafdsafdsafsa');
  const [name, setName] = useState([1, 2, 3, 4]);
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <img className={styles.logo} src={Logo} />
        <img className={styles} src={TextLogo} />
        <iframe sandbox='' src='' frameborder='0'></iframe>
        {name.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div
        isDispaly
        commit='hahahahha'
        fasdfdsafdsafadasfdsafdad='fdasfsafda'
        afdsafdsafdsaf='dfsafa'
        className={styles.box}
      ></div>
    </div>
  );
}
