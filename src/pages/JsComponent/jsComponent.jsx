import styles from './styles.module.scss';
import PasswordGenerator from './items/containerOne/jsComponent/passwordGenerator';
import Divider from '../../components/UI/divider/divider';

const JsComponent = () => {
  return (
    <>
      {/* ===========================Контейнер 1========================== */}
      <Divider title="Контейнер 1" />
      <div className={styles.grid_one}>
        {/* ----------------------------Строка 1---------------------------- */}
        <div className={styles.grid_one_one}>
          <PasswordGenerator />
        </div>
      </div>
    </>
  );
};

export default JsComponent;
