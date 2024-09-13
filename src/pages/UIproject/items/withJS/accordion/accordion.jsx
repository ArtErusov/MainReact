import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import AccordionItem from './accordionItem';
import data from './data.json';

const Accordion = () => {

  const question = [
    { question: 'Where ?', answer: 'here', id: 2134 },
    { question: 'When ?', answer: '2025', id: 3214 },
  ];

  return (
    <>
      <div style={{ height: data.height, width: data.width, border: '2px solid #D8FFD4' }} className={styles.mainContainer}>
        { question.map((item, index) => (
          <AccordionItem key={item.id} question={item.question} answer={item.answer} index={index}/>
        ))}
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default Accordion;

 