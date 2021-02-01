import React, {useState} from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import ResumePDF from '../../images/Resume_Portfolio_Remy.pdf'
import { Container, Grid } from '@material-ui/core';
import Logo from '../Logo/Logo';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles(()=>
    createStyles({
        resumeContainer: {
            // margin:"auto",
            width: "100% !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: '3vh'
        },
        resume: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: '100%'
        },
        logo: {
            paddingTop: '10vh',
            marginBottom: '150px',
        },
    })
)

export default function Resume(props) {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={classes.resumeContainer}>
            {/* <Container maxWidth="xs"> */}
            <Grid xs={10}>
                <section className={classes.logo}>
                    <Logo title="resume" />
                </section>    
                <Document
                    // className={classes.resume}
                    file={ResumePDF}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <div>
                            <Page 
                                key={`page_${index + 1}`} 
                                pageNumber={index + 1}  
                                className={classes.resume}
                            />
                            <p>Page {index + 1} of {numPages}</p>
                        </div>
                    ))}
                </Document>
            </Grid>
                
            {/* </Container> */}
            
        </div>
    );
}