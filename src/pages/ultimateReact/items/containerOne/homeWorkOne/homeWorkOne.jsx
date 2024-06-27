import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const HomeWorkOne = () => {
  const сomponentState = {
    title: 'Work home 1',
    revision: 0,
    ready: 0,
    componentName: 'HomeWorkOne',
    column: 2,
    height: '472px',
    width: '274px',
  };

  const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + step);
  const whenDate = step === 0 ? 'Today is ' : step > 0 ? `${step} days from today is` : `${Math.abs(step)} days ago was `;

  return (
    <Fragment>
      <div style={{ height: сomponentState.height, width: сomponentState.width }} className={styles.mainContainer}>
        {/* Задание 1 */}
        <div className={styles.counter}>
          <button onClick={() => setStep(step + counter)}>+</button>
          <div>step: {step}</div>
          <button onClick={() => setStep(step - counter)}>--</button>
        </div>
        <div className={styles.counter}>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <div>counter: {counter}</div>
          <button onClick={() => setCounter(counter - 1)}>--</button>
        </div>
        <div
          onClick={() => {setStep(0);setCounter(1);}}className={styles.counter_date}>
          <p>{whenDate}{dayOfTheWeek[date.getDay() - 1]}</p>
          <p>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
        </div>
      </div>
      <CardBottom title={сomponentState.title}  revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} componentName={сomponentState.componentName} />
    </Fragment>
  );
};

export default HomeWorkOne;
