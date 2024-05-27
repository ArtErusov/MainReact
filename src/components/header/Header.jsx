import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import styles from './styles.module.scss';


const Header = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link to="http://localhost:5173/yandex">Yandex</Link>
          </li>
          <li className={styles.list__item + ' ' + styles.list__item_active}>
            <Link to="http://localhost:5173/ultimatereact">Ultimate React</Link>
          </li>
          {/* <li className={styles.list__item}>Переделки с JS</li> */}
          {/* <li className={styles.list__item}>Ui элементы</li> */}
          {/* <li className={styles.list__item}>Мини задачи</li> */}
          {/* <li className={styles.list__item}>Toolkit</li> */}
          {/* <li className={styles.list__item}>Курсы</li> */}
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
