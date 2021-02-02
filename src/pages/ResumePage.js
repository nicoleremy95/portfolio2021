import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import Resume from '../components/Resume/Resume';


const useStyles = makeStyles(()=>
    createStyles({
        resumeContainer: {
            backgroundColor: "var(--mainColor)",
            backgroundImage: "linear-gradient(315deg, rgba(230, 164, 144, 0), rgba(230, 164, 144, 0.2))",
        },
    })
)
export default function ResumeP() {
    const classes = useStyles();

    return (
        <div className={classes.resumeContainer}>
            <Resume />
        </div>
    )
}
