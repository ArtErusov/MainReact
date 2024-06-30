import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const WorkingWithStates = () => {
  const componentState = {
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
      <div style={{height:componentState.height, width:componentState.width, border: componentState.important === "important" ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : ""}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom important={componentState.important} title={componentState.title} revision={componentState.revision} ready={componentState.ready} column={componentState.column} componentName={componentState.componentName}/>
    </Fragment>
  );
};

export default WorkingWithStates;
 