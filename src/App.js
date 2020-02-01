/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Route, Switch } from 'react-router-dom'
import IdleTimer from 'react-idle-timer'

import NoRouteMatch from './pages/404'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/login'
import Authentication from './common/Authentication'
import Dashboard from './pages/dashboard'
import IPADashboard from './pages/users/dashboard'
import IPAMainNavbar from './usersComponents/MainNavbar'
import IPALogin from './pages/users/login'
import CommonButtons from './common/CommonButton'

import {
  Modal,
  Portal,
  Segment,
  Header,
  Button,
  Dimmer
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './stylesheets/main.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
    this.idleLogout = this._idleLogout.bind(this)

    this.state = {
      openIdleModal: false,
      isAuth: false
    }
  }

  _onAction(e) {
    // console.log('USER DID SOMETHING: ', e)
    return Authentication.load()
      ? this.setState({
          ...this.state,
          isAuth: true
        })
      : this.setState({
          ...this.state,
          isAuth: false
        })
  }

  _onActive(e) {
    // console.log('USER IS ACTIVE: ', e)
    return Authentication.load()
      ? this.setState({
          ...this.state,
          isAuth: true
        })
      : this.setState({
          ...this.state,
          isAuth: false
        })
  }

  _onIdle(e) {
    // console.log('USER IS IDLE: ', e)
    this.setState({
      openIdleModal: true,
      isAuth: false
    })
    localStorage.clear()
  }

  _idleLogout() {
    localStorage.clear()
    window.location.href = '/'
  }

  render() {
    return (
      <HashRouter basename="/">
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref
          }}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.isAuth ? 300000 : 86400000 * 2}
        />

        <div className="App">
          <Switch>
            <ProtectedRoute exact path={'/dashboard'} component={Dashboard} />
            <Route
              exact
              path={'/ipa-dashboard'}
              render={() => {
                return (
                  <Fragment>
                    <IPAMainNavbar />
                    <Route
                      exact
                      path="/ipa-dashboard"
                      component={IPADashboard}
                    />
                  </Fragment>
                )
              }}
            />
            <Route exact path="/" component={Login} />
            <Route exact path="/ipa-login" component={IPALogin} />
            <Route component={NoRouteMatch} />
          </Switch>
        </div>

        {/* <Modal
          className="modal-popup"
          style={{ backgroundColor: '#000' }}
          open={this.state.openIdleModal}
          onClose={this.idleLogout}
          centered
          size="mini"
        >
          <Modal.Content className="idle-modal-content">
            <img
              src={require('./assets/svg/login-logo.svg')}
              className="monetago-logo"
              alt="Logo"
            />
            <p className="modal-form-title">Session Expired!</p>
            <p className="modal-form-subtitle">You've been idle.</p>
            <div className="btn-container">
              <CommonButtons
                content="LOGIN"
                btnClass="btn-blue"
                onClick={this.idleLogout}
              />
            </div>
          </Modal.Content>
        </Modal> */}

        <Dimmer.Dimmable dimmed={true}>
          <Portal
            closeOnEscape={false}
            closeOnDocumentClick={false}
            onClose={this.idleLogout}
            open={this.state.openIdleModal}
          >
            <Dimmer verticalAlign="top" active={true}>
              <Segment
                style={{
                  right: '40%',
                  position: 'fixed',
                  top: '30%',
                  zIndex: 1000
                }}
              >
                <div className="idle-modal-content">
                  <img
                    src={require('./assets/svg/login-logo.svg')}
                    className="monetago-logo"
                    alt="Logo"
                  />
                  <Header>Session Expired!</Header>
                  <p className="sub">You've been idle.</p>
                </div>
                <div className="btn-container">
                  <Button
                    className="btn"
                    content="BACK TO LOGIN"
                    negative
                    onClick={this.idleLogout}
                  />
                </div>
              </Segment>
            </Dimmer>
          </Portal>
        </Dimmer.Dimmable>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
