import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import LeftSection from './leftSection';
import RightSection from './rightSection';
import data from './data.json';

const SeparateAccount = () => {
 
  const backgroundColor = data.important === "important" ? '#FFEBB8' : data.important === 'ui' ? '#D8FFD4': data.important === 'pet' ? '#ACFFFA' : '';
  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '';
  
  const [person, setPerson] = useState([{name: "Pela", id: 23321321, avatar: 1, debt: 0}]);
  const [selectFriend, setSelectFriend] = useState(null)

  const handleChange = (item) => {
    setPerson(item);
    };

  const handleFriends = (friends) => {
    setSelectFriend(friends)
  }
  return (
    <Fragment>
      <div style={{ height: data.height, width: data.width, border: borderStyles }} className={styles.mainContainer}>
        <div className={styles.flex}>
          <LeftSection person={person} handleChange={handleChange} handleFriends={handleFriends}/>
          <div style={{ backgroundColor: backgroundColor}} className={styles.divider}></div>
          <RightSection selectFriend={selectFriend}/>
        </div>
      </div>
      <CardBottom componentState={data} />
    </Fragment>
  );
};

export default SeparateAccount;
