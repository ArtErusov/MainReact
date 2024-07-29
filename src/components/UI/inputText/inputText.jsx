import styles from './styles.module.scss';

const InputText = ({placeholder, width}) => {
  return (
    <>
      <input className={styles.plc} type="text" placeholder={placeholder} style={{width: width}}/>
    </>
  );
};

export default InputText;
 