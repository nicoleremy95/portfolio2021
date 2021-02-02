import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Landing from '../components/Landing/Landing';
import Buttons from '../components/Buttons/Buttons';
import Loading from '../components/Loading/Loading';
import Logo from '../components/Logo/Logo';
import './landing.css';

const useStyles = makeStyles(()=>
    createStyles({
        landingContainer: {
            backgroundColor: "var(--mainColor)",
            backgroundImage: "linear-gradient(315deg, rgba(230, 164, 144, 0), rgba(230, 164, 144, 0.2))",
            paddingBottom: '50px',
        },
       
        
    })
)
export default function LandingP() {
    const classes = useStyles();

    return (
        <div className={classes.landingContainer}>
             <Landing/>
             {/* <div id="overlay">
                <Loading/> 
             </div> */}
            {/* <Logo/> */}    
        </div>
    )
}
