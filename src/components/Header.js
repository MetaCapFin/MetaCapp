import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: 'linear-gradient(to bottom, black, rgba(0, 0, 0, 0))' }}>
      <Toolbar>
        <img src="/LogoName.png" alt="Logo Name" style={{ height: '40px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
