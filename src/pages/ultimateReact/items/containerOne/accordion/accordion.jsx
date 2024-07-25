import styles from './styles.module.scss';
import { Fragment } from 'react';
import CardBottom from '../../../../../components/UI/cardBottom/cardBottom';
import AccordionItem from './accordionItem';

const Accordion = () => {
  const componentState = {
    title: 'Accordion',
    componentName: 'Accordion',
    important: 'ui',
    revision: 0,
    ready: 0,
    column: 2,
    height: '472px',
    width: '273px',
  };
  const borderStyles =componentState.important === 'important' ? '2px solid #FFEBB8' : componentState.important === 'ui' ? '2px solid #D8FFD4' : componentState.important === 'pet' ? '2px solid #ACFFFA' : '';

  const question = [
    { question: 'Where ?', answer: 'here', id: 2134 },
    { question: 'Where ?', answer: 'here', id: 3214 },
    { question: 'Where ?', answer: 'here', id: 5556 },
    { question: 'Where ?', answer: 'here', id: 5351 },
  ];

  return (
    <Fragment>
      <div style={{ height: componentState.height, width: componentState.width, border: borderStyles }} className={styles.mainContainer}>
        { question.map((item) => (
          <AccordionItem key={item.id} question={item.question} answer={item.answer}/>
        ))}
      </div>
      <CardBottom componentState={componentState} />
    </Fragment>
  );
};

export default Accordion;
