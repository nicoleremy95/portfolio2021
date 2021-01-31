import React, {useState} from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import ResumePDF from '../../images/Resume_Portfolio_Remy.pdf'

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={ResumePDF}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <div>
                        <Page key={`page_${index + 1}`} pageNumber={index + 1}  />
                        <p>Page {index + 1} of {numPages}</p>
                    </div>
                ))}
            </Document>
        </div>
    );
}