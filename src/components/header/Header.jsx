import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import styles from './styles.module.scss';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <Fragment>
      <div className={styles.header}>
        <ul className={styles.list}>
          <li onClick={() => setActiveIndex(0)} className={activeIndex == 0 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
            <Link to="http://localhost:5173/yandex">Yandex</Link>
          </li>
          <li onClick={() => setActiveIndex(1)} className={activeIndex == 1 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
            <Link to="http://localhost:5173/ultimatereact">Ultimate React</Link>
          </li>
          {/* <li onClick={() => setActiveIndex(2)} className={activeIndex == 2 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
            <Link to="http://localhost:5173/game">Игры</Link>
          </li> */}
          {/* <li onClick={() => setActiveIndex(3)} className={activeIndex == 3 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
            <Link to="http://localhost:5173">Разное на React</Link>
          </li> */}
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
