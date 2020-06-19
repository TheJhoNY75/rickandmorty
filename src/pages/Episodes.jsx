import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import './Episodes.scss';


class Episodes extends React.Component{
    state = { visible1: false, visible2: false, visible3: false };
    showModal1 = () => {
        this.setState({
        visible1: true,
        });
    };

    handleOk1 = e => {
        console.log(e);
        this.setState({
        visible1: false,
        });
    };

    handleCancel1 = e => {
        console.log(e);
        this.setState({
        visible1: false,
        });
    };
    showModal2 = () => {
        this.setState({
        visible2: true,
        });
    };

    handleOk2 = e => {
        console.log(e);
        this.setState({
        visible2: false,
        });
    };

    handleCancel2 = e => {
        console.log(e);
        this.setState({
        visible2: false,
        });
    };
    showModal3 = () => {
        this.setState({
        visible3: true,
        });
    };

    handleOk3 = e => {
        console.log(e);
        this.setState({
        visible3: false,
        });
    };

    handleCancel3 = e => {
        console.log(e);
        this.setState({
        visible3: false,
        });
    };
    render() {
    return (
        <div className="Episodes">
            <div className="cont">
                    <Card title="Pilot" extra={<h3 id='idn'>1</h3>} style={{ width: 300 }}>
                        <p>Sesson: 01</p>
                        <p>Episode: 01</p>
                        <p>publication date: December 2, 2013</p>
                        <Link to='#'>more info</Link>
                    </Card>
                    <Card title="Lawnmower Dog" extra={<h3 id='idn'>2</h3>} style={{ width: 300 }}>
                        <p>Sesson: 01</p>
                        <p>Episode: 02</p>
                        <p>publication date: December 9, 2013</p>
                        <Link to='#'>more info</Link>
                    </Card>  
                    <Card title="Anatomy Park" extra={<h3 id='idn'>3</h3>} style={{ width: 300 }}>
                        <p>Sesson: 01</p>
                        <p>Episode: 03</p>
                        <p>publication date: December 16, 2013</p>
                        <Link to='#'>more info</Link>
                    </Card> 
            </div> 
        </div>
    )
}}
export default Episodes;