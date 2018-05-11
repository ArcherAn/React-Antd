
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Home from '../containers/HomeContainer';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import LayoutHeader from '../components/LayoutHeader';
import LayoutFooter from '../components/LayoutFooter';
import LayoutMenu from '../components/LayoutMenu';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class LayoutComponent extends Component {

  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout >
        <Sider
          trigger={null}
          collapsible    //  是否可收起
          collapsed={this.state.collapsed}  // 当前收起状态
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto', minHeight: '100vh', position: 'fixed' , left: 0}}
        >
          <div className="logo" ></div>
          <LayoutMenu />
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
          <LayoutHeader onClick={this.onCollapse.bind(this)}/>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff',  }}>
              <Home />
            </div>
          </Content>
          <LayoutFooter />
        </Layout>

      </Layout>
    );
  }
}

export default LayoutComponent;