import ItProgerReact from './items/itProgerReact/itProgerReact';
import styles from './styles.module.scss';
import { Fragment } from 'react';

const Course = () => {
  return (
    <Fragment>
      <div className={styles.grid_temporarily}>
        <ItProgerReact />
      </div>
    </Fragment>
  );
};

export default Course;
