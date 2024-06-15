import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../components/UI/cardBottom/cardBottom';

const ReactionToButtons = () => {
  const сomponentState = {
    title: 'Reaction to buttons',
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px', 
    width: '273px'
  };

  return (
    <Fragment>
      <div style={{height:сomponentState.height, width:сomponentState.width}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default ReactionToButtons;
