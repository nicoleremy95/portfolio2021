import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core/';
import { Link } from 'react-scroll';


const useStyles = makeStyles((Theme)=>
    createStyles({
        root: {
            flexGrow: 1,
          },
        // buttons: {
        //     display: 'flex',
        //     justifyContent: 'center'
        // },
        buttonOutline:{
            borderStyle: 'solid',
            borderWidth: '20',
            borderColor: 'white'
        },
        buttonText: {
            margin: 20
        }
    })
)
export default function Buttons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={1} sm={1} md={3} lg={4} direction="column"></Grid>
                <Grid item xs={10} sm={8} md={6} lg={4} direction="column" >
                    <Link to="about-me">
                        <Button >
                            <div className={classes.buttonOutline}>
                                <p className={classes.buttonText}>PROJECTS</p>
                            </div>
                        </Button>
                    </Link>
                    
                    <Button >
                        <div className={classes.buttonOutline}>
                            <p className={classes.buttonText}>ABOUT ME</p>
                        </div>
                    </Button>
                    <Button to="resume">
                        <div className={classes.buttonOutline}>
                            <p className={classes.buttonText}>RESUME</p>
                        </div>
                    </Button>
           
                </Grid>
            </Grid> 
            
        </div>
    )
}
