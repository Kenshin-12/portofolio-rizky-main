import React from 'react'
import './nav.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from "@mui/material/Avatar";
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillFile} from 'react-icons/ai'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import {AiFillGithub} from 'react-icons/ai'
import {IoLogoVercel} from 'react-icons/io5'


export default function ButtonAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ position: "fixed", maxHeight: 50, padding: 0, float: "center", backgroundColor: 'purple' , backdropFilter: "blur(15px)" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // backgroundColor: 'black'
              }}
            >
                <MenuItem sx={{color: 'black'}} onClick={handleCloseNavMenu}><Link style={{ color: 'black'}} to="/"><AiFillHome className='n-icon'/> Home</Link></MenuItem>
                <MenuItem sx={{color: 'black'}} onClick={handleCloseNavMenu}><Link style={{ color: 'black'}} to="/experience"><BiBook className='n-icon'/> Experiences</Link></MenuItem>
                <MenuItem sx={{color: 'black'}} onClick={handleCloseNavMenu}><Link style={{ color: 'black'}} to="/portofolio"><AiFillFile className='n-icon'/> Project</Link></MenuItem>
                <MenuItem onClick={handleCloseUserMenu}><Link style={{ color: 'black'}} to="/about"><FaUserAlt className='n-icon'/> About</Link></MenuItem>
                <MenuItem onClick={handleCloseUserMenu}><Link style={{ color: 'black'}} to="/contact"><BsFillTelephoneFill className='n-icon'/> Contact</Link></MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "blue", display: "block" }}
              >
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{backgroundColor: "black"}} alt="Remy Sharp" src= "https://i.pinimg.com/originals/18/7f/17/187f170aa5a0eabfbadabb687024725d.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}><a style={{ color: 'black'}} href="https://github.com/Kenshin-12"><AiFillGithub className='n-icon'/> Github</a></MenuItem>
                <MenuItem onClick={handleCloseUserMenu}><a style={{ color: 'black'}} href="https://github.com/Kenshin-12"><IoLogoVercel className='n-icon'/> Vercel</a></MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
