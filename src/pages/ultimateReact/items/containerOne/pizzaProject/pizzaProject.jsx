import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

import dataPizza from './dataPizza.json';

const PizzaProject = () => {

  const nowTime = new Date().getHours();
  const checkOpenTime = nowTime >= 12 && nowTime <= 22;
  const openTime = `Were open from 12:00 to 22:00. ${checkOpenTime ? 'Come visit us or order online' : 'Sorry we`re closed'} `;

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h2>fast react pizza co.</h2>
        <p className={styles.mainContainer__text}>Aauthentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

        <ul className={styles.card}>
          {dataPizza.map((item) => (
            <li className={styles.card__item} key={item.name}>
              <img className={!item.soldOut ? styles.card__item_img : styles.card__item_img_mod} src={item.photoName} alt="" />
              <div className={styles.card__item_flex}>
                <p className={styles.card__item_flex_title}>{item.name}</p>
                <p className={styles.card__item_flex_description}>{item.ingredients}</p>
                {!item.soldOut ? <p className={styles.card__item_flex_price}>Price: {item.price} $</p> : <p className={styles.card__item_flex_price}>Sold out</p>}
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.mainContainer__text_lastChild}>{openTime}</p>
        <button className={checkOpenTime ? styles.mainContainer__but : styles.mainContainer__butGray}>{checkOpenTime ? 'order' : 'We`re sleeping now, come back in the morning =('}</button>
      </div>
      <CardBottom componentState={data}/>
    </Fragment>
  );
};

export default PizzaProject;
