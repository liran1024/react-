import React from 'react'
import {Row, Col} from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './page/home'
import './style/common.less'
export default class Admin extends React.Component {
    render() {
        return (
            <Row className='box'>
                <Col span={3} className='navLeft'>
                    <NavLeft/>
                </Col>
                <Col span={21}>
                    <Header></Header>
                    <Row className='right-concenter'>
                        <Home></Home>
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}