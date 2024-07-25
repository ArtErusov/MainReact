import { useState } from 'react';
import styles from './styles.module.scss';
const AccordionItem = ({answer, question}) => {
    const [ isOpen, setIsOpen ] = useState(false) 
//====================styles====================
    const color = isOpen ? "#5051f9": "#BDBDFF";
    const colorStripe = isOpen ? "#5051f9": "#f3f6fd";
    const border = isOpen ? "0px" : "0 0 14px 14px";
// =============================================
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} style={{borderRadius: border}} className={styles.accordion}>
        <div style={{backgroundColor: colorStripe}} className={ styles.accordion_stripe}>
          <div  className={styles.accordion_text}>
            <p style={{color: color}} className={styles.accordion_text_num}>01</p>
            <p style={{color: color}} className={styles.accordion_text_title}>{question}</p>
            <p style={{color: color}} className={styles.accordion_text_state}>{isOpen ? "--": "+"}</p>
          </div>
        </div>
        
      </div>
      { isOpen ? 
        <div className={styles.drop} >
            <p>{answer}</p>
        </div> 
        : null}
    </>
  );
};

export default AccordionItem;
