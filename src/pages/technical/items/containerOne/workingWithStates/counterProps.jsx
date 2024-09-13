import styles from './styles.module.scss';

const CounterProps = ({counter, handleChange}) => {
  return (
    <>
      <div className={styles.counter}>
        <button onClick={() => handleChange(counter + 1)}>+</button>
        <div >
          <p>{counter}</p>
        </div>
        <button onClick={() => handleChange(counter - 1)}>--</button>
      </div>
      <p className={styles.description}>Подъем state вверх</p>
    </>
  );
};

export default CounterProps;
