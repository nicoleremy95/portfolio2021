import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import CallMadeIcon from '@material-ui/icons/CallMade';


const useStyles = makeStyles(()=>
    createStyles({
        root: {
            flexGrow: 1,
        
        },
        link: {
            textDecoration: "none",
        },
        icon: {
            color: 'white',
            justifyContent: 'end',
            fontSize: "7vw",
        },
        buttonText: {
            color: "var(--thirdColor) !important",
            // color: "white !important",
            letterSpacing: "2px",
            textTransform: 'uppercase',
            fontSize: '6vw !important',
            // textDecoration: 'underline',
            marginTop: '-20px',
            marginBottom: "20px",

            "&:hover":{
                background:"linear-gradient(to right,var(--fourthColor) 0%,var(--fourthColor) 5px,transparent)",
            }

        }
    })
)
export default function LargeLinksExternal(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <a href={props.to} target="blank" className={classes.link} >
                <div className={classes.buttonOutline}>
                    <h1 className={classes.buttonText}>{props.text} <CallMadeIcon className={classes.icon}/></h1>
                </div>
            </a> 
        </div>
       
    )
}


     