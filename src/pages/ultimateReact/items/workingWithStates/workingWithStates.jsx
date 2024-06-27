import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../components/UI/cardBottom/cardBottom';

const WorkingWithStates = () => {
  const сomponentState = {
    title: 'Props + Context',
    important: 1,
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px',
    width: '273px'
  };
  return (
    <Fragment>
      <div style={{height:сomponentState.height, width:сomponentState.width, border: сomponentState.important ? '2px solid #FFEBB8' : ''}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom important={сomponentState.important} title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default WorkingWithStates;
 