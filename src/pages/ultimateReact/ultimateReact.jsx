import styles from './styles.module.scss';
import { Fragment } from 'react';

import MyCard from './items/myCard/myCard';
import PizzaProject from './items/pizzaProject/pizzaProject';
import ListOfThings from './items/listOfThings/listOfThings';
import HomeWorkOne from './items/homeWorkOne/homeWorkOne';
import ReactionToButtons from './items/reactionToButtons/reactionToButtons';
import TurnCards from './items/turnCards/turnCards';
import WorkingWithStates from './items/workingWithStates/workingWithStates'

const UltimateReact = () => {
  return (
    <Fragment>
      <div className={styles.grid}>
{/* ===========================Контейнер 1========================== */}      
{/* ----------------------------Строка 3---------------------------- */} 
        <div className={styles.grid__column_seven}>
          <WorkingWithStates />
        </div>
{/* ----------------------------Строка 2---------------------------- */} 
        <div className={styles.grid__column_five}>
          <ListOfThings />
        </div>
        <div className={styles.grid__column_four}>
          <ReactionToButtons />
        </div>
        <div className={styles.grid__column_three}>
          <HomeWorkOne />
        </div>
        <div className={styles.grid__column_six}>
          <TurnCards />
        </div >
{/* ----------------------------Строка 1---------------------------- */}
        <div className={styles.grid__column_one}>
          <PizzaProject />
        </div>
        <div className={styles.grid__column_two}>
          <MyCard />
        </div>
      </div>
    </Fragment>
  );
};

export default UltimateReact;
