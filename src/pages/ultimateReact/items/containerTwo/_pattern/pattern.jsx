import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

const Pattern = () => {

  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '';
  // const backgroundColor = componentState.important === "important" ? '#FFEBB8' : componentState.important === 'ui' ? '#D8FFD4': componentState.important === 'pet' ? '#ACFFFA' : '';
  return (
    <Fragment>
      <div style={{height: data.height, width: data.width, border: borderStyles}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom componentState={data}/>
    </Fragment>
  );
};

export default Pattern;
 