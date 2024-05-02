import styles from './styles.module.scss';
import { Fragment } from 'react';
import ColorSelection from './items/colorSelection/ColorSelection';


const MiniApp = () =>  {


  return(
  <Fragment>
    <div className={styles.grid}>
        <div className={styles.grid1}>
            <ColorSelection />
        </div>
        <div className={styles.grid2}>asdasd</div>
        <div className={styles.grid3}>dasd</div>
        <div className={styles.grid4}></div>
    </div>
  </Fragment>)
};

export default MiniApp;