import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import LeftSection from './leftSection';
import RightSection from './rightSection';

const SeparateAccount = () => {
  const componentState = {
    title: 'Splitting the bill between friends',
    componentName: 'SeparateAccount',
    important: 'pet',
    revision: 0,
    ready: 0,
    column: 6,
    height: '472px',
    width: '900px',
  };
  const backgroundColor = componentState.important === "important" ? '#FFEBB8' : componentState.important === 'ui' ? '#D8FFD4': componentState.important === 'pet' ? '#ACFFFA' : '';
  const borderStyles = componentState.important === 'important' ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';
  return (
    <Fragment>
      <div style={{ height: componentState.height, width: componentState.width, border: borderStyles }} className={styles.mainContainer}>
        <div className={styles.flex}>
          <LeftSection />
          <div style={{ backgroundColor: backgroundColor}} className={styles.divider}></div>
          <RightSection />
        </div>
      </div>
      <CardBottom important={componentState.important} title={componentState.title} revision={componentState.revision} ready={componentState.ready} column={componentState.column} componentName={componentState.componentName} />
    </Fragment>
  );
};

export default SeparateAccount;
