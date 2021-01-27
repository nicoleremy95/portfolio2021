import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Grid, Paper }from '@material-ui/core/';


const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
      },
    paper: {
        
    },
    text: {
        textAlign: "justify",
    }
  }),
);


export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1} sm={1} md={3} lg={4} direction="column"></Grid>
                    <Grid item xs={10} sm={8} md={6} lg={4} direction="column">
                        <Paper className={classes.paper}>
                            <h1 className={classes.text}> hello, my name is Nicole Remy. I am a Full Stack Web Developer with a background in Architecture, Interior Design, Geographic Information Science, and customer service. Welcome to my portfolio.</h1>
                        </Paper>
                    </Grid>
            </Grid> 
        </div>
    )
}
