import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

const ReactionToButtons = () => {
 

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  console.log(step);
  return (
    <Fragment>
      <div style={{ height: data.height, width: data.width }} className={styles.mainContainer}>
        <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? styles.open : styles.close}>
          {isOpen ? 'close' : 'open'}
        </button>
        {isOpen && (
          <div>
            <div className={styles.numbers}>
              <div className={styles.numbers_btn + ' ' + styles.active}>1</div>
              <div className={step < 2 ? styles.numbers_btn : styles.numbers_btn + ' ' + styles.active}>2</div>
              <div className={step < 3 ? styles.numbers_btn : styles.numbers_btn + ' ' + styles.active}>3</div>
            </div>
            <p className={styles.step}>Step {step} :</p>

            <p className={styles.message}>
              {step === 1 && 'Learn React😍'}
              {step === 2 && 'Apply for jobs👨‍💻'}
              {step === 3 && 'Invest your new income👩‍🚀'}
            </p>
            <div className={styles.buttons}>
              <button onClick={() => (step > 1 ? setStep(step - 1) : setStep(1))} className={styles.buttons_previos}>
                previos
              </button>
              <button onClick={() => (step < 3 ? setStep(step + 1) : setStep(3))} className={styles.buttons_next}>
                next
              </button>
            </div>
          </div>
        )}
      </div>
      <CardBottom componentState={data}/>
    </Fragment>
  );
};

export default ReactionToButtons;
