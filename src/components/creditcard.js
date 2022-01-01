import React from 'react';
import '../css/creditcard.css';
import cardchip from '../img/cardChip.png';
import auth from './firebase/fire';

function creditcard() {
  //variables
  const user = auth.currentUser;
  return (
    <div className="credit_card">
      <p className="card_type">Debit Card</p>
      <img className="card_chip" src={cardchip} alt="cardchip" />
      <p className="card_number">
        <span>6219</span>
        <span>8610</span>
        <span>2888</span>
        <span>8075</span>
      </p>
      <div>
        <p className="card_name">{user && user.displayName.toUpperCase()}</p>
        <p className="expiry_date">02/24</p>
      </div>
    </div>
  );
}

export default creditcard;
