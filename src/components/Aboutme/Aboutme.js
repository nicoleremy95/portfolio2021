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
    year: {
        color: "white !important",
        // transformOrigin: '0 0',
        transform: 'rotate(-90deg)',
        textOrientation: "upright",
        letterSpacing: "2px",
        textTransform: 'uppercase',
        // justifyContent: 'start',
        fontSize: '10rem !important',
        position: 'sticky',
        // bottom: 0,
        // left: 0,
        marginLeft: '10px',
    },
    // h1: {
    //     fontSize: '200px !important'
    // },
    p: {
        fontSize: '5rem !important',
    }
  }),
);

export default function Aboutme() {
    const classes = useStyles();
    return (
        <div>
            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
           <div className={classes.root} id="about-me">      
                <h1 className={classes.h1}>ABOUT ME</h1>
                <Grid
                    container
                    direction="row"
                    // justify="space-between"
                    alignItems="baseline" 
                >
                    <Grid item xs={1} sm={1} md={2} lg={2} direction="column"></Grid> 
                    <Grid>
                    <h1 className={classes.year}>2018</h1>
                    </Grid>
                    <Grid>
                        <div className={classes.border}>
                            <p className={classes.p}>Graduated from the <span><a href="https://www.usc.edu/" target="blank">University of Southern California</a></span> with a B.S. in <span><a href="https://spatial.usc.edu/undergraduate/b-s-in-geodesign/" target="blank">GeoDesign</a></span></p>
                        </div>
                    </Grid>
                </Grid>
                
             
             
                <div className={classes.border}>
                    <h3>2020</h3>
                    <p className={classes.p}>Graduated from the <span><a href="https://www.washington.edu/" target="blank">University of Washington </a></span> with a <span><a href="https://bootcamp.uw.edu/" target="blank">Certificate in Full Stack Web Development</a></span></p>
                </div>
                
            </div> 
        </div>
        
        
    )
}


            