import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core/';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(()=>
    createStyles({
        root: {
            flexGrow: 1,
        },
        link: {
            textDecoration: "none",
            
        },
        button: {
            '&:hover': {
                backgroundImage: 'linear-gradient(to bottom right, #f56a79,  #1aa6b7)',
            },
        },
        buttonOutline:{
            borderStyle: 'solid',
            borderWidth: '20',
            borderColor: 'white',
            width: '30%',
            height: '30vh',
            position: 'relative',
            padding: '15px',
            display: 'inline-block',
           
        },
        buttonText: {
            color: "white !important",
            transformOrigin: '0 0',
            transform: 'rotate(-90deg)',
            textOrientation: "upright",
            letterSpacing: "2px",
            textTransform: 'uppercase',
            justifyContent: 'start',
            fontSize: '1rem !important',
            position: 'absolute',
            bottom: 0,
            left: 0,
            marginLeft: '10px',
        }
    })
)
export default function Buttons(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <Link to={props.to} className={classes.link} >
                 <Button className={classes.button}>
                    <div className={classes.buttonOutline}>
                        <p className={classes.buttonText}>{props.text}</p>
                    </div>
                 </Button>
            </Link> 
        </div>
       
    )
}


     