import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../components/UI/cardBottom/cardBottom';

const ListOfThings = () => {
  const сomponentState = {
    title: 'list of things for trip',
    revision: 0,
    ready: 0,
    column: 6,
  };

  return (
    <Fragment>
      <div className={styles.mainContainer}></div>
      <CardBottom title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default ListOfThings;
