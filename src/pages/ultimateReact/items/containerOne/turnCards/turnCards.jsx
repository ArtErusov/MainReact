import styles from './styles.module.scss';
import { useState } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

const TurnCards = () => {
 
  const card = [
    {
      id: 1204,
      front: 'Card 1',
      back: 'Hello  =)',
    },
    {
      id: 1272,
      front: 'Card 2',
      back: 'Hello  =)',
    },
    {
      id: 6789,
      front: 'Card 3',
      back: 'Hello  =)',
    },
    {
      id: 3124,
      front: 'Card 4',
      back: 'Hello  =)',
    },
    {
      id: 8975,
      front: 'Card 5',
      back: 'Hello  =)',
    },
    {
      id: 3321,
      front: 'Card 6',
      back: 'Hello  =)',
    },
  ];
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div style={{ height: data.height, width: data.width, border: data.important ? '2px solid #FFEBB8' : '' }} className={styles.mainContainer}>
        <div className={styles.cardTurn}>
          {card.map((item) => (
            <div 
              className={selectedId === item.id ? styles.cardTurn_active : styles.cardTurn_front} 
              onClick={() => setSelectedId(item.id !== selectedId ? item.id : null)} key={item.id}>
              {selectedId === item.id ? item.back : item.front}
            </div>
          ))}
        </div>
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default TurnCards;
