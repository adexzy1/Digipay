import icon from '../img/loginEllipse.svg';
import avatar from '../img/avatar.png';
import '../css/dashboard.css';
import auth from './firebase/fire';
import Creditcard from './creditcard';
import Transactions from './transactions';
import wallet from '../img/wallet.png';
import apple from '../img/apple.png';
import car from '../img/Emoji.png';
import vacation from '../img/vacation.png';
import { Savingtargets, targets } from './savingtargets';
import Navbar from './Navbar';

function Dashboard() {
  //variables
  const user = auth.currentUser;

  /* all savings targets data  */
  const VacationSavings = new targets(
    'vacation',
    300000,
    1500000,
    'Maldives Vacation'
  );
  const carSavings = new targets('car', 2300000, 3000000, 'Car Savings');

  return (
    <div>
      <img src={icon} alt="ellipse" className="dashboard_ellipse " />

      {/*  Profile section */}
      <section className="profile">
        <img src={avatar} alt="" className="user_avatar" />
        <div className="profile_details">
          <p className="user_name">
            Hello <span>{user && user.displayName}</span>
          </p>
          <p className="last_login">
            Last login :{' '}
            <span>{user && user.metadata.lastSignInTime.slice(0, 16)}</span>
          </p>

          {/*  Credit card section */}
          <section className="credit_card-section">
            <Creditcard />
          </section>
        </div>
      </section>

      {/*  Action buttons section */}
      <div className="action_buttons">
        <button className="send_btn">Send Fund</button>
        <button className="deposit_btn">Deposit</button>
        <button className="bills_btn">Bills</button>
      </div>

      {/*  Recent transactions section */}
      <section className="transaction-section">
        <p className="section_title">Recent Transaction</p>
        <Transactions
          tag="transfer"
          icon={wallet}
          Ricipient="John Fisayo"
          transactionType="Transfer"
          Amount="30000"
        />
        <Transactions
          tag="subscription"
          icon={apple}
          Ricipient="Apple Music"
          transactionType="Montly subscription"
          Amount="1400"
        />
        <Transactions
          tag="transfer"
          icon={wallet}
          Ricipient="Debo Akande"
          transactionType="Transfer"
          Amount="5000"
        />
        <Transactions
          tag="subscription"
          icon={apple}
          Ricipient="Apple Music"
          transactionType="Montly subscription"
          Amount="1400"
        />
      </section>
      {/*  savings target section */}
      <section className="savings_target-section">
        <p className="section_title">Target Savings</p>

        <Savingtargets
          icon={car}
          value={carSavings.progress()}
          savingDescr={carSavings.description}
          amountSaved="2.3M"
          targetAmount="3M"
        />
        <Savingtargets
          icon={vacation}
          value={VacationSavings.progress()}
          savingDescr={VacationSavings.description}
          amountSaved="300k"
          targetAmount="1.5M"
        />
      </section>
      <Navbar />
    </div>
  );
}

export default Dashboard;
