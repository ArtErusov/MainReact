import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const Pattern = () => {
  const componentState = {
    title: 'list of things for trip',
    componentName: 'Pattern',
    important: "important",
    // important ui none
    revision: 0,
    ready: 0,
    column: 6,
    height: '472px',
    width: '900px'
  };
  const borderStyles = componentState.important === 'important' ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';
  // const backgroundColor = componentState.important === "important" ? '#FFEBB8' : componentState.important === 'ui' ? '#D8FFD4': componentState.important === 'pet' ? '#ACFFFA' : '';
// ['117px', '273px', '430px', '587px', '743px', '900px', '1057px', '1213px', '1370px', '1527px', '1683px', '1840px'];
  return (
    <Fragment>
      <div style={{height:componentState.height, width:componentState.width, border: borderStyles}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom componentState={componentState}/>
    </Fragment>
  );
};

export default Pattern;
 