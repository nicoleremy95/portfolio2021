import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';


const useStyles = makeStyles(()=>
    createStyles({
        root: {
            flexGrow: 1,
            marginLeft: '-10px'
        },
        link: {
            textDecoration: "none",
            
        },
        buttonOutline:{
            '&:hover': {
                backgroundImage: 'linear-gradient(to bottom right, #f56a79,  #1aa6b7)',
            },

            borderStyle: 'solid',
            borderWidth: '20',
            borderColor: 'white',
            width: '250px',
            height: 'auto',
        },
        icon: {
            color: 'white',
            justifyContent: 'end',
        },
        buttonText: {
            padding: '10px',
            color: "white !important",
            letterSpacing: "2px",
            textTransform: 'uppercase',
            justifyContent: 'start',
            fontSize: '30px !important',
            position: 'relative',
        }
    })
)
export default function Buttons(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <a href={props.to} target="blank" className={classes.link} >
                 <Button>
                    <div className={classes.buttonOutline}>
                       
                        <p className={classes.buttonText}>{props.text} <CallMadeIcon className={classes.icon}/></p>
                        
                    </div>
                 </Button>
            </a> 
        </div>
       
    )
}


     