import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, Container, Typography}from '@material-ui/core/';
import Logo from '../Logo/Logo';
import { Icon, InlineIcon } from '@iconify/react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tooltip from '@material-ui/core/Tooltip';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import mysqlIcon from '@iconify-icons/grommet-icons/mysql';
import antDesignOutlined from '@iconify-icons/ant-design/ant-design-outlined';
import handlebarsIcon from '@iconify-icons/logos/handlebars';
import materializecssIcon from '@iconify-icons/logos/materializecss';
import bxlJquery from '@iconify-icons/bx/bxl-jquery';
//Brands Style : fab
import { 
    faJs, 
    faCss3,
    faReact,
    faNode,
    faNpm,
    faHtml5,
    faBootstrap
  } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) =>
  createStyles({
   
    root: {
        flexGrow: 1,
        padding: "4vh",
        
    },
    techBox: {
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'space-between',
        display: 'flex',
        direction: 'row'
    },
    tech: {
        margin: "2%vw",
    },
    sections: {
        marginTop: '30vh'
    },
    border: {
        marginBottom: "3vh",
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
        padding: "10px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    year: {
        color: "white !important",
        letterSpacing: "2px",
        textTransform: 'uppercase',
        fontSize: '5vh !important',
    },
    p: {
        fontSize: '3vh !important',
    },
    linkWhite: {
        textDecoration: "none",
        color: "white !important",
        // fontSize: '4vh'
    },
    icon: {
        fontSize: '4vw',
    },
    linkText: {
        marginLeft: '10px',
        fontSize: '3vw',
        textTransform: 'uppercase'
    },
    divider: {
        color: "white ",
        margin: '10px',
        fontSize: '4vw'

    },
  }),
);

const skills =[
    <FontAwesomeIcon  icon={faCss3} size="2x"/>,
    <FontAwesomeIcon icon={faHtml5} size="2x" />,
    <FontAwesomeIcon icon={faJs} size="2x"/>,
    <FontAwesomeIcon icon={faReact} size="2x" />,
    <FontAwesomeIcon icon={faNode} size="2x" />,
    <FontAwesomeIcon icon={faNpm} size="2x"/>,
    <Icon className="Portfolio-tech-icons" icon={antDesignOutlined}  height="30"/>,
    <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="30"/>,
    <Icon icon={materializecssIcon}  height="30"/>,
    <Icon icon={mysqlIcon}  height="30"/>,
    <Icon icon={handlebarsIcon}  width="30"/>,
    <Icon className="Portfolio-tech-icons" icon={bxlJquery}  height="30"/>,
    <FontAwesomeIcon icon={faBootstrap} size="2x" /> ,
]

export default function Aboutme() {
    const classes = useStyles();
    return (
        <div>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
           <div className={classes.root} id="about-me">  
            <Container maxWidth="md">
                <section className={classes.logo}>
                    <Logo title="about me" />
                </section>  
                <section className={classes.sections}>
                    <div className={classes.border}>
                        <h1 className={classes.year}>contact</h1>
                        
                        
                        <Tooltip title="view GitHub">
                                    <a className={classes.linkWhite} target="blank" href="https://www.linkedin.com/in/nicole-remy-190202166/"><GitHubIcon className={classes.icon}/><span className={classes.linkText}>Github</span></a>
                         </Tooltip>
                         <span className={classes.divider}>/</span>

                        <Tooltip title="view Linkedin">
                                    <a className={classes.linkWhite} target="blank" href="https://www.linkedin.com/in/nicole-remy-190202166/"><LinkedInIcon className={classes.icon}/><span className={classes.linkText}>Linkedin</span></a>
                         </Tooltip>
                         <span className={classes.divider}>/</span>
                         <Tooltip title="email me">
                                    <a className={classes.linkWhite} target="blank" href="mailto:nremy@usc.edu"><MailOutlineIcon className={classes.icon}/><span className={classes.linkText}> nremy@usc.edu </span></a>
                         </Tooltip>

                    </div>
                    <div className={classes.border}>
                        <h1 className={classes.year}>Bio</h1>
                        <h3>Full Stack Web Developer with a background in Architecture, Geographic Information Science, and customer service. Self-motivated with a strong work ethic and a passion for problem solving, innovating, and learning. Experience working/communicating with stakeholders and collaborating in teams. Committed to leadership, thinking out of the box, and acquiring new skills. 
                        </h3>
                    </div>
                    <div className={classes.border}>
                        <h1 className={classes.year}>Education</h1>
                    
                        {/* <h3 className={classes.year}>2018</h3>    */}
                        <p className={classes.p}>2018  · <span><a href="https://www.usc.edu/" target="blank">University of Southern California</a></span>  · B.S. in <span><a href="https://spatial.usc.edu/undergraduate/b-s-in-geodesign/" target="blank">GeoDesign</a></span></p>
                        <p className={classes.p}> 2020  ·  <span><a href="https://www.washington.edu/" target="blank">University of Washington </a></span>  ·  Certificate in <span><a href="https://bootcamp.uw.edu/" target="blank">Full Stack Web Development</a></span></p>
                    </div>
                    <div className={classes.border}>
                        <h1 className={classes.year}>Skills</h1>
                        <div className={classes.techBox}>
                        <FontAwesomeIcon   icon={faCss3} size="1x"/>
    <FontAwesomeIcon  icon={faHtml5} size="1x" />
    <FontAwesomeIcon  icon={faJs} size="1x"/>
    <FontAwesomeIcon  icon={faReact} size="1x" />
    <FontAwesomeIcon  icon={faNode} size="1x" />
    <FontAwesomeIcon  icon={faNpm} size="1x"/>
    <Icon   icon={antDesignOutlined}  height="20"/>
    <Icon   icon={mongodbIcon}  height="20"/>
    <Icon   con={materializecssIcon}  height="20"/>
    <Icon  icon={mysqlIcon}  height="20"/>
    <Icon  icon={handlebarsIcon}  width="20"/>
    <Icon   icon={bxlJquery}  height="20"/>
    <FontAwesomeIcon  icon={faBootstrap} size="1x" /> 
                        </div>
                       
                        {/* {skills.map(thing=>{
                            <span
                             className={classes.tech}>thing
                           </span>
                        })} */}
                    </div>
                
                </section>
                
            </Container>    
                
            </div> 
        </div>
        
        
    )
}


            