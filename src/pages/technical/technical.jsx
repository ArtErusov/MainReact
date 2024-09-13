import styles from './styles.module.scss';
import Divider from '../../components/UI/divider/divider';
import WorkingWithStates from './items/containerOne/workingWithStates/workingWithStates';


const Technical = () => {
  return (
    <>
       <Divider title="Сontainer 1"/>     
      <div className={styles.grid_one}>   
{/* ----------------------------Строка 1---------------------------- */}
        <div className={styles.grid_one_one}>
          <WorkingWithStates/>
        </div>

      </div>
    </>
  );
};

export default Technical;
