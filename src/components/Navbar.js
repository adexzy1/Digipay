import React from 'react';
import { MdQrCodeScanner } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import '../css/dashboard.css';
import { useState } from 'react';
import LogoutNav from './LogoutNAv';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  const [show, setShow] = useState(false);
  function removeProfileDialogue() {
    setShow(false);
  }

  return (
    <div>
      <nav className="navigation_section">
        <Link to="/dashboard" className="navItem svg">
          <MdHome />
        </Link>
        <Link to="/qrscanner" className="navItem " id="qr_scanner">
          <MdQrCodeScanner />
        </Link>

        <div className="navItem svg">
          <IoMdPerson
            onClick={() => {
              setShow(true);
            }}
          />
          <LogoutNav showset={removeProfileDialogue} menuToggle={show} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
