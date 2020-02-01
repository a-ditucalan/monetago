/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' }
]

const MainNavbar = () => {
  return (
    <div className="ipa">
      <div className="main-navbar">
        <div>
          <img
            src={require('../assets/svg/login-logo.svg')}
            className="logo"
            alt="Logo"
          />
        </div>
        <div className="nav-menu">
          <div className="ops-menu">
            <Dropdown
              trigger={
                <p>
                  IPA Ops{' '}
                  <img
                    src={require('../assets/svg/arrow-down.svg')}
                    className="arrow-down-icon"
                    alt="Arrow Down Icon"
                  />
                </p>
              }
              options={options}
              pointing="top left"
              icon={null}
            />
          </div>
          <Label color="red" floating>
            4
          </Label>
          <img
            src={require('../assets/svg/notification-bell.svg')}
            className="notif-bell-icon"
            alt="Notification Bell Icon"
          />
        </div>
      </div>
    </div>
  )
}

export default MainNavbar
