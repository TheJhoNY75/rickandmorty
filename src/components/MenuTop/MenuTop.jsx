import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {LogoPng} from '../../assets/img';

import './MenuTop.scss'


export default function MenuTop(){
    return(
        <div className="menuTop">
            <div className="menuTop__logo">
                <img src={LogoPng} alt=""/>
            </div>
            <Menu 
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key='1'>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to='/characters'>Characters</Link>
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link to='/episodes'>Episodes</Link>
                </Menu.Item>
                <Menu.Item key='4'>
                    <Link to='/register'>Register</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}