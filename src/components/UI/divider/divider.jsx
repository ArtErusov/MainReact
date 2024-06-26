import { Fragment } from 'react';
import styles from './styles.module.scss';

const Divider = (props) => {
  return (
    <Fragment>
      <div className={styles.stripe}></div>
      <p className={styles.stripe__title}>{props.title}</p>
      <div className={styles.stripe__bottom}></div>
    </Fragment>
  );
};

export default Divider;
