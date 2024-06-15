import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../components/UI/cardBottom/cardBottom';

const ReactionToButtons = () => {
  const [state, setState] = useState(1);
  const сomponentState = {
    title: 'Reaction to buttons',
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px',
    width: '273px',
  };

  console.log(state);
  return (
    <Fragment>
      <div style={{ height: сomponentState.height, width: сomponentState.width }} className={styles.mainContainer}>
        <div className={styles.steps}>
          <div className={styles.numbers}>
            <div className={styles.numbers_btn + ' ' + styles.active}>1</div>
            <div className={state < 2 ? styles.numbers_btn : styles.numbers_btn + ' ' + styles.active}>2</div>
            <div className={state < 3 ? styles.numbers_btn : styles.numbers_btn + ' ' + styles.active}>3</div>
          </div>
          <p className={styles.step}>
            {state === 1 && 'Step 1:'}
            {state === 2 && 'Step 2:'}
            {state === 3 && 'Step 3:'}
          </p>
          <p className={styles.message}>
            {state === 1 && 'Learn React😍'}
            {state === 2 && 'Apply for jobs👨‍💻'}
            {state === 3 && 'Invest your new income👩‍🚀'}
          </p>
          <div className={styles.buttons}>
            <button onClick={() => (state > 1 ? setState(state - 1) : setState(1))} className={styles.buttons_previos}>
              previos
            </button>
            <button onClick={() => (state < 3 ? setState(state + 1) : setState(3))} className={styles.buttons_next}>
              next
            </button>
          </div>
        </div>
      </div>
      <CardBottom title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default ReactionToButtons;
