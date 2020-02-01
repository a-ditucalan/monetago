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
import { useDispatch } from 'react-redux'

import { createOrganization } from '../redux/organization/organizationActions'
import CommonInput from '../common/CommonInput'
import CommonDropdown from '../common/CommonDropdown'
import CommonButtons from '../common/CommonButton'
import CommonNotifPortal from '../common/CommonNotifPortal'
import { fetchApi } from '../redux/organization/organizationActions'
import { subroles, organization } from '../lib/AddNewOrganizationData'

const AddNewOrganization = props => {
  const { showModal } = props
  const dispatch = useDispatch()

  const [orgType, setOrgType] = useState({
    legalName: '',
    networkRole: null,
    networkSubRole: null,
    configLDAP: '',
    active: true,
    version: 0
  })
  const [disabled, setDisabled] = useState(true)
  const [loader, setLoader] = useState(false)
  const [notif, setNotif] = useState({
    open: false,
    status: 'notif-success',
    icon: 'check circle',
    msg: 'New Organization Added Successfully!'
  })

  const onChangeInput = e => {
    const orgName = e.target.name
    const orgVal = e.target.value

    setOrgType({ ...orgType, [orgName]: orgVal })
  }

  const onChangeDropdown = e => {
    const orgRoleParent = e.target.parentNode.parentNode.parentNode.getAttribute(
      'name'
    )
    const orgRole = e.target.parentNode.parentNode.getAttribute('name')
    const orgRoleVal = e.target.innerText.toUpperCase().replace(/\s/g, '')

    if (orgRoleParent === 'networkSubRole' || orgRole === 'networkSubRole') {
      setOrgType({ ...orgType, networkSubRole: orgRoleVal })
    } else if (orgRole === 'networkRole' || orgRoleParent === 'networkRole') {
      setOrgType({ ...orgType, networkRole: orgRoleVal, networkSubRole: null })
    }
  }

  const onSubmitOrg = () => {
    setLoader(true)

    setTimeout(() => {
      dispatch(createOrganization(orgType))
      setLoader(false)
      dispatch(fetchApi(1))
      setNotif({ ...notif, open: true })
    }, 2000)

    setTimeout(() => {
      setNotif({ ...notif, open: false })
    }, 3000)

    setTimeout(() => {
      showModal(false)
    }, 4000)
  }

  useEffect(() => {
    if (orgType.legalName !== '' && orgType.networkRole !== null) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

    if (orgType.networkRole === 'SERVICEPROVIDER') {
      if (
        orgType.networkSubRole !== null &&
        orgType.legalName !== '' &&
        orgType.networkRole !== null
      ) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    } else {
    }
  })

  return (
    <div className="add-new-organization-wrapper">
      <p className="modal-form-title">Add Organization</p>
      <CommonInput
        name="legalName"
        placeholder="Organization name"
        inputStyle="organization-inputs"
        onChange={onChangeInput}
      />

      <CommonDropdown
        options={organization}
        name="networkRole"
        placeholder="Select Type of Organization"
        dropdownClass="select-org-dropdown"
        onChange={onChangeDropdown}
      />

      {orgType.networkRole === 'SERVICEPROVIDER' ? (
        <CommonDropdown
          options={subroles}
          name="networkSubRole"
          placeholder="Select Subrole"
          dropdownClass="select-org-dropdown"
          onChange={onChangeDropdown}
        />
      ) : null}

      <CommonInput
        name="configLDAP"
        placeholder="configLDAP"
        inputStyle="organization-inputs"
      />
      <div className="btn-actions">
        <CommonButtons
          content="CANCEL"
          btnClass="cancel-btn btn-gray"
          onClick={() => showModal(false)}
        />
        <CommonButtons
          content="CREATE ORGANIZATION"
          btnClass="create-btn btn-blue"
          onClick={onSubmitOrg}
          disabled={disabled}
          loader={loader}
        />
      </div>
      <CommonNotifPortal
        notifOpen={notif.open}
        notifClass={notif.status}
        notifIcon={notif.icon}
        notifTextContent={notif.msg}
      />
    </div>
  )
}

export default AddNewOrganization
