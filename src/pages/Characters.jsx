import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import './Characters.scss';
import { Modal, Button } from 'antd';
import {useState, useEffect} from 'react';


class Characters extends React.Component{
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
        <div className="Characters">
            <div className="cont">
                <Button type="primary" onClick={this.showModal1}>
                    <Card title="Rick Sanchez" style={{ width: 300 }}>
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""/>
                        <p>Location: Earth (C-137)</p>
                    </Card>
                </Button>
                <Modal
                    title="Rick Sanchez"
                    visible={this.state.visible1}
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                    >
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" width='470px' alt=""/>
                    <p>Status: Alive </p>
                    <p>Specie: Human </p>
                    <p>Gender: Male </p>
                    <p>Location: Earth (C-137)</p>
                </Modal>
                <Button type="primary" onClick={this.showModal2}>
                    <Card title="Morty Smith" style={{ width: 300 }}>
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt=""/>
                        <p>Location: Earth (C-137)</p>
                    </Card>  
                </Button>
                <Modal
                    title="Morty Smith"
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                    >
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" width='470px' alt=""/>
                    <p>Status: Alive </p>
                    <p>Specie: Human </p>
                    <p>Gender: Male </p>
                    <p>Location: Earth (C-137)</p>
                </Modal>
                <Button type="primary" onClick={this.showModal3}>
                    <Card title="Summer Smith" style={{ width: 300 }}>
                        <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt=""/>
                        <p>Location: Earth (Replacement Dimension)</p>
                    </Card> 
                </Button>
                <Modal
                    title="Summer Smith"
                    visible={this.state.visible3}
                    onOk={this.handleOk3}
                    onCancel={this.handleCancel3}
                    >
                        <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" width='470px' alt=""/>
                    <p>Status: Alive </p>
                    <p>Specie: Human </p>
                    <p>Gender: Male </p>
                    <p>Location: Earth (Replacement Dimension)</p>
                </Modal> 
            </div> 
        </div>
    )
}}
export default Characters;