import styles from './styles.module.scss';
import { Fragment } from 'react';

import Divider from '../../components/UI/divider/divider';

import MyCard from './items/containerOne/myCard/myCard';
import PizzaProject from './items/containerOne/pizzaProject/pizzaProject';
import ListOfThings from './items/containerOne/listOfThings/listOfThings';
import HomeWorkOne from './items/containerOne/homeWorkOne/homeWorkOne';
import ReactionToButtons from './items/containerOne/reactionToButtons/reactionToButtons';
import TurnCards from './items/containerOne/turnCards/turnCards';
import WorkingWithStates from './items/containerOne/workingWithStates/workingWithStates';

const UltimateReact = () => {
  return (
    <Fragment>
{/* ===========================Контейнер 1========================== */}      
      <Divider title="Контейнер 1"/>     
      <div className={styles.grid_one}>   
{/* ----------------------------Строка 3---------------------------- */} 
        <div className={styles.grid_one_seven}>
          <WorkingWithStates />
        </div>
{/* ----------------------------Строка 2---------------------------- */} 
        <div className={styles.grid_one_five}>
          <ListOfThings />
        </div>
        <div className={styles.grid_one_four}>
          <ReactionToButtons />
        </div>
        <div className={styles.grid_one_three}>
          <HomeWorkOne />
        </div>
        <div className={styles.grid_one_six}>
          <TurnCards />
        </div >
{/* ----------------------------Строка 1---------------------------- */}
        <div className={styles.grid_one_one}>
          <PizzaProject />
        </div>
        <div className={styles.grid_one_two}>
          <MyCard />
        </div>
      </div>
    </Fragment>
  );
};

export default UltimateReact;
