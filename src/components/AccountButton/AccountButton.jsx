import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

import './AccountButton.css';

function AccountButton(){
  return(
    <button type="button" className="acc_button">
      <MdAccountCircle/>
    </button>
  );
}

export default AccountButton;
