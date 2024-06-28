import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const WorkingWithStates = () => {
  const сomponentState = {
    title: 'Props + Context',
    componentName: 'WorkingWithStates',
    important: "important",
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px',
    width: '273px'
  };
  return (
    <Fragment>
      <div style={{height:сomponentState.height, width:сomponentState.width, border: сomponentState.important === "important" ? '2px solid #FFEBB8' : сomponentState.important === 'ui' ? '2px solid #D8FFD4' : ""}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom important={сomponentState.important} title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} componentName={сomponentState.componentName}/>
    </Fragment>
  );
};

export default WorkingWithStates;
 