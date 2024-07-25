import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import { useState } from 'react';
import data from './data.json';

const BillCalculation = () => {
  //====================styles====================
  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '';
  // =============================================

  const [test, setTest] = useState(0)
  const [myBill, setMyBill] = useState("0")
  const [FriendBill, setFriendBill] = useState("0")

  const computation= (value) => {
    const result = Number(value) + (Number(value) * Number(myBill) / 100) + (Number(value) * Number(FriendBill) / 100)

    setTest(result)
  }

  return (
    <>
      <div style={{ height: data.height, width: data.width, border: borderStyles }} className={styles.mainContainer + " " + styles.calc}>
        <p>How much was the bill?</p>
        <input onChange={(e) => computation(e.target.value)} type="number" className={styles.calc_input} />
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
          <div className={styles.botton_text}>312312</div>
          <div className={styles.botton_reset}></div>    
        </div>
        <p>{test}</p>
        <p></p>
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default BillCalculation;
