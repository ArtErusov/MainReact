import styles from './styles.module.scss';
import { Fragment, useState } from 'react';

// import avatar1 from '/img/avatar/avatar-1.png';
// import avatar2 from '/img/avatar/avatar-2.png';
import avatar3 from '/img/avatar/avatar-3.png';
// import avatar4 from '/img/avatar/avatar-4.png';
// import avatar5 from '/img/avatar/avatar-5.png';
// import avatar6 from '/img/avatar/avatar-6.png';

const LeftSection = ({ person, handleChange, handleFriends}) => {
  const [formIsActive, setFormIsActive] = useState(false);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newPerson = { name: description, avatar: 3, id: Date.now(), debt: 0 };
    handleChange((items) => [...items, newPerson]);
    setDescription('');
    setFormIsActive(false);
  };
// Сделать рандомный выбор картинки avatar
  return (
    <Fragment>
      <div className={styles.left}>
        <ul>
          {person.map((item) => (
            <li key={item.id}>
              <img src={avatar3} alt="" />
              <div>
                <p className={styles.left__text_name}>{item.name}</p>
                <p className={styles.left__text_bill}>{`You ${item.name}'s owe ${item.debt}$`}</p>
              </div>
              <button onClick={() => handleFriends(item) }>select</button>
            </li>
          ))}
        </ul>
        {/* ------------------------------- */}
        {formIsActive ? (
          <form className={styles.left__form} onSubmit={handleSubmit}>
            <input type="text" value={description} placeholder="Name....." onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">add</button>
          </form>
        ) : null}


        <button onClick={() => setFormIsActive(!formIsActive)} className={styles.left__button}>
          {formIsActive ? 'close' : 'add friend'}
        </button>
      </div>
    </Fragment>
  );
};

export default LeftSection;
