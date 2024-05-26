// src/pages/Home.js
import React, { useState } from 'react';

import { CgProfile } from "react-icons/cg";
import logo from '../Components/assets/logoDigital1.png';
import Logout from './Logout';

const Navbar = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogooutClick = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return <div bg-white>

    <div className="fixed top-0 w-full flex justify-between items-center p-4 shadow-md" style={{ backgroundColor: "#662671" }}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex items-center">
        <CgProfile className="h-8 w-8  rounded-full" onClick={handleLogooutClick} />
      </div>
    </div>

    <Logout isVisible={isModalVisible} onClose={handleCloseModal} />
  </div>;
};

export default Navbar;
