import styles from './styles.module.scss';
import { Fragment } from 'react';

const PizzaProject = () => {
  const pizzaData = [
    {
      name: 'Focaccia',
      ingredients: 'Bread with italian olive oil and rosemary',
      price: 6,
      photoName: 'img/pizzas/focaccia.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Margherita',
      ingredients: 'Tomato and mozarella',
      price: 10,
      photoName: 'img/pizzas/margherita.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Spinaci',
      ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
      price: 12,
      photoName: 'img/pizzas/spinaci.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: 'img/pizzas/funghi.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Salamino',
      ingredients: 'Tomato, mozarella, and pepperoni',
      price: 15,
      photoName: 'img/pizzas/salamino.jpg',
      soldOut: true,
    },
    {
      name: 'Pizza Prosciutto',
      ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
      price: 18,
      photoName: 'img/pizzas/prosciutto.jpg',
      soldOut: false,
    },
  ];

  const nowTime = new Date().getHours();
  const openTime = `Were open from 12:00 to 22:00. ${nowTime >= 12 && nowTime <= 15 ? 'Come visit us or order online' : 'Sorry we`re closed'} `;
  console.log(openTime);
  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h2>fast react pizza co.</h2>
        <p className={styles.mainContainer__text}>Aauthentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

        <ul className={styles.card}>
          {pizzaData.map((item) => (
            <li className={styles.card__item} key={item.name}>
              <img className={styles.card__item_img} src={item.photoName} alt="" />
              <div className={styles.card__item_flex}>
                <p className={styles.card__item_flex_title}>{item.name}</p>
                <p className={styles.card__item_flex_description}>{item.ingredients}</p>
                <p className={styles.card__item_flex_price}>Price: {item.price} $</p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.mainContainer__text_lastChild}>{openTime}</p>
        <button>Order</button>
      </div>
      <div className={styles.extraContainer}>
        <p>Pizza Project</p>
      </div>
    </Fragment>
  );
};

export default PizzaProject;
