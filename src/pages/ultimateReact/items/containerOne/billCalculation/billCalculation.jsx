import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const BillCalculation = () => {
  const componentState = {
    title: 'bill Calculation',
    componentName: 'BillCalculation',
    important: "none",
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px',
    width: '273px'
  };
  //====================styles====================
  const borderStyles = componentState.important === 'important' ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';
  // =============================================
  return (
    <>
      <div style={{height:componentState.height, width:componentState.width, border: borderStyles}} className={styles.mainContainer}>
      <p>How much was the bill?</p>
      <select>
      {/* <select value={sortBy} onChange={(e) => setSortBy(e.target.value) }> */}
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
      </div>
      <CardBottom componentState={componentState}/>
    </>
  );
};

export default BillCalculation;
 