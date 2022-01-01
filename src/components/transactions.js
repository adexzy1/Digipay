import React from 'react';
import '../css/dashboard.css';

function transactions({ transactionType, Amount, icon, Ricipient, tag }) {
  return (
    <div>
      <section className="transactions">
        <img className="transaction_icon" src={icon} alt="icon" />
        <div>
          <p className="ricipient">{Ricipient}</p>
          <p className="transaction_type">{transactionType}</p>
        </div>
        <span className={tag}>
          <span>₦</span>
          {Amount}
        </span>
      </section>
    </div>
  );
}

export default transactions;
