import Divider from '../../components/UI/divider/divider';
import styles from './styles.module.scss';

const UIproject = () => {
  return (
    <>
      <Divider title={'Elements with JS'} color={'UI'} />
      <div className={styles.grid_JS}></div>
      <Divider title={'animating'} color={'UI'} />
      <div className={styles.grid_anim}></div>
      <Divider title={'elements without logic'} color={'UI'} />
      <div className={styles.grid_notLog}></div>
    </>
  );
};

export default UIproject;
