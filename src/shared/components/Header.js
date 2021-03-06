import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Row, Col, Menu, Dropdown } from 'antd';
import CompanyIcon from '../img/company1.png';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

const FormItem = Form.Item;
const Header = Layout.Header;

class AppHeader extends Component {
  onLogout() {
    // localStorage.removeItem('graphcoolToken');
    // window.location.reload();
    window.location.href = "/signin";
  }
  onSetting() {
    window.location.href = "/setting";
  }
  onAbout() {
    window.location.href = "/about";
  }

  render() {
    const { user, onSearch } = this.props;
    // if (!user) return null;

    const profileMenu = (
      <Menu>
        <Menu.Item >
          <div className="profile-menu-mail"  onClick={() => this.onSetting()}>
            <div className="menu-arrow">
              <img src={require('../img/back.png')}/>
            </div>
            <div className="menu-mail rtl">
              <div className="name">Touboul</div>
              <div className="mail">toboul@gmail.com</div>
            </div>
            <img src={CompanyIcon} className="company-img"/>
          </div>
          <div className="menu-divide"/>
        </Menu.Item>
        <Menu.Item>
          <div className="menu-about is-right" onClick={() => this.onAbout()}>
            <div className="about">אודות</div>
            <img src={require('../img/about.png')}/>
          </div>
          <div className="menu-divide"/>
        </Menu.Item>
        <Menu.Item>
          <div className="menu-terms is-right">
            <div className="about">תנאי שימוש</div>
            <img src={require('../img/terms.png')}/>
          </div>
          <div className="menu-divide"/>
        </Menu.Item>
        <Menu.Item>
          <div className="menu-contact is-right">
            <div className="about">יצירת קשר</div>
            <img src={require('../img/call.png')}/>
          </div>
        </Menu.Item>
        {/* <Menu.Item>
          <div className="menu-terms">
            <img src={require('../img/terms.png')}/>
            <div className="about">Disconnect</div>
          </div>
        </Menu.Item> */}
        <Menu.Item>
          <div onClick={() => this.onLogout()} className="logout is-center">
            <div className="log">התנתק</div>
            <img src={require('../img/logout.png')}/>
          </div>
        </Menu.Item>
      </Menu>
    );

    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
      <Header className="header">
        {/* <Row>
          <Col span={24}> */}
        <div className="logo" style={{backgroundColor: '#1e89df'}}>
          <Link to="/request" className="ic-logo" />
        </div>
        <div className="profile-status is-right">
          <div className="title">Touboul</div>
          <Menu mode="horizontal" selectable={true} >
            <Menu.Item>
              <Dropdown overlay={profileMenu}>
                <div className="dropdown">
                  <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="REQUESTS-004" transform="translate(-1370.000000, -22.000000)">
                        <g id="Drop-down" transform="translate(1370.000000, 22.000000)">
                          <circle id="Oval-2" fill="#FFFFFF" cx="7" cy="7" r="7"></circle>
                          <polygon id="" fill="#1A9FFF" points="4.326 5.264 7 7.952 9.674 5.264 10.5 6.09 7 9.59 3.5 6.09"></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <img className="ic-mycompany" src={CompanyIcon} />
                </div>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
        {/* </Col>
        </Row> */}
      </Header>
      </DirectionProvider>
    );
  }
}

export default AppHeader;
