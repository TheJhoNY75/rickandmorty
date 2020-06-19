import React from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';
import {BigPortalPng,RickPng,MortyPng} from '../assets/img';

export default function Home(){
    return(
        <div className="Home">
            <div className="imgPortal">
                <img src={BigPortalPng} alt="" id='img' className='portal '/>
                <img src={RickPng} alt="" id='img' className='rick'/>
                <img src={MortyPng} alt="" id='img' className='morty'/>
            </div>
            <h1>wubba lubba dub dub!</h1>
        </div>
    )
}