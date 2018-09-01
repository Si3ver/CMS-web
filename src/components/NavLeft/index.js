import React, { Component, Fragment } from 'react'
import { Menu, Icon } from 'antd'
import MenuConfig from './../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        console.log(menuTreeNode)
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt="" />
                        <h1>cms-web</h1>
                    </div>
                    <Menu theme="dark">
                        {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 1</Menu.Item>
                            <Menu.Item key="4">Option 2</Menu.Item>                        
                        </SubMenu> */}
                        { this.state.menuTreeNode }
                    </Menu>
                </div>
            </Fragment>
        )
    }
}

export default NavLeft
