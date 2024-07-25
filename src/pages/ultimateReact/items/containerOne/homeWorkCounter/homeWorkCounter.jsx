import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import HomeWorkOne from './homeWorkOne';

const HomeWorkCounter = () => {
  const componentState = {
    title: 'Work home date Counter',
    revision: 0,
    ready: 0,
    componentName: 'HomeWorkCounter',
    column: 2,
    height: '472px',
    width: '274px',
  };

  const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  return (
    <>
      <div style={{ height: componentState.height, width: componentState.width }} className={styles.mainContainer}>
        {/* Задание 1 */}
        <HomeWorkOne dayOfTheWeek={dayOfTheWeek} months={months} />

      </div>
      <CardBottom componentState={componentState} />
    </>
  );
};

export default HomeWorkCounter;
