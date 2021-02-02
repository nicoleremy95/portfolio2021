import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Aboutme from '../components/Aboutme/Aboutme';

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutMeContainer: {
        backgroundColor: "var(--mainColor)",
        backgroundImage: "linear-gradient(315deg, rgba(230, 164, 144, 0), rgba(230, 164, 144, 0.2))",
        paddingBottom: '50px',
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
