/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState, Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CommonInput from '../common/CommonInput'
import CommonPasswordInput from '../common/CommonPasswordInput'
import CommonDropdown from '../common/CommonDropdown'
import CommonButtons from '../common/CommonButton'
import CommonNotifPortal from '../common/CommonNotifPortal'
import CommonManipulators from '../common/CommonManipulators'
import CommonValidations from '../common/CommonValidations'

import { createUsers } from '../redux/user/userActions'
import { fetchApi } from '../redux/organization/organizationActions'
import Authentication from '../common/Authentication'
import {
  mgAdmin,
  issuer,
  investor,
  IPA
} from '../lib/AddNewOrganizationUserData'

const AddUserOnAccountTab = ({ showModal, company, card }) => {
  const dispatch = useDispatch()
  const orgState = useSelector(state => state.organization)
  const accountState = useSelector(state => state.log)
  const orgList = []

  let user = JSON.parse(Authentication.loadUserProfile())
  let curr = orgState.organizations.find(orgz => {
    return orgz.orgId === user.orgId
  })

  let selectedCur = orgState.organizations.find(orgz => {
    return orgz.orgId === orgState.selectedOrg
  })

  const [roles, setRoles] = useState([])
  orgState.organizations.map((org, i) => {
    return orgList.push({
      key: i + 1,
      text: org.legalName,
      value: org.orgId,
      orgnetworkroles: org.networkRole
    })
  })

  const [disabled, setDisabled] = useState(true)
  const [inputStatus, setInputStatus] = useState({
    email: null,
    emailValid: false,
    password: false,
    confirmPass: null
  })
  const [loader, setLoader] = useState(false)

  const [createUser, setCreateUser] = useState({
    uid: '',
    orgId: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    department: '',
    groups: '',
    roles: [],
    confirmPass: '',
    password: '',
    profile: '{}',
    active: true
  })

  const inputs = [
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      icon: 'user',
      iconPos: 'left',
      placeholder: 'Account ID',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'uid',
      value: createUser.uid
    },
    {
      onContainer: false,
      inputType: CommonPasswordInput,
      // type: 'password',
      icon: 'lock',
      iconPos: 'left',
      placeholder: 'Password',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'password',
      value: createUser.password,
      status: inputStatus,
      callbackInputStatus: setInputStatus
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'password',
      icon: 'lock',
      iconPos: 'left',
      placeholder: 'Confirm Password',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'confirmPass',
      value: createUser.confirmPass,
      error:
        inputStatus.confirmPass === null ? false : !inputStatus.confirmPass,
      status: inputStatus.confirmPass,
      statusMessage: 'Confirm password do not match'
    },
    {
      onContainer: [
        {
          inputType: CommonInput,
          type: 'text',
          placeholder: 'First name',
          inputStyle: 'halfwidth-inputs',
          required: true,
          name: 'firstName',
          value: createUser.firstName
        },
        {
          inputType: CommonInput,
          type: 'text',
          placeholder: 'Last name',
          inputStyle: 'halfwidth-inputs',
          required: true,
          name: 'lastName',
          value: createUser.lastName
        }
      ]
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'email',
      icon: 'mail',
      iconPos: 'left',
      placeholder: 'Email Address',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'email',
      error: inputStatus.email === null ? false : !inputStatus.email,
      status: inputStatus.email,
      statusMessage: 'Invalid email',
      value: createUser.email
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'number',
      icon: 'mobile alternate',
      iconPos: 'left',
      placeholder: 'Phone number',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'phone',
      value: createUser.phone
    },
    {
      onContainer: false,
      inputType: CommonDropdown,
      placeholder: 'Organization name',
      dropClass: 'fullwidth-dropdown',
      options: orgList,
      required: false,
      name: 'orgId'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Group (Optional)',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'groups',
      value: createUser.groups
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Department (Optional)',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'department',
      value: createUser.department
    },
    {
      onContainer: false,
      inputType: CommonDropdown,
      placeholder: 'Select a Role',
      dropClass: 'fullwidth-dropdown',
      options: roles,
      required: false,
      name: 'roles'
    }
  ]

  const { emailFormat } = CommonManipulators
  const { validateEmail } = CommonValidations

  const handleChange = event => {
    const { name, value } = event.target
    let targetVal

    if (name === 'email') {
      targetVal = emailFormat(value)

      if (inputStatus.emailValid) {
        validateEmail(targetVal, inputStatus, setInputStatus)
      }
    } else {
      targetVal = value
    }

    setCreateUser({ ...createUser, [name]: targetVal })
  }

  const handleBlur = event => {
    const { name } = event.target

    if (name === 'email') {
      validateEmail(createUser.email, inputStatus, setInputStatus)
    }
  }

  const handleDropDownChange = event => {
    const input = event.target.innerText
    const nameOrgRole = event.target.parentNode.parentNode.parentNode.getAttribute(
      'name'
    )
    const namesOrg = event.target.parentNode.parentNode.getAttribute('name')
    const orgIdFinder = orgList.find(orgName => orgName.text === input)

    if (curr.networkRole === 'OPERATOR') {
      if (card) {
        if (nameOrgRole === 'roles' || namesOrg === 'roles') {
          setCreateUser({ ...createUser, roles: [input] })
        } else if (nameOrgRole === 'orgId' || namesOrg === 'orgId') {
          setCreateUser({ ...createUser, orgId: orgIdFinder.value })
        }
      } else {
        let orgNetwork = orgIdFinder.orgnetworkroles

        let adminRole = ''
        if (orgNetwork === 'OPERATOR') {
          adminRole = 'MGADMIN'
        } else if (orgNetwork === 'ISSUER') {
          adminRole = 'Issuer - Senior Treasury Operations'
        } else if (orgNetwork === 'INVESTOR') {
          adminRole = 'Investor - Senior Operations'
        } else if (orgNetwork === 'IPA') {
          adminRole = 'IPA - Senior Operations'
        } else {
          adminRole = ''
        }

        if (nameOrgRole === 'orgId' || namesOrg === 'orgId') {
          setCreateUser({
            ...createUser,
            orgId: orgIdFinder.value,
            roles: [adminRole]
          })
        }
      }
    } else {
      if (nameOrgRole === 'roles' || namesOrg === 'roles') {
        setCreateUser({ ...createUser, roles: [input] })
      } else if (nameOrgRole === 'orgId' || namesOrg === 'orgId') {
        setCreateUser({ ...createUser, orgId: orgIdFinder.value })
      }
    }
  }
  const onCreateUser = () => {
    setLoader(true)

    setTimeout(() => {
      dispatch(createUsers(createUser))
      setLoader(false)
      dispatch(fetchApi(1))
      setNotif({ ...notif, open: true })
    }, 2000)

    setTimeout(() => {
      showModal(false)
    }, 5000)
  }

  const onEnterSubmit = event => {
    if (!disabled) {
      if (event.key === 'Enter') {
        onCreateUser()
      }
    }
  }

  useEffect(() => {
    if (
      createUser.password.length !== 0 &&
      createUser.confirmPass.length >= 8
    ) {
      if (createUser.password === createUser.confirmPass) {
        setInputStatus({
          ...inputStatus,
          confirmPass: true
        })
      } else {
        setInputStatus({
          ...inputStatus,
          confirmPass: false
        })
      }
    }

    if (createUser.confirmPass.length === 0) {
      setInputStatus({
        ...inputStatus,
        confirmPass: null
      })
    }
  }, [createUser.password, createUser.confirmPass])

  useEffect(() => {
    if (
      inputStatus.email !== null &&
      inputStatus.email !== false &&
      inputStatus.password &&
      inputStatus.confirmPass &&
      createUser.email.length !== 0 &&
      createUser.uid.length !== 0 &&
      createUser.firstName.length !== 0 &&
      createUser.lastName.length !== 0 &&
      createUser.phone.length !== 0 &&
      createUser.orgId.length !== 0 &&
      createUser.roles.length !== 0
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })

  useEffect(() => {
    if (card) {
      setCreateUser({ ...createUser, orgId: orgState.selectedOrg })
      // console.log(orgState.selectedOrg)
      document.querySelector('div[name="orgId"] .text').innerHTML = company
      document.querySelector('div[name="orgId"]').classList.add('disabled')

      if (selectedCur.networkRole === 'ISSUER') {
        setRoles(issuer)
      } else if (selectedCur.networkRole === 'IPA') {
        setRoles(IPA)
      } else if (selectedCur.networkRole === 'INVESTOR') {
        setRoles(investor)
      } else if (selectedCur.networkRole === 'OPERATOR') {
        setRoles(mgAdmin)
      }
      document.querySelector('div[name=roles]').style.display = 'block'
      // console.log(selectedCur)
    } else {
      if (curr.networkRole === 'ISSUER') {
        setRoles(issuer)
      } else if (curr.networkRole === 'IPA') {
        setRoles(IPA)
      } else if (curr.networkRole === 'INVESTOR') {
        setRoles(investor)
      } else if (curr.networkRole === 'OPERATOR') {
        setRoles(mgAdmin)
        document.querySelector('div[name=roles]').style.display = 'none'
      }
    }
  }, [])

  return (
    <form className="add-user-container" onKeyDown={onEnterSubmit}>
      <CommonNotifPortal
        notifOpen={accountState.notif.open}
        notifClass={accountState.notif.status}
        notifIcon={accountState.notif.icon}
        notifTextContent={accountState.notif.msg}
      />

      <div className="modal-form-title">Add an Account</div>
      {inputs.map((data, i) =>
        data.onContainer ? (
          <div className="fullname-container" key={i}>
            {data.onContainer.map((dataCont, i) => {
              return (
                <dataCont.inputType
                  key={i}
                  icon={dataCont.icon}
                  iconPosition={dataCont.iconPos}
                  placeholder={dataCont.placeholder}
                  inputStyle={dataCont.inputStyle}
                  type={dataCont.type}
                  name={dataCont.name}
                  value={dataCont.value}
                  onChange={event => handleChange(event)}
                  status={dataCont.status}
                  statusMessage={dataCont.statusMessage}
                />
              )
            })}
          </div>
        ) : (
          <Fragment key={i}>
            <data.inputType
              key={i}
              icon={data.icon}
              iconPosition={data.iconPos}
              placeholder={data.placeholder}
              inputStyle={data.inputStyle}
              type={data.type}
              name={data.name}
              value={data.value}
              options={data.options}
              dropdownClass={data.dropClass}
              onChange={event => {
                data.inputType === CommonDropdown
                  ? handleDropDownChange(event)
                  : handleChange(event)
              }}
              onBlur={event => handleBlur(event)}
              error={data.error}
              status={data.status}
              statusMessage={data.statusMessage}
              callbackInputStatus={data.callbackInputStatus}
            />
          </Fragment>
        )
      )}
      <div className="actions">
        <CommonButtons
          content="CANCEL"
          btnClass="cancel-btn btn-gray"
          onClick={() => showModal(false)}
        />
        <CommonButtons
          content="CREATE ACCOUNT"
          btnClass="create-btn btn-blue"
          onClick={onCreateUser}
          disabled={disabled}
          loader={loader}
        />
      </div>
    </form>
  )
}

export default AddUserOnAccountTab
