import React from 'react';

function targets(tag, amountSaved, targetAmount, description) {
  this.tag = tag;
  this.description = description;
  this.progress = () => {
    let progressValue = (amountSaved / targetAmount) * 100;
    return progressValue;
  };
}

function Savingtargets({
  icon,
  value,
  savingDescr,
  amountSaved,
  targetAmount,
}) {
  return (
    <div className="targets">
      <img className="transaction_icon" src={icon} alt="icon" />
      <div>
        <section>
          <p className="ricipient">{savingDescr}</p>
          <span>
            <span>{amountSaved}</span>/<span>{targetAmount}</span>
          </span>
        </section>
        <progress id="savingsTarget" max="100" value={value}></progress>
      </div>
    </div>
  );
}

export { Savingtargets, targets };
