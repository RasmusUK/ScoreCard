import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex'  }}>
            <Link to="/" className="header-title">
              Score Card +
            </Link>
          </Typography>

         {/* Full Navigation for Larger Screens */}
         <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Link to="/games" className="nav-link">
              Games
            </Link>
            <Link to="/scores" className="nav-link">
              Scores
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </Box>

          {/* Burger Menu for Small Screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/games" onClick={toggleDrawer(false)}>
            <ListItemText primary="Games" />
          </ListItem>
          <ListItem button component={Link} to="/scores" onClick={toggleDrawer(false)}>
            <ListItemText primary="Scores" />
          </ListItem>
          <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/logout" onClick={toggleDrawer(false)}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;