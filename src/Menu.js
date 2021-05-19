import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import logo from './groot.png';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Tablecontent from './Sources';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Menulayout extends React.Component{
    render(){
        return(
            <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <img src={logo} alt ="i am logo" float= "left"
    width= "120px"
    height=" 31px"
    margin= "16px 24px 16px 0" />
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb separator=" " style={{ margin: '16px 0' }}>
        <Breadcrumb.Item href="https://ant.design/components/breadcrumb/">Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.w3schools.com/">W3schools</Breadcrumb.Item>
        <Breadcrumb.Item href="">Groot</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
          theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="4">option5</Menu.Item>
              <Menu.Item key="5">option6</Menu.Item>
              <Menu.Item key="6">option7</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="7">option9</Menu.Item>
              <Menu.Item key="8">option10</Menu.Item>
              <Menu.Item key="9">option11</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Content style={{ padding: '0 24px', minHeight: 280 }}> 

<Tablecontent/>
        </Content>
     </Layout>





    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

        );

    }
}
export default Menulayout;