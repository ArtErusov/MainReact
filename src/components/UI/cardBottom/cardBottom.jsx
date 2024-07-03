import { Fragment, useState } from 'react';
import styles from './styles.module.scss';
import ready from '/img/svg/ready.svg';
import revision from '/img/svg/revision.svg';

const CardBottom = ({componentState}) => {
  const [name, setName] = useState(true)
  const columnSize = ['117px', '273px', '430px', '587px', '743px', '900px', '1057px', '1213px', '1370px', '1527px', '1683px', '1840px'];
  const backgroundColor = componentState.important === "important" ? '#FFEBB8' : componentState.important === 'ui' ? '#D8FFD4': componentState.important === 'pet' ? '#ACFFFA' : '';
  return (
    <Fragment>
     
      <div style={{ width: columnSize[componentState.column - 1], backgroundColor: backgroundColor}} className={styles.cardBottom}>
        <p onClick={() => setName(!name)}>{name ? componentState.title : componentState.componentName}</p>
        <div>
          {componentState.revision ? <img src={revision} alt="" /> : ''}
          {componentState.ready ? <img src={ready} alt="" /> : ''}
        </div>
      </div>
    </Fragment>
  );
};

export default CardBottom; 
