import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../components/UI/cardBottom/cardBottom';

const ListOfThings = () => {
  const сomponentState = {
    title: 'list of things for trip',
    revision: 0,
    ready: 0,
    column: 6,
    height: '472px',
    width: '900px'
  };

  return (
    <Fragment>
      <div style={{height:сomponentState.height, width:сomponentState.width}} className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.header__text}>What do you need for your trip?</div>
        <input type="number" className={styles.header__number} min={0} max={10} placeholder='0'/>
        <input type="text" className={styles.header__inpText} placeholder='item.....'/>
        <button className={styles.header__button}>add</button>
      </div>
      <div className={styles.main}></div>
      <div className={styles.bottom}></div>
      </div>
      <CardBottom title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default ListOfThings;
