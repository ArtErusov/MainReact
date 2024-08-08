import styles from './styles.module.scss';

import Divider from '../../components/UI/divider/divider';

{/* ===========================Контейнер 1========================== */} 
import ListOfThings from './items/containerOne/listOfThings/listOfThings';
import HomeWorkCounter from './items/containerOne/homeWorkCounter/homeWorkCounter';
import TurnCards from './items/containerOne/turnCards/turnCards';
import WorkingWithStates from './items/containerOne/workingWithStates/workingWithStates';
import SeparateAccount from './items/containerOne/separateAccount/separateAccount';
import Accordion from './items/containerOne/accordion/accordion';
import BillCalculation from './items/containerOne/billCalculation/billCalculation';
{/* ===========================Контейнер 2========================== */} 
import Cinema from './items/containerTwo/cinema/cinema';

const UltimateReact = () => {
  return (
    <>
    {/* ===========================Контейнер 2========================== */}      
    <Divider title="Контейнер 2"/>     
      <div className={styles.grid_two}>   
{/* ----------------------------Строка 1---------------------------- */}
        <div className={styles.grid_two_one}>
          <Cinema />
        </div>

      </div>
{/* ===========================Контейнер 1========================== */}      
      <Divider title="Контейнер 1"/>     
      <div className={styles.grid_one}>   
{/* ----------------------------Строка 2---------------------------- */} 
        <div className={styles.grid_one_ten }>
          <BillCalculation />
        </div>
        <div className={styles.grid_one_nine }>
          <Accordion />
        </div>
         <div className={styles.grid_one_eight }>
          <SeparateAccount />
        </div>
        <div className={styles.grid_one_seven}>
          <WorkingWithStates />
        </div>
{/* ----------------------------Строка 1---------------------------- */} 
        <div className={styles.grid_one_five}>
          <ListOfThings />
        </div>

        <div className={styles.grid_one_three}>
          <HomeWorkCounter />
        </div>
        <div className={styles.grid_one_six}>
          <TurnCards />
        </div >
      </div>
    </>
  );
};

export default UltimateReact;
