import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import {Grid, Paper }from '@material-ui/core/';


const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    border: {
        marginTop: 500,
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
    },
    h1: {
        fontSize: '200px !important'
    },
    p: {
        fontSize: '100px !important'
    }
  }),
);

export default function Aboutme() {
    const classes = useStyles();
    return (
        
            <Grid container>
                <Grid item xs={10} sm={8} md={8} lg={8} direction="column">
                <div className={classes.root} id="about-me">
            <div className={classes.border}>
                    <h1 className={classes.h1}>ABOUT ME</h1>
                <p className={classes.p}>Graduated from the <span><a href="https://www.usc.edu/" target="blank">University of Southern California</a></span> in 2018 with a B.S. in <span><a href="https://spatial.usc.edu/undergraduate/b-s-in-geodesign/" target="blank">GeoDesign</a></span></p>
                <p className={classes.p}>Graduated from the <span><a href="https://www.washington.edu/" target="blank">University of Washington </a></span> in 2020 with <span><a href="https://bootcamp.uw.edu/" target="blank">Certificate in Full Stack Web Development</a></span></p>
        
            </div>
            
        </div>
        </Grid>
            </Grid>
            
    )
}

