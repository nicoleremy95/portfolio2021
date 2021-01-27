import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Landing from '../components/Landing';
import Buttons from '../components/Buttons';
import headshot from '../images/headshot.jpg'

const useStyles = makeStyles((Theme)=>
    createStyles({
        landingContainer: {
            backgroundImage: "linear-gradient(to bottom right, #1aa6b7, #f56a79);"
            
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
            <section>
                <Landing/>
            </section>

            <section>
                {/* <img
                    src={headshot}
                    alt="nicole"
                    className={classes.img}
                /> */}
            </section>
        </div>
    )
}
