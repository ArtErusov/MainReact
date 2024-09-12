import styles from './styles.module.scss';

const Divider = ({title, color}) => {
  const backgroundColor = color === "UI" ? "#D8FFD4" : "#f3f6fd" 

  return (
    <>
      <div style={{ backgroundColor: backgroundColor}} className={styles.stripe}></div>
      <p className={styles.stripe__title}>{title}</p>
      <div style={{ backgroundColor: backgroundColor}} className={styles.stripe__bottom}></div>
    </>
  );
};

export default Divider;
