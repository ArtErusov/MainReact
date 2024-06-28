import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';

const Pattern = () => {
  const сomponentState = {
    title: 'list of things for trip',
    componentName: 'Pattern',
    important: "important",
    // important ui none
    revision: 0,
    ready: 0,
    column: 6,
    height: '472px',
    width: '900px'
  };
// ['117px', '273px', '430px', '587px', '743px', '900px', '1057px', '1213px', '1370px', '1527px', '1683px', '1840px'];
  return (
    <Fragment>
      <div style={{height:сomponentState.height, width:сomponentState.width, border: сomponentState.important === "important" ? '2px solid #FFEBB8' : сomponentState.important === 'ui' ? '2px solid #D8FFD4' : ""}} className={styles.mainContainer}>
    {/* контент */}
      </div>
      <CardBottom important={сomponentState.important} title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} componentName={сomponentState.componentName}/>
    </Fragment>
  );
};

export default Pattern;
 