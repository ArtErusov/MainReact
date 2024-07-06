import styles from './styles.module.scss';
import { Fragment, useState } from 'react';

const RightSection = ({ selectFriend }) => {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [heExpense, setHeExpense] = useState(0);
  // const [billValue, setBillValue] = useState(0);

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (!billValue) return;
    const newBill = {billValue};
    console.log(newBill);

  }
  return (
    <Fragment>
      {selectFriend ? (
        <form className={styles.right} onSubmit={handleSubmit}>
          <div className={styles.right__title}>{`Split a bill with ${selectFriend.name}’s`}</div>
          <div className={styles.right__item}>
            <div className={styles.right__item_text}>Bill value</div>
            <input className={styles.right__item_input} placeholder="0" value={billValue} type="number" onChange={(e) => setBillValue(e.target.value)} />
          </div>
          <div className={styles.right__item}>
            <div className={styles.right__item_text}>Your expense</div>
            <input className={styles.right__item_input} placeholder="0" type="number" value={yourExpense} onChange={(e) => setYourExpense(e.target.value)}/>
          </div>
          <div className={styles.right__item}>
            <div className={styles.right__item_text}>{`${selectFriend.name}’s expense`}</div>
            <input className={styles.right__item_input} placeholder="0" type="number" value={heExpense} onChange={(e) => setHeExpense(e.target.value)}/>
          </div>
          <div className={styles.right__item}>
            <div className={styles.right__item_text}>Who is paying the bill</div>
            <input className={styles.right__item_input} placeholder="0" type="text" />
          </div>
          <button> Split bill</button>
        </form>
      ) : (
        <div className={styles.right__filling}>
          <div>
            <p>select a friend</p>
            <p>to calculate the tip</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RightSection;
