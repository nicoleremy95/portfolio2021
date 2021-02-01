import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, Container, Box}from '@material-ui/core/';
import Emoji from '../Emoji/Emoji';
import Buttons from '../Buttons/Buttons';
import Logo from '../Logo/Logo';
import headshot from '../../images/headshot.jpg';



const useStyles = makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,       
    },
    textContainer: {
        marginBottom: '20px'
    },
    text: {
        textAlign: "justify",
        marginTop: "30px",
        marginBottom: '50px'
    },
    logo: {
        paddingTop: '10vh',
        marginBottom: '150px',
    },
    buttonContainer: {
        marginBottom: '60px',
        justifyContent: 'space-between',
        display: 'flex',
        direction: 'row'
    },
    img: {
        display:"inline-block" ,
        maxWidth:"100px",
        height:"auto"       
    },
  }),
);


export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                    <section 
                        className={classes.logo}
                    >
                        <Logo title="nicole remy"/>
                    </section>
                    {/* <section>
                        <img
                            src={headshot}
                            alt="nicole"
                            className={classes.img}
                        />
                    </section> */}
                    <section 
                        className={classes.textContainer}
                    >
                        <h1 
                            className={classes.text}
                        >
                            Hello. My name is Nicole Remy and I am a Full Stack Web Developer with a background in Architecture, Interior Design, Geographic Information Science, and customer service. Welcome to my portfolio.
                        </h1>
                    </section> 
                    <section 
                        className={classes.buttonContainer}
                    >
                        <Buttons to='/resume' text="Resume"/>
                        <Buttons to='/projects' text="Projects"/> 
                        <Buttons to='/about-me' text="AboutMe"/> 
                    </section>
            </Container> 
            
        </div>
    )
}


 