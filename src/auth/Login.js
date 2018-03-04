import React, { Component } from 'react';
import Logo from '../shared/img/logo.png';

import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { parseFormErrors } from '../shared/utils/form_errors';
import { auto } from 'async';
import { Route, Switch } from 'react-router-dom';
import SignupScreen from './Signup';
import MainLayoutComponent from '../shared/components/MainLayout';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    localStorage.setItem('firebaseToken', "aaaa");
    window.location.href = "/request";
  }
  gotoRegister(){
    <Switch>
      <Route path='/signup' component={SignupScreen} />
    </Switch>
  }

  render() {
    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
      <div id="login" layout="vertical" style={{backgroundImage: `url(${require('../shared/img/authBack.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="login-panel">
          <img className="login-logo"  src={Logo} />
            <div className="login-wrapper">
              <LoginForm onSubmit={this.handleSubmit} />
            </div>
            <div style={{display:'flex'}}>
              <div className="fontH9" style={{color:'white', marginTop:'25px', marginRight:'20px'}}>הסבר על המערכת</div>
              <Link to="./signup" className="fontH1" style={{color:'white', marginTop:'24px', marginRight:'10px', textDecoration:'underline'}} onClick={this.handleRegister}>הרשם</Link>
              </div>
        </div>
      </div>
      </DirectionProvider>
    )
  }
}


const LoginScreen = Login;

export default LoginScreen;
