import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Tooltip from '@material-ui/core/Tooltip';
import {Container}from '@material-ui/core/';


const useStyles = makeStyles((theme) =>
  createStyles({
    footerContainer: {
        // backgroundColor:'pink',
        // marginTop: '20px'
        // backgroundColor: "#1a005e",
        // backgroundImage: "linear-gradient(315deg, rgba(230, 164, 144, 0), rgba(230, 164, 144, 0.2))",
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '50px',
        direction: 'row'
    },
    root2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '50px',
        direction: 'row'
    },
    linkWhite: {
        textDecoration: "none",
    },
    icon: {
        fontSize: '100%',
        color: 'var(--thirdColor)',
    },
    linkText: {
        fontSize: '15pt',
        marginLeft: '10px',
        textTransform: 'uppercase',
        background: "-webkit-linear-gradient(var(--thirdColor), var(--secondaryColor))",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
    },
    divider: {
        background: "-webkit-linear-gradient(var(--fourthColor), var(--thirdColor))",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        margin: '10px',
        fontSize: '20px'

    },
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
                </div>
                <div className={classes.root2}>
                        <Tooltip title="email me">
                                <a className={classes.linkWhite} target="blank" href="mailto:nremy@usc.edu"><MailOutlineIcon className={classes.icon}/><span className={classes.linkText}> nremy@usc.edu </span></a>
                        </Tooltip>
                </div>
            
            </Container>
            
        </div>
    )
}
