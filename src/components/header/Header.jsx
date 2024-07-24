import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import styles from './styles.module.scss';
import iIcon from '/img/svg/i.svg';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [activeHelp, setActiveHelp] = useState(false);
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.flex}>
          <ul className={styles.list}>
            <li onClick={() => setActiveIndex(0)} className={activeIndex == 0 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
              <Link to="http://localhost:5173/yandex">Yandex</Link>
            </li>
            <li onClick={() => setActiveIndex(1)} className={activeIndex == 1 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
              <Link to="http://localhost:5173/ur">Ultimate React</Link>
            </li>
            {/* <li onClick={() => setActiveIndex(2)} className={activeIndex == 2 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
              <Link to="http://localhost:5173/game">Игры</Link>
            </li> */}
            {/* <li onClick={() => setActiveIndex(3)} className={activeIndex == 3 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
              <Link to="http://localhost:5173">Разное на React</Link>
            </li> */}
            <li onClick={() => setActiveIndex(4)} className={activeIndex == 4 ? styles.list__item + ' ' + styles.list__item_active : styles.list__item}>
              <Link to="http://localhost:5173/js">converted from JS</Link>
            </li>

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
            <div className={styles.help} onClick={() => setActiveHelp(!activeHelp)}>
              <img src={iIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      {activeHelp ? (
        <div className={styles.bottom}>
          <div className={styles.bottom__pet}></div>
          <p>компоненты котолрые делал безуроков</p>
          <div className={styles.bottom__ui}></div>
          <p>готовые ui, можно использовать в проектах</p>
          <div className={styles.bottom__standard}></div>
          <p>компоненты в которых тренируюсь</p>
          <div className={styles.bottom__interesting}></div>
          <p>компоненты для анализа</p>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Header;
