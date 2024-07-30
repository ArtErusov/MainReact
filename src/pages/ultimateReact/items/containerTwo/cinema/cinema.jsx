import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';
import movieData from './movieData.json';
import InputText from '../../../../../components/UI/inputText/inputText';
import MovieItem from './MovieItem';
import VerticalDivider from '../../../../../components/UI/verticalDivider/verticalDivider';
import { useState } from 'react';

const Cinema = () => {
  //====================styles====================
  const borderStyles = { height: data.height, width: data.width, border: data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '' };
  //=============================================

  const [isOpen, setIsOpen] = useState('true');
  const [query, setQuery] = useState();
  const handleChange = (value) => setQuery(value);


  return (
    <>
      <div style={{ borderStyles }} className={styles.mainContainer}>
        <div className={styles.left}>

          <InputText placeholder={'Movie title...'} width={'409px'} value={query} getValue={handleChange}/>
          {isOpen ?
            <div>
              {movieData.map((item) => (
                <MovieItem key={item.imdbID} item={item} />
              ))}
            </div> : ''}
          <div onClick={() => setIsOpen(!isOpen)} className={styles.left_close}>{isOpen ? "-" : "+"}</div>
        </div>
        <VerticalDivider data={data} />
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default Cinema;
