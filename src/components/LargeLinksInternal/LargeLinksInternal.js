import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';


const useStyles = makeStyles(()=>
    createStyles({
        // root: {
        //     flexGrow: 1,
        // },
        link: {
            textDecoration: "none",
            
        },
        icon: {
            color: 'white',
            justifyContent: 'end',
            fontSize: "7vw",
        },
        buttonText: {
            color: "white !important",
            letterSpacing: "2px",
            textTransform: 'uppercase',
            fontSize: '6vw !important',
            textDecoration: 'underline',
            marginTop: '-20px',
            marginBottom: '1vh',

        }
    })
)
export default function LargeLinksInternal(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to={props.to}  className={classes.link} >
                <div className={classes.buttonOutline}>
                    <h1 className={classes.buttonText}>{props.text} <CallMadeIcon className={classes.icon}/></h1>
                </div>
            </Link> 
        </div>
       
    )
}


     