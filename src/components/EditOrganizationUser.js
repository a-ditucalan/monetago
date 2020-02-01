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
import { Image, Popup, Icon } from 'semantic-ui-react'

import CommonInput from '../common/CommonInput'
import CommonButtons from '../common/CommonButton'

const actions = [
  {
    icon: require('../assets/svg/settings.svg'),
    text: 'Set Role'
  },
  {
    icon: require('../assets/svg/edit.svg'),
    text: 'Deactivate'
  },
  {
    icon: require('../assets/svg/delete.svg'),
    text: 'Delete'
  }
]

const EditUserOnOrganization = ({
  status,
  userID,
  firstName,
  lastName,
  password,
  email,
  phoneNumber,
  organiztion,
  department,
  group,
  role
}) => {
  return (
    <div className="edit-container">
      <div className="edit-header">
        <div className="edit-summary">
          <div>
            <Image
              src={require('../assets/images/monetaGo-logo.png')}
              avatar
              className="avatar-icon"
            />
            <p>{status}</p>
          </div>
          <div>
            <h3>{`${firstName} ${lastName}`}</h3>
            <p>{role}</p>
          </div>
        </div>

        <div className="edit-dropdown">
          <Popup
            className="action-popup"
            trigger={<Icon link name="ellipsis vertical" />}
            content={
              <div className="action-menu">
                {actions.map((action, i) => {
                  return (
                    <p key={i} className="actions">
                      <img src={action.icon} alt={`${action.text} Icon`} />
                      {action.text}
                    </p>
                  )
                })}
              </div>
            }
            on="click"
            position="top right"
          />
        </div>
      </div>
      <hr />

      <div className="edit-user-container">
        <div className="edit-user-title">Account Details</div>
        <div className="fullname-container">
          <CommonInput
            icon="pencil"
            iconPosition="right"
            inputStyle="halfwidth-inputs"
            type="text"
            value={firstName}
          />
          <CommonInput
            icon="pencil"
            iconPosition="right"
            inputStyle="halfwidth-inputs"
            type="text"
            value={lastName}
          />
        </div>
        <CommonInput
          icon="user"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="text"
          value={userID}
        />
        <CommonInput
          icon="lock"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="password"
          value={password}
        />

        <CommonInput
          icon="mail"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="email"
          value={email}
        />
        <CommonInput
          icon="mobile alternate"
          iconPosition="left"
          inputStyle="fullwidth-inputs"
          type="text"
          value={phoneNumber}
        />
        <CommonInput
          icon="pencil"
          iconPosition="right"
          inputStyle="fullwidth-inputs"
          type="text"
          value={organiztion}
        />
        <CommonInput
          icon="pencil"
          iconPosition="right"
          inputStyle="fullwidth-inputs"
          type="text"
          value={group}
        />
        <CommonInput
          icon="pencil"
          iconPosition="right"
          inputStyle="fullwidth-inputs"
          type="text"
          value={department}
        />

        <div className="actions">
          <CommonButtons content="CANCEL" btnClass="cancel-btn" />
          <CommonButtons content="SAVE CHANGES" btnClass="create-btn" />
        </div>
      </div>
    </div>
  )
}

export default EditUserOnOrganization
