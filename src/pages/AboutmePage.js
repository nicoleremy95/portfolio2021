import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Aboutme from '../components/Aboutme/Aboutme';

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutMeContainer: {
        backgroundImage: "linear-gradient(to bottom right, #1aa6b7, #f56a79);", 
    },
  }),
);

export default function AboutmeP() {
    const classes = useStyles();

    return (
        <div className={classes.aboutMeContainer}>
            <Aboutme/>
        </div>
    )
}
