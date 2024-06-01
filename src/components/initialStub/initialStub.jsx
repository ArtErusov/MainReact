import { Fragment } from 'react';
import styles from './styles.module.scss';

const InitialStub = () => {
  return (
    <Fragment>
      <div className={styles.container}>
          <div className={styles.container__div_top}></div>
          <p className={styles.container__text}>Это мой учебный проект React, тут собраны примеры кода и минипроекты с разных курсов и сайтов а так-же мои переделки кода с чистого JS на  React</p>
          <div className={styles.container__div_bot}></div>
          <button>начать</button>
      </div>
    </Fragment>
  );
};

export default InitialStub;
