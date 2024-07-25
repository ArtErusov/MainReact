import styles from './styles.module.scss';
import {useState } from 'react';


const HomeWorkOne = (props) => {
    const [step, setStep] = useState(0);
    const [counter, setCounter] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + step);
    const whenDate = step === 0 ? 'Today is ' : step > 0 ? `${step} days from today is` : `${Math.abs(step)} days ago was `;

  return (
    <>
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
          onClick={() => {setStep(0); setCounter(1);}} className={styles.counter_date}>
          <p>{whenDate}{props.dayOfTheWeek[date.getDay() - 1]}</p>
          <p>{date.getDate()} {props.months[date.getMonth()]} {date.getFullYear()}</p>
        </div>
    </>
  );
};

export default HomeWorkOne;