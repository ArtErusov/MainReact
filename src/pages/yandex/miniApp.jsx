import styles from './styles.module.scss';
import { Fragment } from 'react';

const Yandex = () => {
  return (
    <Fragment>
      <p className={styles.title}>
        решаю логические задачки и верстаю с сайтов <a href="https://verstaem.online/">verstaem.online</a> и <a href="https://coderun.yandex.ru/catalog">coderun.yandex</a>
      </p>
      <div className={styles.divider}></div>
    </Fragment>
  );
};

export default Yandex;
