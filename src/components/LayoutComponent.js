
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Home from '../containers/HomeContainer';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import LayoutHeader from '../components/LayoutHeader';
import LayoutFooter from '../components/LayoutFooter';
import LayoutMenu from '../components/LayoutMenu';
import DashboardContainer1 from '../containers/DashboardContainer1';
import DashboardContainer2 from '../containers/DashboardContainer2';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class LayoutComponent extends Component {

  state = {
    siderFold: false,
  };

  onCollapse(siderFold) {
    
     this.setState({ siderFold: siderFold });
  }
  render() {
    return (
      <Layout >
        <Sider
          trigger={null}
          collapsible    //  是否可收起
          collapsed={this.state.siderFold}  // 当前收起状态
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto', height: '100vh' }}
        >
        <div className="logo" ></div>
        <LayoutMenu />
        </Sider>

        <Layout >
          <LayoutHeader onCollapse={this.onCollapse.bind(this)} />
          <Content >
            
              <DashboardContainer2 />
            
          </Content>
          <LayoutFooter />
        </Layout>

      </Layout>
    );
  }
}

export default LayoutComponent;