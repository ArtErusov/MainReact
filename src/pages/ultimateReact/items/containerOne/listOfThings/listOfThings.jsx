import styles from './styles.module.scss';
import { useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import close from '/img/svg/close.svg';
import data from './data.json';

const ListOfThings = () => {

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('input');


//Добавление нового элемента массива 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem ={description, quantity, packed: false, id: Date.now()}
    setItems((items) => [...items, newItem]);
    setDescription('');
    setQuantity(1);
  };
//Удаление элемента массива 
  const handleDelete = (itemId) => {
    setItems(items=>items.filter(item=>item.id !==itemId))
  }
//Зачеркивание элемента (изменение в массиве по условию)
  const handleToggleItem = (id) =>{
    setItems(items=>items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }
  
  //Создал массив с числами от 1 до 10
  const createArray = Array.from({ length: 10 }, (_, i) => i + 1);
  
  const numItems = items.length;
  //число едениц объекта которые соответствуют то-му или иному принципу
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  // Cортировка
  let sortedItems;
  if( sortBy === "input") sortedItems = items;
  if ( sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if ( sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));


  return (
    <>
      <div style={{ height: data.height, width: data.width, border: data.important === "important" ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : ""}} className={styles.mainContainer}>
{/* =================================================================================== */}
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
 {/* ==================================================================================== */}     
        {items.length > 0 
        ? ( <div className={styles.main}>
          {<ui className={styles.main__list}>{sortedItems.map((item) => (
            <li className={styles.main__list_item} key={item.id}>
              <input type="checkbox" value={item.packed} onChange={()=> handleToggleItem(item.id)}/>
              <p style={{textDecoration: item.packed ? 'line-through' : ''}}>{item.quantity} {item.description}</p>
              <div onClick={() => handleDelete(item.id)}><img src={close} alt=""/></div>
              </li>
            ))}
          </ui>}
        </div>)
        : (<div className={styles.filler}>
            <p>Let`s pack up for our trip</p>
          </div>)
        }
{/* ==================================================================================== */}  
        <div className={styles.bottom}>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value) }>
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
          <button onClick={() => setItems([])} className={styles.bottom__clear}>clear list</button>
        </div>
{/* проблема в css установил падинг, но при большом тексте текст переносился на следующую строчку, сделал условный рендеринг */}
        {items.length > 0 ? (
          <div style={{ width: percentage !== 100 ? '640px' : '' }} className={styles.bottom__text}>
            {percentage === 100 
            ? "You got everything! Ready to go🚄!!!"
            : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)` }        
          </div>
        ) : null}

        
      </div>
      <CardBottom componentState={data}/>
    </>
  );
};

export default ListOfThings;
