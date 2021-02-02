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
        // marginBottom: '100px'
    },
    techBox: {
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'space-around',
        display: 'flex',
        direction: 'row'
    },
    tech: {
        margin: "2%vw",
    },
    sections: {
        // marginBottom: '600px',
    },
    borderOdd: {
        marginBottom: "3vh",
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
        padding: "10px",
        backgroundImage: "linear-gradient(to bottom right, var(--fourthColor ), var(--mainColor));",  

    },
    borderEven: {
        marginBottom: "3vh",
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
        padding: "10px",
        backgroundImage: "linear-gradient(to bottom right, var(--thirdColor ), var(--mainColor));",  

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: "white !important",
        letterSpacing: "2px",
        textTransform: 'uppercase',
        fontSize: '4vh !important',
        // "-webkit-text-stroke": ".25px gray",
        // "-webkit-text-fill-color": "white",
    },
    p: {
        fontSize: '3vh !important',
    },
    linkWhite: {
        textDecoration: "none",
        color: "white !important",
    },
    icon: {
        fontSize: '15pt',
    },
    linkText: {
        marginLeft: '10px',
        fontSize: '15pt',
        textTransform: 'uppercase'
    },
    divider: {
        color: "white ",
        margin: '10px',
        fontSize: '15pt'

    },
    logo: {
        paddingTop: '20px',
        marginBottom: '150px',
    },
    bio: {
        textAlign: 'justify'
    }
  }),
);

const skills =[
    <FontAwesomeIcon icon={faCss3} size="3x"/>,
    <FontAwesomeIcon icon={faHtml5} size="3x" />,
    <FontAwesomeIcon icon={faJs} size="3x"/>,
    <FontAwesomeIcon icon={faReact} size="3x" />,
    <FontAwesomeIcon icon={faNode} size="3x" />,
    <FontAwesomeIcon icon={faNpm} size="3x"/>,
    <Icon className="Portfolio-tech-icons" icon={antDesignOutlined}  height="30"/>,
    <Icon className="Portfolio-tech-icons" icon={mongodbIcon}  height="30"/>,
    <Icon icon={materializecssIcon}  height="30"/>,
    <Icon icon={mysqlIcon}  height="30"/>,
    <Icon icon={handlebarsIcon}  width="30"/>,
    <Icon className="Portfolio-tech-icons" icon={bxlJquery}  height="30"/>,
    <FontAwesomeIcon icon={faBootstrap} size="3x" /> ,
]

export default function Aboutme() {
    const classes = useStyles();
    return (
        <div>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <div className={classes.root}>  
                <Container maxWidth="md">
                    <section className={classes.logo}>
                        <Logo title="about me" />
                    </section>
                    <section >
                        <div className={classes.borderOdd}>
                            <h1 className={classes.title}>contact</h1>
                            
                            
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
                    </section>
                    <section>
                        <div className={classes.borderEven}>
                            <h1 className={classes.title}>Bio</h1>
                            <h3 className={classes.bio}>Full Stack Web Developer with a background in Architecture, Geographic Information Science, and customer service. Self-motivated with a strong work ethic and a passion for problem solving, innovating, and learning. Experience working/communicating with stakeholders and collaborating in teams. Committed to leadership, thinking out of the box, and acquiring new skills. 
                            </h3>
                        </div>
                    </section>  
                    <section className={classes.sections}>
                        <div className={classes.borderOdd}>
                            <h1 className={classes.title}>Education</h1>
                            {/* <h3 className={classes.title}>2018</h3>    */}
                            <h3 className={classes.p}>2018  · <span><a href="https://www.usc.edu/" target="blank">University of Southern California</a></span>  · B.S. in <span><a href="https://spatial.usc.edu/undergraduate/b-s-in-geodesign/" target="blank">GeoDesign</a></span>  ·  3.61 GPA</h3>
                            <h3 className={classes.p}> 2020  ·  <span><a href="https://www.washington.edu/" target="blank">University of Washington </a></span>  ·  Certificate in <span><a href="https://bootcamp.uw.edu/" target="blank">Full Stack Web Development</a></span>  ·  4.00 GPA</h3>
                        </div>
                        <div className={classes.borderEven}>
                            <h1 className={classes.title}>Skills</h1>
                            <div className={classes.techBox}>
                                <FontAwesomeIcon   icon={faCss3} size="2x"/>
                                <FontAwesomeIcon  icon={faHtml5} size="2x" />
                                <FontAwesomeIcon  icon={faJs} size="2x"/>
                                <FontAwesomeIcon  icon={faReact} size="2x" />
                                <FontAwesomeIcon  icon={faNode} size="2x" />
                                <FontAwesomeIcon  icon={faNpm} size="2x"/>
                            </div>
                            <div className={classes.techBox}>
                            <FontAwesomeIcon  icon={faBootstrap} size="2x" /> 
                                <Icon   icon={antDesignOutlined}  height="30"/>
                                <Icon   icon={mongodbIcon}  height="30"/>
                                <Icon   con={materializecssIcon}  height="30"/>
                                <Icon  icon={mysqlIcon}  height="30"/>
                                <Icon  icon={handlebarsIcon}  width="30"/>
                                <Icon   icon={bxlJquery}  height="30"/>
                            </div>
                        </div>
                    </section>
                </Container>   
            </div> 
        </div>
        
        
    )
}


            