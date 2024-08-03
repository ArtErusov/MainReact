import { useContext } from 'react';
import { TestContext} from './workingWithStates'
import styles from './styles.module.scss';

const CounterContext = () => {
  const {counterContext, setCounterContext} = useContext(TestContext);
  return (
    <>
      <div className={styles.counter}>
        <button onClick={() => setCounterContext(counterContext + 1)}>+</button>
        <div >
          <p>{counterContext}</p>
        </div>
        <button onClick={() => setCounterContext(counterContext - 1)}>--</button>
      </div>
      <p className={styles.description}>Работа с Context</p>
    </>
  );
};

export default CounterContext;
