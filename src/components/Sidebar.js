/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment } from 'react'

const sidebarMenuAdmin = [
  {
    sidebarItem: [
      {
        icon: require('../assets/svg/double-person.svg'),
        iconActive: require('../assets/svg/double-person-active.svg'),
        tabItem: 'Organization'
      },
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'Account'
      }
    ]
  }
]

const sidebarMenuOrg = [
  {
    sidebarItem: [
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'Account'
      },
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'Identity'
      },
      {
        icon: require('../assets/svg/account-icon.svg'),
        iconActive: require('../assets/svg/account-icon-active.svg'),
        tabItem: 'My Network'
      }
    ]
  }
]

const sidebarMenuCustomer = [
  {
    sidebarItem: ['settings', 'profile']
  }
]

const navbar_logo = () => {
  window.location.reload()
}

const Sidebar = ({ onClickSidebar, activeComponent, navigationTab }) => {
  // const dispatch = useDispatch()

  let activeSidebar = sidebarMenuAdmin

  // dispatch(resetSelected())

  if (navigationTab === 'MGADMIN') {
    activeSidebar = sidebarMenuAdmin
  } else {
    activeSidebar = sidebarMenuOrg
  }

  return (
    <div className="sidebar">
      <div className="navbar-brand" onClick={navbar_logo}>
        <img
          src={require('../assets/svg/login-logo.svg')}
          className="navbar-logo"
          alt="Logo"
        />
        <p>
          Moneta<span>Go</span>
        </p>
      </div>
      <div className="sidebar-title">
        <img src={require('../assets/svg/dashboard-icon.svg')} />
        Dashboard
      </div>
      <div className="sidebar-wrapper">
        {activeSidebar[0].sidebarItem.map((menu, index) => (
          <Fragment key={index}>
            <div
              onClick={onClickSidebar}
              className={`sidebar-sub-item ${
                activeComponent === menu.tabItem ? 'active' : 'inactive'
              }`}
            >
              <span id={menu.tabItem} className="side-item">
                <img
                  src={
                    activeComponent === menu.tabItem
                      ? menu.iconActive
                      : menu.icon
                  }
                />
                {menu.tabItem}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
