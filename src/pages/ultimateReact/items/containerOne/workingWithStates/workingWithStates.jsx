import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import CounterProps from './counterProps';

const WorkingWithStates = () => {
  const componentState = {
    title: 'Props + Context',
    componentName: 'WorkingWithStates',
    important: "important",
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px',
    width: '273px'
  };

  const [counter, setCounter] = useState (0);
  const handleChange = (number) => {
    setCounter(number);
    };
  return (
    <Fragment>
      <div style={{height:componentState.height, width:componentState.width, border: componentState.important === "important" ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : ""}} className={styles.mainContainer}>
        <CounterProps counter={counter} handleChange={handleChange}/>
      </div>
      <CardBottom componentState={componentState}/>
    </Fragment>
  );
};

export default WorkingWithStates;
 