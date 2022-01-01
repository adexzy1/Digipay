import React from 'react';
import icon from '../img/loginEllipse.svg';
import '../css/dashboard.css';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { IoIosFlashlight } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import receiver from '../img/receiver.png';
import qrscan from '../img/qr-code-scan.png';

function Qrscanner() {
  return (
    <div className="qrscanner">
      <img src={icon} alt="icon" className="dashboard_ellipse " />
      <section className="qr_nav">
        <Link to="/" className="back_to-home">
          <RiArrowLeftSLine />
        </Link>
        <p className="pay">Pay</p>
      </section>
      <section className="receiver_container">
        <section className="receiver">
          <div>
            <img src={receiver} alt="receiver" />
            <span>
              <p>Grace Tutu</p>
              <p className="transaction_type">Transfer</p>
            </span>
          </div>
          <p className="amount">₦5,000</p>
        </section>
        <p className="add_recipient">Add another Recipeint</p>
      </section>

      <section className="scanner_container">
        <section className="scanner">
          <img src={qrscan} alt="qr scanner" />
        </section>
        <p className="scanner_text">
          Please <span>scan</span> generated QR Code to send Money
        </p>
        <IoIosFlashlight />
      </section>

      <Navbar />
    </div>
  );
}

export default Qrscanner;
