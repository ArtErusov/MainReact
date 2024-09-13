import styles from './styles.module.scss';

const Divider = ({title = "Сontainer", color = "standart", margin = false}) => {
  const backgroundColor = color === "UI" ? "#D8FFD4" : "#f3f6fd" 
  const marginTop = margin ? "60px" : "0px"

  return (
    <>
      <div style={{ backgroundColor: backgroundColor, marginTop: marginTop}} className={styles.stripe}></div>
      <p className={styles.stripe__title}>{title}</p>
      <div style={{ backgroundColor: backgroundColor}} className={styles.stripe__bottom}></div>
    </>
  );
};

export default Divider;
