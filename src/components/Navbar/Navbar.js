
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeButton from '../HomeButton/HomeButton';
import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: 'white'
      },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
    color: 'black',
    textTransform: 'uppercase'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBarLinkBlack: {
    textDecoration: "none",
    color: "black !important"
  },
  homeBtnLink: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="black">
            <Link
                to="/projects"
                className={classes.appBarLinkBlack}
            >
                <DevicesIcon/>
            </Link>
        </IconButton>
        <p>Projects</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="black">
            <Link
                to="/about-me"
                className={classes.appBarLinkBlack}
            >
                <AccountCircleIcon/>
            </Link>
        </IconButton>
        <p>About Me</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          color="black"
        >
            <Link
                to="/resume"
                className={classes.appBarLinkBlack}
            >
                <ReceiptIcon/>
            </Link>
        </IconButton>
        <p>Resume</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="black"
            aria-label="open drawer"
          >
            <Tooltip title="home" aria-label="home">
                <Link
                  className={classes.homeBtnLink}
                  to="/"
                >
                  <HomeButton />
                </Link>
            </Tooltip>
          </IconButton>
          
            <Link
              className={classes.appBarLinkBlack}
              to="/"
            >
              <Typography className={classes.title} noWrap>
              <h1>Nicole Remy</h1>
              </Typography>

            </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="black">
                <Tooltip title="about me" aria-label="about me">
                    <Link
                        to="/about-me"
                        className={classes.appBarLinkBlack}
                    >
                        {/* <AccountCircleIcon/> */}
                        <h3>about me /</h3>
                    </Link>
                </Tooltip>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="black">
                <Tooltip title="projects" aria-label="projects">
                    <Link
                        to="/projects"
                        className={classes.appBarLinkBlack}
                    >
                        {/* <DevicesIcon/> */}
                        <h3>projects /</h3>
                    </Link>
                </Tooltip>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              color="black"
            >
                <Tooltip title="resume" aria-label="resume">
                    <Link
                        to="/resume"
                        className={classes.appBarLinkBlack}
                    >
                        {/* <ReceiptIcon/> */}
                        <h3>resume </h3>
                    </Link>
                </Tooltip>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}
