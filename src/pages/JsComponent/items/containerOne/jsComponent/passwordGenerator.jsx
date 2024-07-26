import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

const PasswordGenerator = () => {

  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '';
  // const backgroundColor = data.important === "important" ? '#FFEBB8' : data.important === 'ui' ? '#D8FFD4': data.important === 'pet' ? '#ACFFFA' : '';
  return (
    <>
      <div style={{height:data.height, width:data.width, border: borderStyles}} className={styles.mainContainer}>
    {/* контент */}
    <p>dasdasdas</p>
      </div>
      <CardBottom componentState={data}/>
    </>
  );
};

export default PasswordGenerator;
 