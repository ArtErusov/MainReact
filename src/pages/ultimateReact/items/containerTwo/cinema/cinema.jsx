import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';
import movieData from './movieData.json';
import InputText from '../../../../../components/UI/inputText/inputText';
import MovieItem from './MovieItem';

const Cinema = () => {
  //====================styles====================
  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : data.important === 'pet' ? '2px solid #ACFFFA' : '';
  // const backgroundColor = data.important === "important" ? '#FFEBB8' : data.important === 'ui' ? '#D8FFD4': data.important === 'pet' ? '#ACFFFA' : '';
  //=============================================
  return (
    <>
      <div style={{ height: data.height, width: data.width, border: borderStyles }} className={styles.mainContainer}>
        <div className={styles.left}>
        <InputText placeholder={'Movie title...'} width={'409px'} />
        {movieData.map((item) => (
          <MovieItem key={item.imdbID} item={item} />
        ))}
        </div>
        {/* тут разделитель */}
        <div className={styles.mainContainer_div} ></div>
        {/* конец разделителя */}
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default Cinema;
