import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import styles from './styles.module.scss';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.flex}>
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
          <div className={styles.list}>
          <div onClick={() => setActiveIndex(73)} className={activeIndex == 73 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
                <Link to="http://localhost:5173/pet">pet</Link>
              </div>
            <div onClick={() => setActiveIndex(72)} className={activeIndex == 72 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
                <Link to="http://localhost:5173/ui">UI</Link>
              </div>
            <div onClick={() => setActiveIndex(71)} className={activeIndex == 71 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
                <Link to="http://localhost:5173/important">important</Link>
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
