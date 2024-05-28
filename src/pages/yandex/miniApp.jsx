import styles from './styles.module.scss';
import { Fragment } from 'react';
import Divider from '../../components/UI/divider/divider';

const Yandex = () => {
  return (
    <Fragment>
      <p className={styles.title}>
        решаю логические задачки и верстаю с сайтов <a href="https://verstaem.online/">verstaem.online</a> и <a href="https://coderun.yandex.ru/catalog">coderun.yandex</a>
      </p>
      
      <div className={styles.divider}></div>

      <Divider title={'Верстка'}/>
    </Fragment>
  );
};

export default Yandex;
