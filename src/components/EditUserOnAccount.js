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
// import { Popup, Icon, Modal, Portal, Segment } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

import {
  // setUserStatus,
  fetchUserAccount,
  updateUserAccount
  // updateUserRole
} from '../redux/user/userActions'
import { fetchApi } from '../redux'

import CommonInput from '../common/CommonInput'
import CommonButton from '../common/CommonButton'
import CommonDropdown from '../common/CommonDropdown'
import CommonNotifPortal from '../common/CommonNotifPortal'
import CommonManipulators from '../common/CommonManipulators'
import CommonValidations from '../common/CommonValidations'

// const roles = [
//   {
//     key: 1,
//     text: 'Issuer - Senior Treasury Operations',
//     value: 'Issuer - Senior Treasury Operations'
//   },
//   {
//     key: 2,
//     text: 'Investor - Senior Operations',
//     value: 'Investor - Senior Operations'
//   },
//   {
//     key: 3,
//     text: 'IPA - Senior Operations',
//     value: 'IPA - Senior Operations'
//   },
//   {
//     key: 4,
//     text: 'MGADMIN',
//     value: 'MGADMIN'
//   }
// ]

const EditUserOnAccount = user => {
  // const [openPopup, setopenPopup] = useState(false)
  // const [showReset, setShowReset] = useState(false)
  // const [openSetRoleModal, setopenSetRoleModal] = useState(false)
  // const [openDeactivateModal, setopenDeactivateModal] = useState(false)
  // const [openResetModal, setopenResetModal] = useState(false)
  // const [openPortal, setopenPortal] = useState(false)
  // const [roleValue, setroleValue] = useState({
  //   roles: ''
  // })
  // const [userIdSetRole, setuserIdSetRole] = useState('')
  const orgState = useSelector(state => state.organization)
  const userState = useSelector(state => state.log.editAccountData)
  const accountState = useSelector(state => state.log)

  const orgList = []
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    active: userState.active,
    id: userState.id,
    uid: userState.uid,
    orgId: userState.orgId,
    roles: userState.roles,
    firstName: userState.firstName,
    lastName: userState.lastName,
    email: userState.email,
    phone: userState.phone,
    organization: userState.organization,
    group: '',
    deparment: ''
  })
  const [inputStatus, setInputStatus] = useState({
    email: true,
    emailValid: true
  })
  const [disabled, setDisabled] = useState(false)
  const [loaderUpdate, setLoaderUpdate] = useState(false)
  const [loaderReset, setLoaderReset] = useState(false)
  const [notif, setNotif] = useState({
    open: false,
    status: '',
    icon: '',
    msg: ''
  })

  const { emailFormat } = CommonManipulators
  const { validateEmail } = CommonValidations

  orgState.organizations.map((org, i) => {
    return orgList.push({
      key: i + 1,
      text: org.legalName,
      value: org.legalName
    })
  })

  // const handleOpen = () => {
  //   setopenPopup(!openPopup)
  // }

  // const handleClose = bool => {
  //   setopenPopup(!openPopup)
  //   if (bool) {
  //     setopenSetRoleModal(!openSetRoleModal)
  //     setuserIdSetRole(userData.id)
  //   }
  // }

  // const handleCloseModal = () => {
  //   setopenSetRoleModal(!openSetRoleModal)
  // }

  // const openDeactivate = () => {
  //   setopenPopup(!openPopup)
  //   setopenDeactivateModal(!openDeactivateModal)
  // }

  // const handleCloseDeactivateModal = () => {
  //   setopenDeactivateModal(!openDeactivateModal)
  // }

  useEffect(() => {
    // if (userData.password !== null) {
    //   setShowReset(false)
    // }

    dispatch(fetchUserAccount(user.id, orgState.organizations))
    // setUserData(userState.accountData)
  }, [])

  // useEffect(() => {
  //   setUserData(userState.accountData)
  // }, [useState])

  // const resetPassword = () => {
  //   setopenResetModal(true)
  // }

  // const handleCloseResetModal = () => {
  //   setopenResetModal(false)
  // }

  // const sendResetRequest = () => {
  //   // console.log(userData.id)
  //   setopenResetModal(false)
  //   setopenPortal(true)
  // }

  // const handleClosePortal = () => {
  //   setopenPortal(false)
  // }

  // const handleOpenPortal = () => {
  //   setopenPortal(true)
  // }
  // if (openPortal !== false) {
  //   setInterval(() => {
  //     setopenPortal(false)
  //   }, 5000)
  // }

  // const setRoleValue = e => {
  //   setroleValue({ roles: [e.target.innerText] })
  // }

  // const updateSetRole = () => {
  //   updateUserRole(userIdSetRole, roleValue)
  //   setopenSetRoleModal(!openSetRoleModal)
  //   dispatch(fetchApi())
  // }

  // const handleActivateUser = () => {
  //   setUserStatus(userData.id, 'activate')
  //   setUserData({ ...userData, active: true })
  //   dispatch(fetchApi())
  //   setopenPopup(!openPopup)
  // }

  // const handleDeactivateUser = () => {
  //   setUserStatus(userData.id, 'deactivate')
  //   setUserData({ ...userData, active: false })
  //   dispatch(fetchApi())
  //   handleCloseDeactivateModal()
  // }

  const handleDetailsOnChange = e => {
    let name = e.target.name
    let value = e.target.value
    let targetVal

    // if (name === 'password') {
    //   setShowReset(true)

    //   if (value === '') {
    //     setShowReset(false)
    //   }
    // }

    if (name === 'email') {
      targetVal = emailFormat(value)

      if (inputStatus.emailValid) {
        validateEmail(targetVal, inputStatus, setInputStatus)
      }
    } else {
      targetVal = value
    }

    setUserData({
      ...userData,
      [name]: targetVal
    })
  }

  const handleBlur = event => {
    const { name } = event.target

    if (name === 'email') {
      validateEmail(userData.email, inputStatus, setInputStatus)
    }
  }

  const handleOrgDropdown = e => {
    let selectedOrg = e.target.innerText

    let finalSelctedOrg = orgState.organizations.find(org => {
      return org.legalName === selectedOrg
    })

    setUserData({
      ...userData,
      orgId: finalSelctedOrg.orgId,
      organization: [finalSelctedOrg]
    })
  }

  const handleUpdateUser = () => {
    setLoaderUpdate(true)

    setTimeout(() => {
      dispatch(updateUserAccount(userData))
      setLoaderUpdate(false)
      dispatch(fetchApi())
    }, 2000)

    setTimeout(() => {
      user.modal(false)
    }, 5000)
  }

  const handleEnterSubmit = event => {
    if (!disabled) {
      if (event.key === 'Enter') {
        handleUpdateUser()
      }
    }
  }

  const handleResetPass = () => {
    setLoaderReset(true)

    setTimeout(() => {
      setNotif({
        ...notif,
        open: true,
        status: 'notif-success',
        icon: 'check circle',
        msg: 'Reset password link sent to the account email'
      })
      setLoaderReset(false)
    }, 2000)

    setTimeout(() => {
      setNotif({
        ...notif,
        open: false,
        status: 'notif-success',
        icon: 'check circle',
        msg: 'Reset password link sent to the account email'
      })
    }, 4500)
  }

  useEffect(() => {
    if (
      inputStatus.email !== null &&
      inputStatus.email !== false &&
      userData.firstName.length !== 0 &&
      userData.lastName.length !== 0 &&
      userData.uid.length !== 0 &&
      userData.email.length !== 0 &&
      userData.phone.length !== 0
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })

  // console.log(accountState)

  return (
    <div className="edit-container">
      <CommonNotifPortal
        notifOpen={notif.open}
        notifClass={notif.status}
        notifIcon={notif.icon}
        notifTextContent={notif.msg}
      />

      <CommonNotifPortal
        notifOpen={accountState.notif.open}
        notifClass={accountState.notif.status}
        notifIcon={accountState.notif.icon}
        notifTextContent={accountState.notif.msg}
      />

      {userData.id ? (
        <div>
          <div className="edit-header">
            <div className="edit-summary">
              <div>
                <div className="avatar-icon">
                  {/* {`
                    ${userData.firstName.charAt(0)}
                    ${userData.lastName.charAt(0)}
                  `} */}
                  <span>{userData.firstName.charAt(0)}</span>
                  <span>{userData.lastName.charAt(0)}</span>
                </div>
                <p
                  className={`status ${
                    userData.active ? 'active' : 'inactive'
                  }`}
                >
                  {userData.active ? 'Active' : 'Inactive'}
                </p>
              </div>
              <div className="edit-name-display">
                <h3>{`${userData.firstName} ${userData.lastName}`}</h3>
                <p className="role">{userData.roles[0]}</p>
              </div>
            </div>

            {/* <div className="edit-dropdown">
              <Modal
                className="modal-popup"
                style={{ backgroundColor: '#000' }}
                open={openSetRoleModal}
                onClose={handleCloseModal}
                centered
                size="tiny"
              >
                <Modal.Content className="set-role-content">
                  <p className="modal-form-title">Set Role</p>
                  <CommonDropdown
                    placeholder="Select a Role"
                    name={roles}
                    options={roles}
                    dropdownClass="dropdown-select-role"
                    onChange={setRoleValue}
                  />
                  <div className="btn-container">
                    <CommonButton
                      content="CANCEL"
                      btnClass="btn-cancel btn-gray"
                      onClick={handleCloseModal}
                    />
                    <CommonButton
                      content="UPDATE"
                      btnClass="btn-save btn-blue"
                      onClick={updateSetRole}
                    />
                  </div>
                </Modal.Content>
              </Modal>
              <Modal
                open={openDeactivateModal}
                onClose={handleCloseDeactivateModal}
                className="modal-popup"
                style={{ backgroundColor: '#000' }}
                centered
                size="tiny"
              >
                <Modal.Content className="delete-content">
                  <p className="modal-form-title">
                    Are you sure you want to deactivate this user?
                  </p>
                  <div className="btn-actions">
                    <CommonButton
                      content="CANCEL"
                      btnClass="btn-cancel btn-white"
                      onClick={handleCloseDeactivateModal}
                    />
                    <CommonButton
                      content="DEACTIVATE"
                      btnClass="btn-deact btn-blue"
                      onClick={handleDeactivateUser}
                    />
                  </div>
                </Modal.Content>
              </Modal>

              <Modal
                open={openResetModal}
                onClose={handleCloseResetModal}
                className="modal-popup"
                style={{ backgroundColor: '#000' }}
                centered
                size="tiny"
              >
                <Modal.Content className="delete-content">
                  <p className="modal-form-title-reset">Reset Password</p>
                  <p className="reset-message">
                    A link to reset a password will be sent in this email.
                  </p>
                  <CommonInput
                    icon="mail"
                    iconPosition="left"
                    inputStyle="reset-inputs"
                    type="email"
                    value={userData.email}
                  />
                  <div className="btn-actions-reset">
                    <CommonButton
                      content="CANCEL"
                      btnClass="btn-cancel-reset btn-gray"
                      onClick={handleCloseResetModal}
                    />
                    <CommonButton
                      content="SEND"
                      btnClass="btn-update-reset btn-blue"
                      onClick={sendResetRequest}
                    />
                  </div>
                </Modal.Content>
              </Modal>
              <Portal
                open={false}
                onClose={handleClosePortal}
                onOpen={handleOpenPortal}
              >
                <Segment
                  style={{
                    right: '9%',
                    position: 'fixed',
                    top: '0',
                    zIndex: 1000
                  }}
                  className="portal-content"
                >
                  <p className="header-success">Success!</p>
                  <p>{`A link to reset password has been sent to ${userData.email}`}</p>
                </Segment>
              </Portal>
              <Popup
                className="action-popup"
                trigger={<Icon link name="ellipsis vertical" />}
                open={openPopup}
                onClose={() => handleClose(false)}
                onOpen={handleOpen}
                content={
                  <div className="action-menu">
                    <p className="actions" onClick={() => handleClose(true)}>
                      <img
                        src={require('../assets/svg/settings.svg')}
                        alt="Set Role"
                        className="action-menu-icon"
                      />
                      Set Role
                    </p>

                    {userData.active ? (
                      <p className="actions" onClick={openDeactivate}>
                        <img
                          src={require('../assets/svg/edit.svg')}
                          alt="Deactivate"
                          className="action-menu-icon"
                        />
                        Deactivate
                      </p>
                    ) : (
                      <p className="actions" onClick={handleActivateUser}>
                        <img
                          src={require('../assets/svg/edit.svg')}
                          alt="Activate"
                          className="action-menu-icon"
                        />
                        Activate
                      </p>
                    )}

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
            </div> */}
            <div>
              <CommonButton
                content="RESET PASSWORD"
                btnClass="btn-reset-password btn-blue"
                onClick={handleResetPass}
                loader={loaderReset}
                loaderSize="mini"
              />
            </div>
          </div>

          <form className="edit-user-container" onKeyDown={handleEnterSubmit}>
            <div className="edit-user-title">Account Details</div>
            <div className="fullname-container">
              <CommonInput
                icon="pencil"
                // iconPosition="right"
                inputStyle="halfwidth-inputs"
                type="text"
                name="firstName"
                value={userData.firstName}
                placeholder="First Name"
                onChange={e => handleDetailsOnChange(e)}
              />
              <CommonInput
                icon="pencil"
                // iconPosition="right"
                inputStyle="halfwidth-inputs"
                type="text"
                name="lastName"
                value={userData.lastName}
                placeholder="Last Name"
                onChange={e => handleDetailsOnChange(e)}
              />
            </div>
            <CommonInput
              icon="user"
              iconPosition="left"
              inputStyle="fullwidth-inputs"
              type="text"
              name="uid"
              value={userData.uid}
              placeholder="Account ID"
              onChange={e => handleDetailsOnChange(e)}
            />
            {/* <div className="edit-password">
              <CommonInput
                icon="lock"
                iconPosition="left"
                inputStyle="fullwidth-inputs"
                type="password"
                name="password"
                value={userData.password}
                onChange={e => handleDetailsOnChange(e)}
              />
              {showReset ? (
                <div className="reset">
                  <p onClick={resetPassword}>RESET PASSWORD</p>
                </div>
              ) : null}
            </div> */}
            <CommonInput
              icon="mail"
              iconPosition="left"
              inputStyle="fullwidth-inputs"
              type="email"
              name="email"
              value={userData.email}
              placeholder="Email Address"
              onBlur={handleBlur}
              onChange={e => handleDetailsOnChange(e)}
              error={inputStatus.email === null ? false : !inputStatus.email}
              status={inputStatus.email}
              statusMessage="Invalid email"
            />
            <CommonInput
              icon="mobile alternate"
              iconPosition="left"
              inputStyle="fullwidth-inputs"
              type="text"
              name="phone"
              value={userData.phone}
              placeholder="Phone number"
              onChange={e => handleDetailsOnChange(e)}
            />
            <CommonDropdown
              disabled={user.tableType === 'Organization' ? true : false}
              placeholder="Organization name"
              dropdownClass={`fullwidth-inputs input-dropdown ${
                user.tableType === 'Organization' ? 'disabled-org' : null
              }`}
              type="text"
              name="orgId"
              value={userData.organization[0].legalName}
              options={orgList}
              onChange={e => handleOrgDropdown(e)}
            />
            <CommonInput
              icon="pencil"
              // iconPosition="right"
              inputStyle="fullwidth-inputs"
              type="text"
              placeholder="Group (Optional)"
              value={userData.group}
            />
            <CommonInput
              icon="pencil"
              // iconPosition="right"
              inputStyle="fullwidth-inputs"
              type="text"
              placeholder="Department (Optional)"
              value={userData.deparment}
            />

            <div className="actions">
              <CommonButton
                content="CANCEL"
                btnClass="cancel-btn btn-gray"
                onClick={() => user.modal(false)}
              />
              <CommonButton
                content="SAVE CHANGES"
                btnClass="create-btn btn-blue"
                onClick={handleUpdateUser}
                disabled={disabled}
                loader={loaderUpdate}
              />
            </div>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default EditUserOnAccount
