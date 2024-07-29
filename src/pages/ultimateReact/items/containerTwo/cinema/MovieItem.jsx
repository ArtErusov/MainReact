import styles from './styles.module.scss';

const MovieItem = ({item}) => {
  return (
    <>
    <div className={styles.card}>
        <img src={item.Poster} alt="" />
        <div className={styles.card_text}>
          <p className={styles.card_text_title}>{item.Title}</p>  
          <p>{item.Year}</p> 
        </div>
        
    </div>
  
    </>
  );
};

export default MovieItem;
