import styles from './styles.module.scss';
import { Fragment } from 'react';


const Header = () =>  {


  return(
  <Fragment>
    <div className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.list__item + ' ' + styles.list__item_active}>Мини задачи</li>
        <li className={styles.list__item}>Toolkit</li>
        <li className={styles.list__item}>Yandex</li>
        <li className={styles.list__item}>Переделки с JS</li>
        <li className={styles.list__item}>Ui элементы </li>
      </ul> 
    </div>
  </Fragment>)
};

export default Header;