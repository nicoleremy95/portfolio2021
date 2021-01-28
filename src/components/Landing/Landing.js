import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, Container, Box}from '@material-ui/core/';
import Emoji from '../Emoji/Emoji';
import Buttons from '../Buttons/Buttons';
import Logo from '../Logo/Logo';



const useStyles = makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,
       
    },
    animation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 'auto'
    },
    text: {
        textAlign: "justify",
        marginTop: 200
    },
  }),
);


export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1} sm={1} md={3} lg={4} direction="column"></Grid>
                    <Grid item xs={10} sm={8} md={6} lg={4} direction="column">
                        <section>
                            <h1 
                                className={classes.text}
                            >
                                hello my name is Nicole Remy. I am a Full Stack Web Developer with a background in Architecture, Interior Design, Geographic Information Science, and customer service. Welcome to my portfolio.
                            </h1>
                        </section> 
                    </Grid>
            </Grid> 
            <Box className={classes.animation}>
                <Logo/>
            </Box >
            <Grid container >
                <Grid item xs={1} sm={1} md={3} lg={4} direction="column"></Grid>
                {/* <Grid 
                    item xs={10} sm={8} md={6} lg={4}  
                >
                    <Buttons to='/resume' text="Resume"/>
                    <Buttons to='/projects' text="Projects"/> 
                    <Buttons to='/about-me' text="AboutMe"/>    
                </Grid> */}
              
                <Grid 
                    item xs={2} sm={2} md={2} lg={1} direction="column" 
                >
                    <Buttons to='/resume' text="Resume"/>
                </Grid>
                <Grid 
                    item xs={2} sm={2} md={2} lg={1} direction="column"
                >
                    <Buttons to='/projects' text="Projects"/>         
                </Grid>
                <Grid 
                    item xs={2} sm={2} md={2} lg={1} direction="column" 
                >
                    <Buttons to='/about-me' text="AboutMe"/>
                </Grid>
            </Grid>
           
        </div>
    )
}
