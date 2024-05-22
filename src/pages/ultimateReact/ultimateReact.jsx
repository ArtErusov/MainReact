import PizzaProject from './items/pizzaProject/pizzaProject';
import styles from './styles.module.scss';
import { Fragment } from 'react';

const UltimateReact = () => {
  return (
    <Fragment>
      <div className={styles.grid_temporarily}>
        <PizzaProject />
      </div>
    </Fragment>
  );
};

export default UltimateReact;
