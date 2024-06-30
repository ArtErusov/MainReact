import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const SeparateAccount = () => {
  const componentState = {
    title: 'Splitting the bill between friends',
    componentName: 'SeparateAccount',
    important: "pet",
    revision: 0,
    ready: 0,
    column: 4,
    height: '472px',
    width: '587px'
  };
  const borderStyles = componentState.important === 'important' ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';
  return (
    <Fragment>
      <div style={{height:componentState.height, width:componentState.width, border: borderStyles}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom important={componentState.important} title={componentState.title} revision={componentState.revision} ready={componentState.ready} column={componentState.column} componentName={componentState.componentName}/>
    </Fragment>
  );
};

export default SeparateAccount;
 