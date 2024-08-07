import styles from './styles.module.scss';
import ListOfThings from '../ultimateReact/items/containerOne/listOfThings/listOfThings';
import WorkingWithStates from '../ultimateReact/items/containerOne/workingWithStates/workingWithStates'



const Important = () => {
  return (
    <>
  <div className={styles.grid}> 
    <div className={styles.grid_one}>
      <ListOfThings />
    </div>
    <div className={styles.grid_two}>
      <WorkingWithStates />
    </div>
  </div>
    </>
  );
};

export default Important;
