import styles from './styles.module.scss';
import { Fragment, useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import close from '/img/svg/close.svg';

const ListOfThings = () => {
  const сomponentState = {
    title: 'list of things for trip - Работа с Input',
    important: 1,
    revision: 0,
    ready: 0,
    column: 6,
    height: '472px',
    width: '900px',
  };
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem ={description, quantity, packed: false, id: Date.now()}
    setItems((items) => [...items, newItem]);
    setDescription('');
    setQuantity(1);
    console.log(items);
  };

  const handleDelete = (index) => {
    const updatingItems = [...items];
    updatingItems.splice(index, 1);
    setItems(updatingItems);
  };
  
  //Создал массив с числами от 1 до 10
  const createArray = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <Fragment>
      <div style={{ height: сomponentState.height, width: сomponentState.width, border: сomponentState.important ? '2px solid #FFEBB8' : ''}} className={styles.mainContainer}>
        <form className={styles.header} onSubmit={handleSubmit}>
          <div className={styles.header__text}>What do you need for your trip?</div>
          <select 
            value={quantity} id="" 
            className={styles.header__number} 
            onChange={(e) => setQuantity(Number(e.target.value))}>
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

        <div className={styles.main}>
          {<ui className={styles.main__list}>{items.map((item) => (
            <li className={styles.main__list_item} key={item.id}>
              <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
              <p style={{textDecoration: isChecked ? 'line-through' : ''}}>{item.quantity}</p>
              <p style={{textDecoration: isChecked ? 'line-through' : ''}}>{item.description}</p>
              <div onClick={() => handleDelete()}><img src={close} alt=""/></div>
              </li>
            ))}
            </ui>}
        </div>
        <div className={styles.bottom}>
          <button className={styles.bottom__sort}>sort by meet order</button>
          <button onClick={() => setItems([])} className={styles.bottom__clear}>clear list</button>
        </div>
      </div>
      <CardBottom title={сomponentState.title} important={сomponentState.important} revision={сomponentState.revision} ready={сomponentState.ready} column={сomponentState.column} />
    </Fragment>
  );
};

export default ListOfThings;
