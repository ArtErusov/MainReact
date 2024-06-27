import { Fragment, useState } from 'react';
import styles from './styles.module.scss';
import ready from '/img/svg/ready.svg';
import revision from '/img/svg/revision.svg';

const CardBottom = (props) => {
  const [name, setName] = useState(true)
  const columnSize = ['117px', '273px', '430px', '587px', '743px', '900px', '1057px', '1213px', '1370px', '1527px', '1683px', '1840px'];
  return (
    <Fragment>
     
      <div style={{ width: columnSize[props.column - 1], backgroundColor: props.important ? '#FFEBB8' : ''}} className={styles.cardBottom}>
        <p onClick={() => setName(!name)}>{name ? props.title : props.componentName}</p>
        <div>
          {props.revision ? <img src={revision} alt="" /> : ''}
          {props.ready ? <img src={ready} alt="" /> : ''}
        </div>
      </div>
    </Fragment>
  );
};

export default CardBottom; 
