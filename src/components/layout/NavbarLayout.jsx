// src/components/layout/NavbarLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // 👈 ඔයා දැනටමත් හදලා තියෙන Navbar එක මෙතනට සම්භන්ධ කළා

const NavbarLayout = () => {
  return (
    <>
      <Navbar /> {/* ඔයාගේ පරණ Navbar එක උඩින්ම තියෙනවා */}
      <Outlet /> {/* මේ Outlet එක ඇතුලට තමයි Home, Login පිටු ලෝඩ් වෙන්නේ */}
    </>
  );
};

export default NavbarLayout;