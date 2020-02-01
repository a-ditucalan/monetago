/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState, useEffect } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchApi, userOrgId, resetSelected, setActiveTab } from '../redux'

import Account from '../pages/dashboard/Account'
import Organization from '../pages/dashboard/Organization'
import Authentication from '../common/Authentication'
import MainNavbar from '../components/MainNavbar'
import Sidebar from '../components/Sidebar'
import CorporateEntity from '../components/CorporateEntity'
import MyNetwork from './MyNetwork'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let authUser = ''
  let ActiveTabComponent = Organization
  const [userAuth, setUserAuth] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()
  const [navigationTab, setnavigationTab] = useState({})
  const [activeComponent, setActiveComponent] = useState('')

  const onClickSidebar = e => {
    const navItem = e.currentTarget.firstChild.getAttribute('id')
    setActiveComponent(navItem)
    dispatch(setActiveTab(navItem))
    dispatch(resetSelected())
  }

  if (activeComponent === 'Account') {
    ActiveTabComponent = Account
  } else if (activeComponent === 'Organization') {
    ActiveTabComponent = Organization
  } else if (activeComponent === 'Identity') {
    ActiveTabComponent = CorporateEntity
  } else if (activeComponent === 'My Network') {
    ActiveTabComponent = MyNetwork
  } else {
    ActiveTabComponent = Account
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(fetchApi(1))
      dispatch(userOrgId(JSON.parse(Authentication.loadUserProfile()).orgId))
      setnavigationTab(JSON.parse(Authentication.loadUserProfile()))
      authUser = JSON.parse(Authentication.loadUserProfile())

      if (authUser) {
        if (authUser.roles[0] === 'MGADMIN') {
          setActiveComponent('Organization')
        } else {
          setActiveComponent('Account')
        }
      }
    } else {
      history.push('/')
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(fetchApi(1))
    } else {
      history.push('/')
    }
  }, [])

  useEffect(() => {
    setUserAuth(Authentication.loadUserProfile())
  }, [])

  return (
    <Route
      {...rest}
      render={props =>
        userAuth ? (
          <div className="dashboard-wrapper">
            <Sidebar
              activeComponent={activeComponent}
              onClickSidebar={onClickSidebar}
              navigationTab={navigationTab.roles ? navigationTab.roles[0] : ''}
            />
            <div className="main-dashboard">
              <MainNavbar />
              <Component {...props} activeTab={ActiveTabComponent} />
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default ProtectedRoute
