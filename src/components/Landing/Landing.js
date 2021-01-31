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
        // zIndex: "-1"
        // margin: 'auto'
    },
    text: {
        textAlign: "justify",
        marginTop: 200
    },
    logo: {
        paddingTop: '20vh'
    }
  }),
);


export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                        <section className={classes.logo}>
                            <Logo title="nicole remy"/>
                        </section>
                    <Grid item xs={12}  direction="column">
                        
                        <section>
                            <h1 
                                className={classes.text}
                            >
                                hello my name is Nicole Remy. I am a Full Stack Web Developer with a background in Architecture, Interior Design, Geographic Information Science, and customer service. Welcome to my portfolio.
                            </h1>
                        </section> 
                    </Grid>
            </Container> 
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="baseline" 
            >
                <Grid item xs={1} sm={1} md={3} lg={4} direction="column"></Grid> 
                    <Buttons to='/resume' text="Resume"/>
                    <Buttons to='/projects' text="Projects"/> 
                    <Buttons to='/about-me' text="AboutMe"/> 
                <Grid item xs={1} sm={1} md={2} lg={3} direction="column"></Grid> 

            </Grid>
        </div>
    )
}


 