import { Fragment } from 'react';
import styles from './styles.module.scss';
import ready from '/img/svg/ready.svg';
import revision from '/img/svg/revision.svg';

const CardBottom = (props) => {
  const columnSize = ['117px', '273px', '430px', '587px', '743px', '900px', '117px', '117px' ];
  return (
    <Fragment>
      <div style={{ width: {columnSize[props.column]} }} className={styles.extraContainer}>
        <p>{props.title}</p>
        <div>
          {props.revision ? <img src={revision} alt="" /> : ''}
          {props.ready ? <img src={ready} alt="" /> : ''}
        </div>
      </div>
    </Fragment>
  );
};

export default CardBottom;
