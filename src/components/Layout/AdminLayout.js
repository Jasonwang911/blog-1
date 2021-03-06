import React from "react";
import {Layout, Menu, Icon, LocaleProvider, Breadcrumb} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import GlobalFooter from "../GlobalFooter";

const {Header, Sider, Content} = Layout;

export default class AdminLayout extends React.PureComponent {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };
    _menuChange = ({key}) => {
        this.props.history.push(key)
    };

    _genBreadcrumb = () => {
        const pathname = this.props.location.pathname;
        const arr = pathname.split('/');
        return arr.map(item => <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
    };

    render() {
        return (
            <div>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo">
                            {
                                this.state.collapsed ?
                                    <div>logo</div> : <span>后台管理系统</span>
                            }
                        </div>
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={[this.props.location.pathname]}
                            mode="inline"
                            onClick={this._menuChange}
                        >
                            <Menu.Item key="/admin/post">
                                <Icon type="pie-chart"/>
                                <span>POST</span>
                            </Menu.Item>
                            <Menu.Item key="/admin/user">
                                <Icon type="user"/>
                                <span>USER</span>
                            </Menu.Item>
                            <Menu.Item key="/admin/category">
                                <Icon type="desktop"/>
                                <span>CATEGORY</span>
                            </Menu.Item>
                            <Menu.Item key="/admin/exportExcel">
                                <Icon type="export"/>
                                <span>EXPORT</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                {this._genBreadcrumb()}
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360, height: '100%'}}>
                                <LocaleProvider locale={zhCN}>
                                    {this.props.children}
                                </LocaleProvider>
                            </div>
                        </Content>
                        <GlobalFooter/>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
