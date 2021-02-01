import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Logo from '../Logo/Logo';
import Tooltip from '@material-ui/core/Tooltip';
import HomeButton from '../HomeButton/HomeButton';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((Theme) =>
  createStyles({
    appBarLinkBlack: {
        textDecoration: "none",
        color: "black !important"
      }
  }),
);

const options = [
    {
        title: "Home",
        to: '/',
        icon: <HomeIcon/>
    },
    {
        title: "About Me",
        to: '/about-me',
        icon: <AccountCircleIcon/>

    },
    {
        title: "Projects",
        to: '/projects',
        icon: <DevicesIcon/>

        
    },
    {
        title: "Resume",
        to: '/resume',
        icon: <ReceiptIcon/>

    },
    
];

const ITEM_HEIGHT = 48;

export default function Appbar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
          {/* <Appbar> */}
          <Toolbar>
          
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Tooltip title="home" aria-label="home">
              <Link  
                to="/" 
                className={classes.appBarLinkWhite} 
              >
                <HomeButton/>
              </Link>
            </Tooltip>   
            {/* <Logo title="home"/> */}
          </IconButton>
          <IconButton
            // aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            edge="end"
            className={classes.menuButton}
            aria-label="display more actions" 
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.title} selected={option.title === 'Pyxis'} onClick={handleClose}>
                <Link to={option.to} className={classes.appBarLinkBlack}>
                  {option.title}
                  {option.icon}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
       
          {/* </Appbar> */}
        
      </div>
    )
}
