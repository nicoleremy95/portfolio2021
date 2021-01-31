import React from 'react';
import {Container, Grid}from '@material-ui/core/';
import './logo.css';

export default function Logo(props) {
    return (
        <div className="arrow">
            <h1 className="featured">{props.title}</h1>
        </div>
    )
}
