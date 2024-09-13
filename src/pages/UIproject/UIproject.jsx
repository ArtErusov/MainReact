import Divider from '../../components/UI/divider/divider';

import styles from './styles.module.scss';
{/* ======================Elements with JS============================= */}
import Accordion from './items/withJS/accordion/accordion';
const UIproject = () => {
  return (
    <>
      <Divider title={'Elements with JS'} color={'UI'} />
{/* ======================Elements with JS============================= */}
      <div className={styles.grid_JS}>
        <div className={styles.grid_JS_one}>
          <Accordion />
        </div>
      </div>
      <Divider title={'Animating'} color={'UI'} margin={true}/>
{/* =========================Animating================================ */}      
      <div className={styles.grid_anim}></div>
      <Divider title={'Elements without logic'} color={'UI'} margin={true}/>
{/* ==================Elements without logic========================== */}    
      <div className={styles.grid_notLog}></div>
    </>
  );
};

export default UIproject;
