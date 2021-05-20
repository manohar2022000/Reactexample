import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import logo from './groot.png';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Image from './image';
import ironman from './images/ironman.png';
import thor from'./images/thor.jpg';
import captain from './images/captainamerica.jpg';
import batman from './images/batman.jpg';
import superman from './images/superman.jpg';
import wonderwoman from './images/wonderwoman.jpg';
import deadpool from './images/deadpool.jpg';
import wolverine from './images/wolverine.jpg';
import ghostrider from './images/ghostrider.jpg';



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

 const routes =[
   {
     path:'/',
     sidebar:()=><Image image={ironman} />,
     exact:true,
     
   },
   {
    path:'/option2',
    sidebar:()=><Image image={thor} />,
   },
   {
     path:'/option3',
     sidebar:()=><Image image={captain} />,
   },
   {
    path:'/option4',
    sidebar:()=><Image image={batman} />,
  },{
    path:'/option5',
    sidebar:()=><Image image={superman} />,
  },{
    path:'/option6',
    sidebar:()=><Image image={wonderwoman} />,
  },{
    path:'/option7',
    sidebar:()=><Image image={deadpool} />,
  },{
    path:'/option8',
    sidebar:()=><Image image={wolverine} />,
  },{
    path:'/option9',
    sidebar:()=><Image image={ghostrider} />,
  },
 ]

class Menulayout extends React.Component{
    render(){
        return(
            <Layout>
    <Header className="header">
      <div className="logo" />
      <img src={logo} alt ="i am logo" float= "left" width= "120px"
    height=" 31px"
    margin= "16px 24px 16px 0" />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      
   
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb separator=" " style={{ margin: '16px 0' }}>
        <Breadcrumb.Item href="https://ant.design/components/breadcrumb/">Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.w3schools.com/">W3schools</Breadcrumb.Item>
        <Breadcrumb.Item href="">Groot</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
     
      <Router>
        <Sider className="site-layout-background" width={200}>
          <Menu
          theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Marvel">
              <Menu.Item key="1" > <Link to='/'>Ironman </Link> </Menu.Item>
              <Menu.Item key="2" > <Link to='/option2'>Thor</Link></Menu.Item>
              <Menu.Item key="3" > <Link to='/option3'>Captain America</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Dc Marvel">
              <Menu.Item key="4" > <Link to='/option4'> Batman </Link> </Menu.Item>
              <Menu.Item key="5" > <Link to='/option5'> Superman </Link> </Menu.Item>
              <Menu.Item key="6" > <Link to='/option6'> Wonder Woman </Link> </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Others">
            <Menu.Item key="7" > <Link to='/option7'> Deadpool </Link> </Menu.Item>
              <Menu.Item key="8" > <Link to='/option8'> Wolverine</Link> </Menu.Item>
              <Menu.Item key="9" > <Link to='/option9'>Ghost rider </Link> </Menu.Item>
            </SubMenu>
            
           
          </Menu>
        </Sider>
        
        <Content style={{ padding: '0 30px', minHeight: 650 }}> 

{/* <Tablecontent/> */}
           {routes.map((route)=>
           <Route 
           path={route.path}
           exact={route.exact}
           component={route.sidebar}
        />
           )}
        </Content>
        </Router>
     </Layout>


    </Content>
    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

        );

    }
}
export default Menulayout;