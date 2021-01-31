import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import Resume from '../components/Resume/Resume';


const useStyles = makeStyles(()=>
    createStyles({
        resumeContainer: {
            backgroundImage: "linear-gradient(to bottom right, #1aa6b7, #f56a79);",  
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
