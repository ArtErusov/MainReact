import styles from './styles.module.scss';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import AccordionItem from './accordionItem';
import data from './data.json';

const Accordion = () => {

  const borderStyles = data.important === 'important' ? '2px solid #FFEBB8' : data.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';

  const question = [
    { question: 'Where ?', answer: 'here', id: 2134 },
    { question: 'Where ?', answer: 'here', id: 3214 },
    { question: 'Where ?', answer: 'here', id: 5556 },
    { question: 'Where ?', answer: 'here', id: 5351 },
  ];

  return (
    <>
      <div style={{ height: data.height, width: data.width, border: borderStyles }} className={styles.mainContainer}>
        { question.map((item, index) => (
          <AccordionItem key={item.id} question={item.question} answer={item.answer} index={index}/>
        ))}
      </div>
      <CardBottom componentState={data} />
    </>
  );
};

export default Accordion;
