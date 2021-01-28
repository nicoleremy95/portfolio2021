import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Grid, Container, Typography}from '@material-ui/core/';


const useStyles = makeStyles((theme) =>
  createStyles({
   
    root: {
        flexGrow: 1,
        
    },
    border: {
        marginTop: 200,
        borderStyle: 'solid',
        borderWidth: '20',
        borderColor: 'white',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    // h1: {
    //     fontSize: '200px !important'
    // },
    // p: {
    //     fontSize: '100px !important'
    // }
  }),
);

export default function Aboutme() {
    const classes = useStyles();
    return (
        <div>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
           <div className={classes.root} id="about-me">      
                <h1 className={classes.h1}>ABOUT ME</h1>
                <div className={classes.border}>
                    <h3>2018</h3>
                    <p className={classes.p}>Graduated from the <span><a href="https://www.usc.edu/" target="blank">University of Southern California</a></span> with a B.S. in <span><a href="https://spatial.usc.edu/undergraduate/b-s-in-geodesign/" target="blank">GeoDesign</a></span></p>
                </div>
                <div className={classes.border}>
                    <h3>2020</h3>
                    <p className={classes.p}>Graduated from the <span><a href="https://www.washington.edu/" target="blank">University of Washington </a></span> with a <span><a href="https://bootcamp.uw.edu/" target="blank">Certificate in Full Stack Web Development</a></span></p>
                </div>
                
            </div> 
        </div>
        
        
    )
}


            