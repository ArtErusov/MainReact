import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const PasswordGenerator = () => {
  const componentState = {
    title: 'Password Generator',
    componentName: 'PasswordGenerator',
    important: "none",
    revision: 0,
    ready: 0,
    column: 4,
    height: '472px',
    width: '587px'
  };
  const borderStyles = componentState.important === 'important' ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';
  // const backgroundColor = componentState.important === "important" ? '#FFEBB8' : componentState.important === 'ui' ? '#D8FFD4': componentState.important === 'pet' ? '#ACFFFA' : '';
  return (
    <Fragment>
      <div style={{height:componentState.height, width:componentState.width, border: borderStyles}} className={styles.mainContainer}>
    {/* контент */}
    <p>dasdasdas</p>
      </div>
      <CardBottom componentState={componentState}/>
    </Fragment>
  );
};

export default PasswordGenerator;
 