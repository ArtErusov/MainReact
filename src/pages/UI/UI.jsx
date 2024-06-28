import styles from './styles.module.scss';
import { Fragment } from 'react';

const UI = () => {
  return (
    <Fragment>
  <div className={styles.grid}> 
    <div className={styles.grid_one}>
      <p>hello</p>
    </div>
    <div className={styles.grid_two}>
    <p>hello 2</p>
    </div>
  </div>
    </Fragment>
  );
};

export default UI;
