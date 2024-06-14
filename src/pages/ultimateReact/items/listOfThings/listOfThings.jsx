import styles from './styles.module.scss';
import { Fragment } from 'react';
import ready from '/img/svg/ready.svg';
import revision from '/img/svg/revision.svg';

const ListOfThings = () => {

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        </div>
      <div className={styles.extraContainer}>
        <p>Pizza Project</p>
        <div>
          <img src={revision} alt="" />
          <img src={ready} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default ListOfThings;
