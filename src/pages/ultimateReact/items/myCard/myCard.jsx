import styles from './styles.module.scss';
import { Fragment } from 'react';

const MyCard = () => {
  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <img src="img/myImgFromMyCard.jpg" alt="" />
      </div>
      <div className={styles.extraContainer}>
        <p>User card</p>
      </div>
    </Fragment>
  );
};

export default MyCard;
