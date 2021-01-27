import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Landing from '../components/Landing';
import Buttons from '../components/Buttons';
import Aboutme from '../components/Aboutme';

const useStyles = makeStyles((Theme)=>
    createStyles({
        landingContainer: {
            backgroundImage: "linear-gradient(to bottom right, #1aa6b7, #f56a79);"
            
        }
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
                <Buttons/>
            </section>
            
            <section>
                <Aboutme/>
            </section>

        </div>
    )
}
