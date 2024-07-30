import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

const Pattern = () => {
 //====================styles====================
  const borderStyles = {height: data.height, width: data.width, border: data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : ''};

  //=============================================
  return (
    <>
      <div style={{borderStyles}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom componentState={data}/>
    </>
  );
};

export default Pattern;
 