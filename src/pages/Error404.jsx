import React from 'react';
import {Link} from 'react-router-dom';
import {HeadPng} from '../assets/img';

import './Error404.scss'


export default function Error404(){
    return (
        <div className="Error404">
            <h1>404 not found</h1>
            <img src={HeadPng} alt=""/>
        </div>
    )
}