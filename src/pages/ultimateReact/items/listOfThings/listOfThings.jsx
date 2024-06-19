import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../components/UI/cardBottom/cardBottom';

const ListOfThings = () => {
  const сomponentState = {
    title: 'list of things for trip',
    revision: 0,
    ready: 0,
    column: 6,
    height: '472px',
    width: '900px',
  };
  const [description, setDescription] = useState('');
  const [quantity, setQuantitty] = useState(1);
  const arrayItems = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem ={description, quantity, packed: false, id: Date.now()}
    console.log(newItem);
    setDescription('');
    setQuantitty(1);
  };
  
  //Создал массив с числами от 1 до 10
  const createArray = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <Fragment>
      <div style={{ height: сomponentState.height, width: сomponentState.width }} className={styles.mainContainer}>
        <form className={styles.header} onSubmit={handleSubmit}>
          <div className={styles.header__text}>What do you need for your trip?</div>
          <select 
            value={quantity} id="" 
            className={styles.header__number} 
            onChange={(e) => setQuantitty(Number(e.target.value))}>
              {createArray.map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
          </select>
          <input 
            type="text" 
            onChange={(e) => setDescription(e.target.value)}
            className={styles.header__inpText} 
            value={description} placeholder="item....." />
          <button className={styles.header__button}>add</button>
        </form>

        <div className={styles.main}></div>
        <div className={styles.bottom}></div>
      </div>
      <CardBottom title={сomponentState.title} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default ListOfThings;
