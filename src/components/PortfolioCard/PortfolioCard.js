import { RotateLeft } from '@material-ui/icons'
import React from 'react';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

export default function PortfolioCard(props) {
    return (
        <div>
            <Container maxWidth="md">
            <h1>{props.name}</h1>
            <h2>{props.role}</h2>
            <h2>{props.type}</h2>
            <h3>{props.tech}</h3>
            <h3>{props.description}</h3>
            <h3>{props.info}</h3>
            <Link to={props.github}>Github</Link>
            <Link to={props.app}>Application</Link>
            </Container>
        </div>
    )
}
