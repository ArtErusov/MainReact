import styles from './styles.module.scss';
import { Fragment } from 'react';

const LeftSection = ({person}) => {
  return (
    <Fragment>
      <div className={styles.left}>
        {person.map((item) =>(
          <div key={item.name}>
          <p>{item.name}</p>
          </div>
        ))}
        <button className={styles.left__button}>add friend</button>
      </div>
    </Fragment>
  );
};

export default LeftSection;
