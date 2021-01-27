import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((Theme)=>
    createStyles({
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
        <div>
            
            <Button >
                <div className={classes.buttonOutline}>
                    <p className={classes.buttonText}>PROJECTS</p>
                </div>
            </Button>
            <Button >
                <div className={classes.buttonOutline}>
                    <p className={classes.buttonText}>ABOUT ME</p>
                </div>
            </Button>
            <Button >
                <div className={classes.buttonOutline}>
                    <p className={classes.buttonText}>RESUME</p>
                </div>
            </Button>
           
        </div>
    )
}
