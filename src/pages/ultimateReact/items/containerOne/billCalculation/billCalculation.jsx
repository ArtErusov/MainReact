import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import { useState } from 'react';
import data from './data.json';

const BillCalculation = () => {
  //====================styles====================
  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '';
  // =============================================

  const [test, setTest] = useState()
  const [myBill, setMyBill] = useState("0")
  const [FriendBill, setFriendBill] = useState("0")

  const allBill = Number(FriendBill) + Number(myBill)
  const computation = Math.round(Number(test) + (Number(test) * Number(allBill) / 100))

  const reset = () => {
    setTest(0);
    setMyBill(0);
    setFriendBill(0)
  }

  return (
    <>
      <div style={{ height: data.height, width: data.width, border: borderStyles }} className={styles.mainContainer + " " + styles.calc}>
        <p>How much was the bill?</p>
        <input onChange={(e) => setTest(e.target.value)} type="number" className={styles.calc_input} value={test}/>
        <p>How did you like the service?</p>
        <select className={styles.calc_input} value={myBill} onChange={(e) => setMyBill(e.target.value) }>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Amazing! (20%)</option>
        </select >
        <p>How did your friend like the service?</p>
        <select className={styles.calc_input} value={FriendBill} onChange={(e) => setFriendBill(e.target.value)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Amazing! (20%)</option>
        </select>
        <div className={styles.botton}>
          <p className={styles.botton_text}>You pay {computation}</p>
          <p className={styles.botton_reset}>${test} + ${computation - test} tip</p>
          <button onClick={() => reset()}>reset</button>   
        </div>
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default BillCalculation;
