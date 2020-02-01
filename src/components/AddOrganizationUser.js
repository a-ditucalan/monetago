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
import { useSelector, useDispatch } from 'react-redux'
import { createUsers } from '../redux/user/userActions'

import CommonInput from '../common/CommonInput'
import CommonDropdown from '../common/CommonDropdown'
import CommonButtons from '../common/CommonButton'
import {
  mgAdmin,
  issuer,
  investor,
  IPA
} from '../lib/AddNewOrganizationUserData'

const AddOrganizationUser = ({ company, showModal }) => {
  const orgData = useSelector(state => state.organization)
  const dispatch = useDispatch()
  const [createUser, setCreateUser] = useState({
    uid: '',
    orgId: null,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    department: null,
    groups: null,
    roles: [],
    confirmPass: '',
    password: '',
    profile: '{}'
  })

  const handleChange = e => {
    const { name, value } = e.target
    setCreateUser({ ...createUser, [name]: value })
    console.log(createUser)
  }

  const handleDropDownChange = e => {
    const input = e.target.innerText
    const nameOrgRole = e.target.parentNode.parentNode.parentNode.getAttribute(
      'name'
    )
    const namesOrg = e.target.parentNode.parentNode.getAttribute('name')

    if (nameOrgRole === 'roles' || namesOrg === 'roles') {
      setCreateUser({ ...createUser, roles: [input] })
    }
  }

  const onCreateUser = () => {
    if (createUser.password === createUser.confirmPass) {
      dispatch(createUsers(createUser))
    } else {
      alert(`Password did'nt match`)
    }
  }

  //get the selected organization
  let curr = orgData.organizations.find(orgz => {
    return orgz.orgId === orgData.selectedOrg
  })

  const [roles, setRoles] = useState([])

  useEffect(() => {
    setCreateUser({ orgId: orgData.selectedOrg })
    document.querySelector('input[value][name="orgName"]').value = company

    if (curr.networkRole === 'ISSUER') {
      setRoles(issuer)
    } else if (curr.networkRole === 'IPA') {
      setRoles(IPA)
    } else if (curr.networkRole === 'INVESTOR') {
      setRoles(investor)
    } else if (curr.networkRole === 'OPERATOR') {
      setRoles(mgAdmin)
    }
  }, [])

  const inputs = [
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      icon: 'user',
      iconPos: 'left',
      placeholder: 'Account ID',
      inputStyle: 'fullwidth-inputs',
      disabled: false,
      required: true,
      name: 'uid'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'password',
      icon: 'lock',
      iconPos: 'left',
      placeholder: 'Password',
      inputStyle: 'fullwidth-inputs',
      required: true,
      disabled: false,
      name: 'password'
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
      disabled: false,
      name: 'confirmPass'
    },
    {
      onContainer: [
        {
          inputType: CommonInput,
          type: 'text',
          placeholder: 'First name',
          inputStyle: 'halfwidth-inputs',
          required: true,
          disabled: false,
          name: 'firstName'
        },
        {
          inputType: CommonInput,
          type: 'text',
          placeholder: 'Last name',
          inputStyle: 'halfwidth-inputs',
          required: true,
          disabled: false,
          name: 'lastName'
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
      disabled: false,
      name: 'email'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      icon: 'mobile alternate',
      iconPos: 'left',
      placeholder: 'Phone number',
      inputStyle: 'fullwidth-inputs',
      required: true,
      disabled: false,
      name: 'phone'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Organization name',
      inputStyle: 'fullwidth-inputs',
      required: true,
      disabled: true,
      name: 'orgName'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Group (Optional)',
      inputStyle: 'fullwidth-inputs',
      required: true,
      disabled: false,
      name: 'groups'
    },
    {
      onContainer: false,
      inputType: CommonInput,
      type: 'text',
      placeholder: 'Department (Optional)',
      inputStyle: 'fullwidth-inputs',
      required: true,
      disabled: false,
      name: 'department'
    },
    {
      onContainer: false,
      inputType: CommonDropdown,
      icon: '',
      iconPos: '',
      placeholder: 'Select a Role',
      dropClass: 'fullwidth-inputs',
      options: roles,
      required: false,
      disabled: false,
      name: 'roles'
    }
  ]

  return (
    <div className="add-user-container">
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
                  disabled={dataCont.disabled}
                  type={dataCont.type}
                  name={dataCont.name}
                  onChange={e => handleChange(e)}
                />
              )
            })}
          </div>
        ) : (
          <data.inputType
            key={i}
            icon={data.icon}
            iconPosition={data.iconPos}
            placeholder={data.placeholder}
            inputStyle={data.inputStyle}
            type={data.type}
            name={data.name}
            options={data.options}
            disabled={data.disabled}
            dropdownClass={data.dropClass}
            onChange={e => {
              data.inputType === CommonDropdown
                ? handleDropDownChange(e)
                : handleChange(e)
            }}
          />
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
        />
      </div>
    </div>
  )
}

export default AddOrganizationUser
