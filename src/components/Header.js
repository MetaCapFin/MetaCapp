import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="https://github.com/MetaCapFin/MetaCapp/main/backend/assets/LogoName.png" alt="Logo Name" style={{ height: '40px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
