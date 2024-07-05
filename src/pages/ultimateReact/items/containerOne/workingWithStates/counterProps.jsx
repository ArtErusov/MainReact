import styles from './styles.module.scss';
import { Fragment } from 'react';

const CounterProps = ({counter, handleChange}) => {
  return (
    <Fragment>
      <div className={styles.counter}>
        <button onClick={() => handleChange(counter + 1)}>+</button>
        <div >
          <p>{counter}</p>
        </div>
        <button onClick={() => handleChange(counter - 1)}>--</button>
      </div>
      <p className={styles.description}>Подъем state вверх</p>
    </Fragment>
  );
};

export default CounterProps;
