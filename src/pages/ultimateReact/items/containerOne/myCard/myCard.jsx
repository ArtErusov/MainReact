import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import data from './data.json';

const MyCard = () => {

  const userDescription =
    'My name is Artem, I`m 30 years old, and I`m a beginner web developer. I enjoy learning new technologies and putting them into practice. I am passionate about my work and always try to do itin the best possible way. In addition, I am a very responsible person and know how to work in a team.';
  const userSkills = [
    { skill: 'JavaScript', color: '#EDC90D', level: "intermediate" },
    { skill: 'html + css', color: '#1A59ED', level: "beginner" },
    { skill: 'React', color: '#43CAF6', level: "advenced" },
  ];
  return (
    <>
      <div className={styles.card}>
        <img src="img/myImgFromMyCard.jpg" alt="" />
        <p className={styles.card__title}>Artem Erusov</p>
        <p className={styles.card__text}>{userDescription}</p>

        <div className={styles.card__skill}>
          {userSkills.map((item) => (
            <div key={item.color} style={{ backgroundColor: item.color }} className={styles.card__skill_item}>
              <p>{item.skill}</p>
              <span>
                {item.level === "beginner" && "👶"}
                {item.level === "intermediate" && "👌"}
                {item.level === "advenced" && "🐱‍👤"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <CardBottom componentState={data}/>
    </>
  );
};

export default MyCard;
