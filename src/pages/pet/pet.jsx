import styles from './styles.module.scss';

const Pet = () => {
  return (
    <>
  <div className={styles.grid}> 
    <div className={styles.grid_one}>
      <p>hello</p>
    </div>
    <div className={styles.grid_two}>
    <p>hello 2</p>
    </div>
  </div>
    </>
  );
};

export default Pet;
