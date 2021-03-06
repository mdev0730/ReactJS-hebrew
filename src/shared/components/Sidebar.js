import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Requests from '../img/icon_requests.png';
import Quotes from '../img/icon_quotes.png';
import Orders from '../img/icon_order.png';
import History from '../img/icon_history.png';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  render() {
    const { user } = this.props;

    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <Menu theme="white" mode="inline">

            <Menu.Item key="dashboard" className="left-menu-items">
              <Link to="/request">
                <div className="div-left-menu-items">
                  <img className="ic-requests" src={Requests} />
                  <div style={{height:'20px'}}>בקשות</div>
                  <div>שהתקבלו</div>
                  <div className="notify">4</div>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="quotes" className="left-menu-items">
              <Link to="/bid">
                <div className="div-left-menu-items">
                  <img className="ic-requests" src={Quotes} />
                  <div style={{height:'20px'}}>הצעות מחיר</div>
                  <div>שנשלחו</div>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="orders" className="left-menu-items">
              <Link to="/order">
                <div className="div-left-menu-items">
                  <img className="ic-requests" src={Orders} />
                  <div style={{height:'20px'}}>הזמנות</div>
                  <div>פתוחות</div>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="history" className="left-menu-items">
              <Link to="/history">
                <div className="div-left-menu-items">
                  <img className="ic-requests" src={History} />
                  <div style={{height:'20px'}}>הסטוריית</div>
                  <div>הזמנות</div>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </DirectionProvider>
    );
  }
}

export default Sidebar;
