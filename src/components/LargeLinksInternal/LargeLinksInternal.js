import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CallMadeIcon from '@material-ui/icons/CallMade';
import './largelinks.css'


const useStyles = makeStyles(()=>
    createStyles({
        icon: {
            color: 'white',
            justifyContent: 'end',
            fontSize: "7vw",
        },
        buttonText: {
            // color: "white !important",
            letterSpacing: "2px",
            textTransform: 'uppercase',
            fontSize: '6vw !important',
            textDecoration: 'underline',
            marginTop: '-20px',
            marginBottom: '1vh',
            // "-webkit-text-stroke": ".25px gray",
            // "-webkit-text-fill-color": "white",
            // background: "linear-gradient(to right,var(#ff9800) 0%,var(#ff9800) 5px,transparent 5px)",
            // backgroundRepeat: "repeat-x",
            // backgroundSize: "100%",
            // color: "#000",
            // paddingLeft: "10px",
            // textDecoration: "none",
            '&:hover': {
                backgroundImage:"linear-gradient(to right,var(black) 0%,var(black) 5px,transparent)",
            }
        },
    })
)
export default function LargeLinksInternal(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link 
                to={props.to}  
                className="thing"
            >
                <div 
                    className="thing"
                >
                    <h1 
                        // className={classes.buttonText}
                        className="text"
                    >
                        {props.text} 
                        <CallMadeIcon className={classes.icon}/>
                    </h1>
                </div>
            </Link> 
        </div>
       
    )
}


     