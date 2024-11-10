/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
const pages = [
  { name: "Home", path: "/" },
  { name: "XO GAME", path: "/xo" },
  { name: "MEMPRY GAME", path: "/flap" },
  { name: "Age Calculator", path: "/age" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy", path: "/privacy" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [Mytrue, setMytrue] = useState(false);

  useEffect(() => {
    if (pages.length >= 1) {
      setMytrue(true);
    }
  }, [pages]);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SOUHAIL
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          ></Box>

          {/* menu */}

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            souhail
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                component={Link}
                to={path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map(({ name, path }) => (
              <MenuItem key={name} onClick={handleCloseNavMenu}>
                <Link
                  to={path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography textAlign="center">{name}</Typography>
                </Link>
              </MenuItem>
            ))}
           </Menu>
           {  
           <Box sx={{display:{xs:"block",md:"none"}}}>

          
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {pages.map(({ name, path }, index) => (
              <div key={name}>
                <MenuItem>
                  <Link
                    to={path}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{name}</Typography>
                  </Link>
                </MenuItem>
                {/* Insert Divider after the second item */}
                {Mytrue && index === 0 && <Divider />}
              </div>
            ))}
          </Menu> 
              <Box
              sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ bgcolor:"white",color:'black',width: 32, height: 32 }}><MenuIcon/></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            </Box>
          }
                
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
