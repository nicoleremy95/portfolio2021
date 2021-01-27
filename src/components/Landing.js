import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Grid, Paper }from '@material-ui/core/';
import Emoji from './Emoji';


const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
      },
    text: {
        textAlign: "justify",
        marginTop: 500

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
                       
                            <h1 
                                className={classes.text}
                            >
                                <Emoji 
                                className={classes.emoji}
                                label="waving-hand" symbol="👋🏽"/> 
                                hello my name is Nicole Remy. I am a Full Stack Web Developer with a background in Architecture, Interior Design, Geographic Information Science, and customer service. Welcome to my portfolio.
                            </h1>
                        
                    </Grid>
            </Grid> 
        </div>
    )
}
