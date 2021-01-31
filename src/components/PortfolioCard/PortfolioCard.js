import { RotateLeft } from '@material-ui/icons'
import React from 'react';
import {Container, Grid} from '@material-ui/core/';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import LargeLinks from '../LargeLinks/LargeLinks';
import GitHubIcon from '@material-ui/icons/GitHub';
import DevicesIcon from '@material-ui/icons/Devices';


const useStyles = makeStyles((Theme) =>
  createStyles({
    container: {
        position: 'relative'
    },
    text: {
        textAlign: "center",
    },
    projectOutline:{
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
        padding: '15px',
        marginBottom: '40px',
        // paddingTop: '-20px'
    },
    linkWhite: {
        textDecoration: "none",
        color: "white !important",
    },
    linkText: {
        marginLeft: '10px',
        fontSize: '4vw'
    },
    divider: {
        color: "white ",
        margin: '10px',
        fontSize: '4vw'

    },
    project: {
        color: "white !important",
        transformOrigin: '0 0',
        transform: 'rotate(-90deg)',
        letterSpacing: "2px",
        position: 'fixed',
        fontSize: '7vw !important'
    },
    icon: {
        fontSize: '4vw',
    },
    tech: {
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'space-between',
        display: 'flex',
        direction: 'row'

    },
    image:{
        maxWidth: '100%',
        // justifyContent: 'center',
        // display: 'flex'
    },
    description: {
        display: 'flex',
        justifyItems: 'center',
        fontSize: '3vh !important'
        // textTransform: 'uppercase'
    },
    role: {
        textTransform: 'uppercase',
        

    },
    type: {
        textAlign: 'center',
        fontSize: '2vh !important',

    }
  }),
);

export default function PortfolioCard(props) {
    const classes = useStyles();
    
    
    return (
        <div>
               
            
            <Container maxWidth="md" className={classes.contianer}>
                <Grid container >
                    {/* <Grid item xs={1} sm={1} md={2} lg={2}> */}
                        {/* <h1 className={classes.project}>PROJECTS</h1>  */}
                    {/* </Grid> */}
                    <Grid 
                        // item xs={10} 
                        className={classes.projectOutline}
                    >
                        <LargeLinks to={props.app} text={props.name}/>

                        <div justifyContent="center"><img className={classes.image} src={props.img} alt={props.name}/></div>
                        <div className={classes.text}><h3 >{props.description}</h3></div>

                        {/* <h2 className={classes.description}>{props.description}</h2> */}
                        
                        {props.role? 
                            <div className={classes.type}>
                                <h3 ><span className={classes.role}>{props.role} · {props.work} ·  Team size: {props.type}</span></h3>
                                
                            </div>
                            : 
                            // <div className={classes.type}><h4 >{props.type}</h4></div>
                            null
                            }
                        
                        {/* <h4>Team size: {props.type}</h4> */}
                        <div className={classes.tech}>{props.tech}</div>

                        {props.githubFront && props.githubBack? 
                            <div>
                                <div>
                                <Tooltip title="view Application">
                                    <a className={classes.linkWhite} target="blank" href={props.app}><DevicesIcon className={classes.icon}/><span className={classes.linkText}>Application</span></a>
                                </Tooltip>
                                </div>
                            <span>
                            {/* <div> */}
                                <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href={props.githubFront}><GitHubIcon className={classes.icon}/><span className={classes.linkText}>Github Views</span></a>
                                </Tooltip>
                                {/* </div> */}
                                <span className={classes.divider}>/</span>
                                <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href={props.githubBack}><GitHubIcon className={classes.icon}/><span className={classes.linkText}>Github API</span></a>
                                </Tooltip>
                                </span>
                            </div>
                            : 
                            <div>
                                <Tooltip title="view Application">
                                    <a className={classes.linkWhite} target="blank" href={props.app}><DevicesIcon className={classes.icon}/><span className={classes.linkText}>Application</span></a>
                                </Tooltip>
                                <span className={classes.divider}>/</span>
                                <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href={props.github}><GitHubIcon className={classes.icon}/><span className={classes.linkText}>Github</span></a>
                                </Tooltip>
                            </div>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
