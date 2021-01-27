import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core/';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((Theme)=>
    createStyles({
        root: {
            flexGrow: 1,
          },
        link: {
            textDecoration: "none",
        },
        buttonOutline:{
            borderStyle: 'solid',
            borderWidth: '20',
            borderColor: 'white'
        },
        buttonText: {
            margin: 20,
            color: "white !important"

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
                    <Link to='/projects' className={classes.link}>
                        <Button >
                            <div className={classes.buttonOutline}>
                                <p className={classes.buttonText}>PROJECTS</p>
                            </div>
                        </Button>
                    </Link>
                    <Link to='/about-me' className={classes.link}>
                        <Button >
                            <div className={classes.buttonOutline}>
                                <p className={classes.buttonText}>ABOUT ME</p>
                            </div>
                        </Button>
                    </Link>
                    <Link to='/resume' className={classes.link}>
                        <Button >
                            <div className={classes.buttonOutline}>
                                <p className={classes.buttonText}>RESUME</p>
                            </div>
                        </Button>
                    </Link>
                </Grid>
            </Grid> 
            
        </div>
    )
}
