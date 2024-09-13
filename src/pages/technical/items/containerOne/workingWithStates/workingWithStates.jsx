import styles from './styles.module.scss';
import { createContext, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import CounterProps from './counterProps';
import data from './data.json';
import CounterContext from './counterContext';


export const TestContext = createContext();


const WorkingWithStates = () => {

  // ==========Передача через Props + Props Drilling===========
  const [counterProps, setCounterProps] = useState(0);
  const handleChange = (number) => {
    setCounterProps(number);
  };
  // ==========Context=========================================
  const [counterContext, setCounterContext] = useState(0);
  // ==========================================================
  return (
    <>
      <div style={{ height: data.height, width: data.width, border: data.important === "important" ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : "" }} className={styles.mainContainer}>
      {/*  ==========Передача через Props + Props Drilling=========== */}
        <CounterProps counter={counterProps} handleChange={handleChange} />
        {/*  ==========Context========================================= */}
        <TestContext.Provider value={{ counterContext, setCounterContext }}>
          <CounterContext />
        </TestContext.Provider>
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default WorkingWithStates;
