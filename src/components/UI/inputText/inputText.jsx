import styles from './styles.module.scss';

const InputText = ({ placeholder, width, value, getValue }) => {
  return (
    <>
      <input
      onChange={(e) => getValue(e.target.value)}
        className={styles.plc}
        value={value}
        type="text"
        placeholder={placeholder}
        style={{ width: width }}
      />
    </>
  );
};

export default InputText;
