import { RotateLeft } from '@material-ui/icons'
import React from 'react';
import {Container, Grid} from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import ButtonsHorizontal from '../ButtonsHorizontal/ButtonsHorizontal';
import GitHubIcon from '@material-ui/icons/GitHub';
import DevicesIcon from '@material-ui/icons/Devices';


const useStyles = makeStyles((Theme) =>
  createStyles({
    text: {
        textAlign: "justify",
    },
    projectOutline:{
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
        padding: '15px',
    },
    linkWhite: {
        textDecoration: "none",
        color: "white !important",
      },
    linkText: {
        marginLeft: '10px',
        fontSize: '20px'
    },
    divider: {
        color: "white ",
        margin: '20px',
        fontSize: '30px'

    },
    project: {
        color: "white !important",
        transformOrigin: '0 0',
        transform: 'rotate(-90deg)',
        letterSpacing: "2px",
        // marginTop: '100px',
        position: 'fixed',
        fontSize: '7vw !important'
    }
  }),
);

export default function PortfolioCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={2}>
                        <h1 className={classes.project}>PROJECTS</h1> 
                    </Grid>
                    <Grid item xs={10} className={classes.projectOutline}>
                        <ButtonsHorizontal to={props.app} text={props.name}/>
                        <h2>{props.role}</h2>
                        <h2>{props.type}</h2>
                        <h3>{props.tech}</h3>
                        <h3>{props.description}</h3>
                        <h3 className={classes.text}>{props.info}</h3>
                
                    
                        {props.githubFront && props.githubBack? 
                            <div>
                                <div>
                                <Tooltip title="view Application">
                                    <a className={classes.linkWhite} target="blank" href={props.app}><DevicesIcon/><span className={classes.linkText}>Application</span></a>
                                </Tooltip>
                                </div>
                            <span>
                                <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href={props.githubFront}><GitHubIcon/><span className={classes.linkText}>Github Views</span></a>
                                </Tooltip>
                                {/* <span className={classes.divider2}>/</span> */}
                                <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href={props.githubBack}><GitHubIcon/><span className={classes.linkText}>Github API</span></a>
                                </Tooltip>
                                </span>
                            </div>
                            : 
                            <div>
                                <Tooltip title="view Application">
                                    <a className={classes.linkWhite} target="blank" href={props.app}><DevicesIcon/><span className={classes.linkText}>Application</span></a>
                                </Tooltip>
                                <span className={classes.divider}>/</span>
                                <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href={props.github}><GitHubIcon/><span className={classes.linkText}>Github</span></a>
                                </Tooltip>
                            </div>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
