import React, {useState, useEffect} from 'react';
import Logo from '../Logo/Logo';
import './loading.css';

export default function Loading() {
    return (
        <div 
            className="loading-div"
        >
            <Logo/>
        </div>
    )
}
