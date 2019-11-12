import React from 'react';
import {Row, Col} from 'antd';
import Util from '../../utils/utils';
import './index.less'
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            useName:'河畔一角',
        });
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                systemTime:sysTime
            })
        })
    }
    render(){
        return(
            <div className='Header'>
               <Row className="Header-top">
                   <Col span='24'>
                       <span>
                           欢迎，{this.state.useName}
                       </span>
                       <a href="#">退出</a>
                   </Col>
               </Row>
               <Row className="Header-breadcrumb">
                   <Col span='6' className="Breadcrumb-title">
                       <span>
                           首页
                       </span>
                   </Col>
                   <Col span='18' className="Breadcrumb-details">
                       <span className="Date">
                           {this.state.systemTime}
                       </span>
                       <span className="weather">
                          {this.state.useName}
                       </span>
                   </Col>
               </Row>
            </div>
        );
    }

}