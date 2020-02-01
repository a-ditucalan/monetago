/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment, useState } from 'react'
const sidebarMenuAdmin = [
  {
    sidebarItem: [
      {
        id: 'dashboard',
        icon: require('../assets/svg/dashboard.svg'),
        iconActive: require('../assets/svg/dashboard-active.svg'),
        tabItem: 'DASHBOARD'
      },
      {
        id: 'debt-insurance',
        icon: require('../assets/svg/dept-insurance.svg'),
        iconActive: require('../assets/svg/dept-insurance-active.svg'),
        tabItem: 'DEPT INSURANCE'
      },
      {
        id: 'credit-limits',
        icon: require('../assets/svg/credit-limits.svg'),
        iconActive: require('../assets/svg/credit-limits-active.svg'),
        tabItem: 'CREDIT LIMITS'
      },
      {
        id: 'identities',
        icon: require('../assets/svg/identities.svg'),
        iconActive: require('../assets/svg/identities-active.svg'),
        tabItem: 'IDENTITIES'
      },
      {
        id: 'settings',
        icon: require('../assets/svg/sidebar-settings.svg'),
        iconActive: require('../assets/svg/sidebar-settings-active.svg'),
        tabItem: 'SETTINGS'
      }
    ]
  }
]

const sidebarMenuOrg = [
  {
    sidebarItem: ['Account']
  }
]

const sidebarMenuCustomer = [
  {
    sidebarItem: ['settings', 'profile']
  }
]

const Sidebar = ({ onClickSidebar, activeComponent }) => {
  const [navigationTab, setnavigationTab] = useState({ user: 'admin' })
  let activeSidebar = sidebarMenuAdmin

  if (navigationTab.user === 'admin') {
    activeSidebar = sidebarMenuAdmin
  } else if (navigationTab.user === 'orgAdmin') {
    activeSidebar = sidebarMenuOrg
  } else if (navigationTab.user === 'customer') {
    activeSidebar = sidebarMenuCustomer
  }

  return (
    <div className="ipa">
      <div className="sidebar">
        <div className="sidebar-wrapper">
          {activeSidebar[0].sidebarItem.map((menu, index) => (
            <Fragment key={index}>
              <div
                onClick={onClickSidebar}
                className={`sidebar-sub-item ${
                  activeComponent === menu.id ? 'active' : 'inactive'
                }`}
              >
                <span id={menu.id} className="side-item org-identity-detail">
                  <img
                    src={
                      activeComponent === menu.id ? menu.iconActive : menu.icon
                    }
                  />
                  {menu.tabItem}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
