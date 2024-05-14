import React, {useState} from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import './ScrollButton.css';

function ScrollButton(){
  const [visible, setVisible] = useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
    setVisible(false);
  };

  return(
    <div>
      {visible && <button type="button" className="scroll-button" onClick={scrollToBottom}><IoIosArrowDropdownCircle/></button>}
    </div>
  );
}

export default ScrollButton;
