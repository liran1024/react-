import React from 'react'
import {Row, Col} from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './admin.less'
export default class Admin extends React.Component {
    render() {
        return (
            <Row className='box'>
                <Col span='3' className='navLeft'>
                    <NavLeft/>
                </Col>
                <Col span='21'>
                    <Header></Header>
                    <Row>

                        concent
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}