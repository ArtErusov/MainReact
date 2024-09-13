import styles from './styles.module.scss';
import { createContext, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';
import CounterContext from './counterContext';


export const TestContext = createContext();


const WorkingWithStates = () => {
  const [counterContext, setCounterContext] = useState(0);

  return (
    <>
      <div style={{ height: data.height, width: data.width, border: '2px solid #FFEBB8'}} className={styles.mainContainer}>
        <TestContext.Provider value={{ counterContext, setCounterContext }}>
          <CounterContext />
        </TestContext.Provider>
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default WorkingWithStates;
