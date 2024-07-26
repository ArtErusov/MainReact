import styles from './styles.module.scss';
import { useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import CounterProps from './counterProps';
import data from './data.json';

const WorkingWithStates = () => {


  const [counter, setCounter] = useState (0);
  const handleChange = (number) => {
    setCounter(number);
    };
  return (
    <>
      <div style={{height:data.height, width:data.width, border: data.important === "important" ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : ""}} className={styles.mainContainer}>
        <CounterProps counter={counter} handleChange={handleChange}/>
      </div>
      <CardBottom componentState={data}/>
    </>
  );
};

export default WorkingWithStates;
 