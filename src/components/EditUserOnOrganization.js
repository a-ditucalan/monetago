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
import { Image, Popup, Icon, Modal } from 'semantic-ui-react'
import CommonInput from '../common/CommonInput'
import CommonButtons from '../common/CommonButton'
import CommonDropdown from '../common/CommonDropdown'

const roles = [
  {
    key: 1,
    text: 'Sample1',
    value: 'Sample1'
  },
  {
    key: 2,
    text: 'Sample2',
    value: 'Sample2'
  },
  {
    key: 3,
    text: 'Sample3',
    value: 'Sample3'
  },
  {
    key: 4,
    text: 'Sample4',
    value: 'Sample4'
  },
  {
    key: 5,
    text: 'Sample5',
    value: 'Sample5'
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
                <Modal
                  trigger={
                    <p className="actions">
                      <img
                        src={require('../assets/svg/settings.svg')}
                        alt="Set Role"
                        className="action-menu-icon"
                      />
                      Set Role
                    </p>
                  }
                  className="modal-popup"
                  style={{ backgroundColor: '#000' }}
                  centered
                  size="mini"
                >
                  <Modal.Content className="set-role-content">
                    <p>Set Role</p>
                    <CommonDropdown
                      placeholder="Select a Role"
                      name={roles}
                      options={roles}
                      dropdownClass="dropdown-select-role"
                    />
                    <div className="btn-container">
                      <CommonButtons content="CANCEL" btnClass="btn-cancel" />
                      <CommonButtons
                        content="SAVE CHANGES"
                        btnClass="btn-save"
                      />
                    </div>
                  </Modal.Content>
                </Modal>
                <p className="actions">
                  <img
                    src={require('../assets/svg/edit.svg')}
                    alt="Deactivate"
                    className="action-menu-icon"
                  />
                  Deactivate
                </p>
                <p className="actions">
                  <img
                    src={require('../assets/svg/delete.svg')}
                    alt="Delete"
                    className="action-menu-icon"
                  />
                  Delete
                </p>
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
