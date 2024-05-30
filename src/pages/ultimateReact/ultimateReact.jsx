import PizzaProject from './items/pizzaProject/pizzaProject';
import styles from './styles.module.scss';
import { Fragment } from 'react';
import MyCard from './items/myCard/myCard';

const UltimateReact = () => {
  return (
    <Fragment>
      <div className={styles.grid}>
        <div className={styles.grid__column_one}><PizzaProject /></div>
        <div className={styles.grid__column_two}><MyCard /></div>
      </div>
    </Fragment>
  );
};

export default UltimateReact;
 