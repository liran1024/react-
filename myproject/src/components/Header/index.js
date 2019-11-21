import React from 'react';
import {Row, Col} from 'antd';
import Util from '../../utils/utils';
import Axios from '../../axios';
import './index.less'

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            useName: 'liran',
        });
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                systemTime: sysTime
            })
        })
      this.getWeatherAPIData()
    }

    getWeatherAPIData() {
        let city='上海';
        Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    weatherPicURL:data.dayPictureUrl,
                    weatherDetails:data.weather
                })
            }
        })
    }

    render() {
        return (
            <div className='Header'>
                <Row className="Header-top">
                    <Col span={24}>
                       <span>
                           欢迎，{this.state.useName}
                       </span>
                        <span className="logOut">退出</span>
                    </Col>
                </Row>
                <Row className="Header-breadcrumb">
                    <Col span={6} className="Breadcrumb-title">
                       <span>
                           首页
                       </span>
                    </Col>
                    <Col span={18} className="Breadcrumb-details">
                        <span className="Date">
                           {this.state.systemTime}
                        </span>
                        <span className="weather">
                           <img src={this.state.weatherPicURL} alt=""/>
                           <span className='weatherDetails'>
                               {this.state.weatherDetails}
                           </span>
                       </span>
                    </Col>
                </Row>
            </div>
        );
    }

}