import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Tooltip from '@material-ui/core/Tooltip';
import {Grid, Container, Typography}from '@material-ui/core/';


const useStyles = makeStyles((theme) =>
  createStyles({
    footerContainer: {
        // backgroundColor:'pink',
        // marginTop: '20px'
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px'
    },
    linkWhite: {
        textDecoration: "none",
        color: "white !important",
        // fontSize: '4vh'
    },
    icon: {
        fontSize: '100%',
        color: '#1aa6b7',
        // marginLeft: '1%'
    },
    linkText: {
        fontSize: '100%',
        textTransform: 'uppercase',
        background: "-webkit-linear-gradient(#1aa6b7, #ff414d)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",

    },
    divider: {
        // color: "white ",
        background: "-webkit-linear-gradient(#1aa6b7, #ff414d)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        margin: '10px',
        fontSize: '20px'

    },
    title: {
        // margin: '20px'
    }
  }),
);

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <Container maxWidth="sm">
                <div className={classes.root}>
                        <Tooltip title="view github">
                            <a className={classes.linkWhite} target="blank" href="https://www.linkedin.com/in/nicole-remy-190202166/"><GitHubIcon className={classes.icon}/><span className={classes.linkText}>github</span></a>
                        </Tooltip>
                        <span className={classes.divider}>/</span>

                        <Tooltip title="view linkedin">
                                <a className={classes.linkWhite} target="blank" href="https://www.linkedin.com/in/nicole-remy-190202166/"><LinkedInIcon className={classes.icon}/><span className={classes.linkText}>linkedin</span></a>
                        </Tooltip>
                        <span className={classes.divider}>/</span>
                        <Tooltip title="email me">
                                <a className={classes.linkWhite} target="blank" href="mailto:nremy@usc.edu"><MailOutlineIcon className={classes.icon}/><span className={classes.linkText}> nremy@usc.edu </span></a>
                        </Tooltip>
                </div>
            
            </Container>
            
        </div>
    )
}
