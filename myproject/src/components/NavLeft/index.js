import React from 'react';
import './index.less'
import { Menu} from 'antd';
import menuList from './../../config/menuConfig'
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
    componentWillMount(){
        const menuTreeNode=this.renderMentu(menuList)
        this.setState({
            menuTreeNode
        })
    }
    renderMentu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMentu(item.children)}
                    </SubMenu>
                );
            }

            return  <Menu.Item  key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <span>Imooc MS</span>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }

}