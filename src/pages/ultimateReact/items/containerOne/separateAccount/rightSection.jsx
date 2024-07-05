import styles from './styles.module.scss';
import { Fragment } from 'react';


const RightSection = ({selectFriend}) => {
  return (
    <Fragment>
      {selectFriend ? (
      <div className={styles.right}> 
        <div className={styles.right__title}> Split a bill with friend </div>
        <div className={styles.right__item}>
          <div className={styles.right__item_text}>Bill value</div>
          <input className={styles.right__item_input} placeholder='0' type="number" />
        </div>
        <div className={styles.right__item}>
          <div className={styles.right__item_text}>Your expense</div>
          <input className={styles.right__item_input} placeholder='0' type="number" />
        </div>
        <div className={styles.right__item}>
          <div className={styles.right__item_text}>Sarah’s expense</div>
          <input className={styles.right__item_input} placeholder='0' type="number" />
        </div>
        <div className={styles.right__item}>
          <div className={styles.right__item_text}>Who is paying the bill</div>
          <input className={styles.right__item_input} placeholder='0' type="text" />
        </div>
      </div>
      ) : (
        <div className={styles.right__filling}>
          <div>
          <p>select a friend</p>
          <p>to calculate the tip</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RightSection;