import styles from './styles.module.scss';
import Divider from '../../components/UI/divider/divider';

{/* ===========================Сontainer 1========================== */} 
import ListOfThings from './items/containerOne/listOfThings/listOfThings';
import HomeWorkCounter from './items/containerOne/homeWorkCounter/homeWorkCounter';
import SeparateAccount from './items/containerOne/separateAccount/separateAccount';
import BillCalculation from './items/containerOne/billCalculation/billCalculation';
{/* ===========================Сontainer 2========================== */} 
import Cinema from './items/containerTwo/cinema/cinema';

const UltimateReact = () => {
  return (
    <>
    {/* ===========================Контейнер 2========================== */}      
    <Divider title="Сontainer 2"/>     
      <div className={styles.grid_two}>   
{/* ----------------------------Строка 1---------------------------- */}
        <div className={styles.grid_two_one}>
          <Cinema />
        </div>

      </div>
{/* ===========================Контейнер 1========================== */}      
      <Divider title="Сontainer 1"/>     
      <div className={styles.grid_one}>   
{/* ----------------------------Строка 1---------------------------- */} 
       <div className={styles.grid_one_five}>
          <ListOfThings />
        </div>
         <div className={styles.grid_one_two }>
          <SeparateAccount />
        </div>

{/* ----------------------------Строка 2---------------------------- */} 
        
 <div className={styles.grid_one_three}>
          <BillCalculation />
        </div>
        <div className={styles.grid_one_four}>
          <HomeWorkCounter />
        </div>

      </div>
    </>
  );
};

export default UltimateReact;
