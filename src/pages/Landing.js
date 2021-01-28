import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Landing from '../components/Landing/Landing';
import Buttons from '../components/Buttons/Buttons';
import headshot from '../images/headshot.jpg';
import Loading from '../components/Loading/Loading';
import Logo from '../components/Logo/Logo';
import './landing.css';

const useStyles = makeStyles((Theme)=>
    createStyles({
        landingContainer: {
            backgroundImage: "linear-gradient(to bottom right, #1aa6b7, #f56a79);",
            
            
        },
       
        // img: {
        //     display:"inline-block" ,
        //     maxWidth:"100px",
        //     height:"auto"       
        // }
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
                {/* <img
                    src={headshot}
                    alt="nicole"
                    className={classes.img}
                /> */}
        </div>
    )
}
