import { Fragment } from 'react';
// import styles from './styles.module.scss';

const Divider = (props) => {
  return (
    <Fragment>
      <div></div>
      <p>{props.title}</p>
      <div></div>
    </Fragment>
  );
};

export default Divider;
