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
import CommonInput from '../common/CommonInput'
import CommonButtons from '../common/CommonButton'
import CommonToggle from './CommonToggle'
import { useDispatch } from 'react-redux'
import {
  editOrganization,
  deactivateOrganization,
  activateOrganization
} from '../redux'
import CommonNotifPortal from '../common/CommonNotifPortal'

const EditOrganization = ({ data, handleCloseModal }) => {
  const dispatch = useDispatch()
  const { orgId, legalName, active } = data
  const [status, setStatus] = useState(active)
  const [editData, setEditData] = useState({ legalName })
  const [loader, setLoader] = useState(false)
  const [notif, setNotif] = useState({
    open: false,
    status: 'notif-success',
    icon: 'check circle',
    msg: 'Organization Name Updated Successfully!'
  })
  const [notif_failed, setNotif_failed] = useState({
    open: false,
    status: 'notif-failure',
    icon: 'warning circle',
    msg: 'Please Modify The Organization Name!'
  })

  const onChangeInput = event => {
    const value = event.target.value
    setEditData({ legalName: value })
  }

  const onEditOrg = () => {
    if (legalName === editData.legalName) {
      setLoader(true)
      setTimeout(() => {
        setNotif_failed({ ...notif_failed, open: true })
        setLoader(false)
      }, 2000)

      setTimeout(() => {
        setNotif_failed({ ...notif_failed, open: false })
      }, 5000)
    } else {
      setLoader(true)
      setTimeout(() => {
        dispatch(editOrganization(orgId, editData))
        setLoader(false)
        setNotif({ ...notif, open: true })
      }, 2000)

      setTimeout(() => {
        setNotif({ ...notif, open: false })
      }, 3000)

      setTimeout(() => {
        handleCloseModal()
      }, 4000)
    }
  }

  const setOrgStatus = e => {
    if (status) {
      //Deactivate org
      setStatus(e)
      dispatch(deactivateOrganization(orgId))
      setNotif({
        open: true,
        status: 'notif-success',
        icon: 'check circle',
        msg: `${legalName} Deactivated Successfully!`
      })
      setTimeout(() => {
        setNotif({
          open: false,
          status: 'notif-success',
          icon: 'check circle',
          msg: `${legalName} Deactivated Successfully!`
        })
      }, 3000)
    } else {
      //Activate org
      setStatus(e)
      dispatch(activateOrganization(orgId))
      setNotif({
        open: true,
        status: 'notif-success',
        icon: 'check circle',
        msg: `${legalName} Activated Successfully!`
      })
      setTimeout(() => {
        setNotif({
          open: false,
          status: 'notif-success',
          icon: 'check circle',
          msg: `${legalName} Activated Successfully!`
        })
      }, 3000)
    }
  }

  return (
    <div className="add-new-organization-wrapper">
      <p className="modal-form-title">Edit Organization</p>
      <CommonInput
        name="legalName"
        placeholder="Organization name"
        inputStyle="organization-inputs"
        value={editData.legalName}
        onChange={onChangeInput}
      />
      <p>Organization Status: {status ? 'Active' : 'Inactive'}</p>
      <CommonToggle
        dataToggleActive={status}
        dataStateToggle="organizationStatus"
        handleToggleData={setOrgStatus}
      />
      <div className="btn-actions">
        <CommonButtons
          content="CANCEL"
          btnClass="cancel-btn btn-gray"
          onClick={handleCloseModal}
        />
        <CommonButtons
          content="EDIT ORGANIZATION"
          btnClass="create-btn btn-blue"
          onClick={onEditOrg}
          loader={loader}
        />
      </div>
      <CommonNotifPortal
        notifOpen={notif.open}
        notifClass={notif.status}
        notifIcon={notif.icon}
        notifTextContent={notif.msg}
      />
      <CommonNotifPortal
        notifOpen={notif_failed.open}
        notifClass={notif_failed.status}
        notifIcon={notif_failed.icon}
        notifTextContent={notif_failed.msg}
      />
    </div>
  )
}

export default EditOrganization
