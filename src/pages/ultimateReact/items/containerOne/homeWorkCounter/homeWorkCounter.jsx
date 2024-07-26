import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import HomeWorkOne from './homeWorkOne';
import HomeWorkTwo from './homeWorkTwo';
import data from './data.json';

const HomeWorkCounter = () => {

  const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  return (
    <>
      <div style={{ height: data.height, width: data.width }} className={styles.mainContainer}>
        {/* Задание 1 */}
        <HomeWorkOne dayOfTheWeek={dayOfTheWeek} months={months} />
        {/* Задание 2 */}
        <HomeWorkTwo dayOfTheWeek={dayOfTheWeek} months={months} />

      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default HomeWorkCounter;
