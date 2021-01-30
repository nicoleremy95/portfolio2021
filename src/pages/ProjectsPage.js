import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import Portfolio from '../components/Portfolio/Portfolio';



const useStyles = makeStyles(()=>
    createStyles({
        projectContainer: {
            backgroundImage: "linear-gradient(to bottom right, #1aa6b7, #f56a79);",  
        },
    })
)
export default function ProjectsP() {
    const classes = useStyles();
    return (
        <div className={classes.projectContainer}>
            <Portfolio/>
        </div>
    )
}
 