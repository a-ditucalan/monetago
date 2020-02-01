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
import { Popup, Label, List, Icon } from 'semantic-ui-react'

const notifyActions = [
  {
    icon: require('../assets/svg/ic_visibility_24px.svg'),
    text: 'View'
  },
  {
    icon: require('../assets/svg/thumbs-up.svg'),
    text: 'Accept'
  },
  {
    icon: require('../assets/svg/thumbs-down.svg'),
    text: 'Decline'
  }
]

const Notification = () => {
  return (
    <div className="notification-wrapper">
      <Label color="red" floating>
        2
      </Label>
      <Popup
        trigger={
          <div className="notification-bell">
            <img
              src={require('../assets/svg/notification-bell.svg')}
              alt="Notification Icon"
            />
          </div>
        }
        on="click"
        pinned
        basic
        position="bottom left"
        content={
          <div className="notification-content">
            <div className="notification-menu">
              <h3>Notification</h3>
              <div className="notification-actions">
                <p>View All</p>
                <p>Clear</p>
              </div>
            </div>
            <List className="notification-list">
              <List.Item>
                <div className="notification-item">
                  <div className="details">
                    <h2>JC Supply PTY</h2>
                    <p>wants to connect to your network</p>
                  </div>
                  <div className="actions">
                    {notifyActions.map((action, i) => {
                      return (
                        <p key={i}>
                          <img src={action.icon} alt={`${action.text} Icon`} />{' '}
                          {action.text}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </List.Item>
              <List.Item>
                <div className="notification-item-approved">
                  <Icon name="check circle outline" />
                  <div className="details">
                    <h2>Approved!</h2>
                    <p>
                      You are now connected to{' '}
                      <span className="network">Capital Partner</span>
                    </p>
                  </div>
                </div>
              </List.Item>
            </List>
          </div>
        }
      />
    </div>
  )
}

export default Notification
