import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Footer } from 'antd/es/layout/layout';
const { Header, Content, Sider } = Layout;

export default function LayoutExample() {
  return (
    <Layout style={{height:'100vh'}}>
        <Header className="header">
        <div className='logo' style={{float:'left'}}/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Header>
        <Content style={{padding:'0 50px'}}>
            <Breadcrumb style={{margin:'16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className='site-layout-background' style={{padding:'24px 0'}}>
                <Sider className='site-layout-background' width={200}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height:"100%"}}>
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="sub1">
                            <Menu.Item  key="1">option1</Menu.Item>
                            <Menu.Item  key="2">option2</Menu.Item>
                            <Menu.Item  key="3">option3</Menu.Item>
                            <Menu.Item  key="4">option4</Menu.Item>                                                    
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined/>} title="sub2">
                            <Menu.Item  key="5">option5</Menu.Item>
                            <Menu.Item  key="6">option6</Menu.Item>
                            <Menu.Item  key="7">option7</Menu.Item>
                            <Menu.Item  key="8">option8</Menu.Item>                                                    
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined/>} title="sub3">
                            <Menu.Item  key="9">option9</Menu.Item>
                            <Menu.Item  key="10">option10</Menu.Item>
                            <Menu.Item  key="11">option11</Menu.Item>
                            <Menu.Item  key="12">option12</Menu.Item>                                                    
                        </SubMenu>
                    </Menu>                    
                </Sider>
                <Content style={{padding:'0 24px', minHeight:280}}>Content</Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign:'center'}}>Ant design</Footer>
    </Layout>
  )
}
