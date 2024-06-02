import { Fragment } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const InitialStub = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div>
          <div className={styles.container__div_top}></div>
          <p className={styles.container__text}>Это мой учебный проект React, тут собраны примеры кода и минипроекты с разных курсов и сайтов а так-же мои переделки кода с чистого JS на  React</p>
          <div className={styles.container__div_bot}></div>
          <button>
          <Link to="/ultimatereact">начать</Link>
          </button>
          </div>
      </div>
    </Fragment>
  );
};

export default InitialStub;
