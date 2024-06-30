import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const SeparateAccount = () => {
  const сomponentState = {
    title: 'Splitting the bill between friends',
    componentName: 'SeparateAccount',
    important: "pet",
    revision: 0,
    ready: 0,
    column: 4,
    height: '472px',
    width: '587px'
  };
  const borderStyles = сomponentState.important === 'important' ? '2px solid #FFEBB8' : сomponentState.important === 'ui' ? '2px solid #D8FFD4' : сomponentState.important === 'pet' ? '2px solid #ACFFFA' : '';
  return (
    <Fragment>
      <div style={{height:сomponentState.height, width:сomponentState.width, border: borderStyles}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom important={сomponentState.important} title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} componentName={сomponentState.componentName}/>
    </Fragment>
  );
};

export default SeparateAccount;
 