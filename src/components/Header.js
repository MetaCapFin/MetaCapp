import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header-gradient">
      <Toolbar>
        <img src="/LogoName.png" alt="Logo Name" style={{ height: '40px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
