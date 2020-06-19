import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import './Characters.scss';
import { Modal, Button } from 'antd';
import {useState, useEffect} from 'react';


class Characters extends React.Component{
    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };
    render() {
    return (
        <div className="Characters">
            <div className="cont">
                <Button type="primary" onClick={this.showModal}>
                    <Card title="Rick Sanchez" extra={<h3 id='idn'>1</h3>} style={{ width: 300 }}>
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""/>
                        <p>Location: Earth (C-137)</p>
                        <p>Alive | Human</p>
                    </Card>
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...1</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Button type="primary" onClick={this.showModal}>
                    <Card title="Morty Smith" extra={<h3 id='idn'>2</h3>} style={{ width: 300 }}>
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt=""/>
                        <p>Location: Earth (C-137)</p>
                        <p>Alive | Human</p>
                    </Card>  
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...2</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Card title="Summer Smith" extra={<h3 id='idn'>3</h3>} style={{ width: 300 }}>
                    <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt=""/>
                    <p>Location: Earth (Replacement Dimension)</p>
                    <p>Alive | Human</p>
                </Card>  
            </div> 
        </div>
    )
}}
export default Characters;