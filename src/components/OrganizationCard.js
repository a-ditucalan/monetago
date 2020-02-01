/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orgProfile } from '../redux'
import { Icon } from 'semantic-ui-react'
import MainModal from './MainModal'
import EditOrganization from './EditOrganization'

const OrganizationCard = () => {
  const org = useSelector(state => state.organization)
  const dispatch = useDispatch()
  const [modal, setModal] = useState({ state: false, data: '' })

  const handleOpenModal = (event, data) => {
    event.stopPropagation()
    setModal({ state: true, data: data })
  }

  const handleCloseModal = () => {
    setModal({ state: false, data: '' })
  }

  const handleClickOrgUser = (event, orgId) => {
    event.stopPropagation()

    dispatch(orgProfile('organizationAccountManagement', 'Account', orgId))
  }

  return (
    <div>
      <div className="org-card-wrapper">
        <MainModal
          trigger=""
          open={modal.state}
          onClose={handleCloseModal}
          children={
            <EditOrganization
              data={modal.data}
              handleCloseModal={handleCloseModal}
            />
          }
        />
        {org.organizations.map((item, index) => (
          <div
            className="org-card-item"
            key={index}
            onClick={() =>
              dispatch(
                orgProfile(
                  'organizationAccountManagement',
                  'Corporate',
                  item.orgId
                )
              )
            }
          >
            <div className="org-card-header">
              <span
                className={`org-card-status status-text ${
                  item.active ? 'active' : 'inactive'
                }`}
              >
                {item.active ? 'Active' : 'Inactive'}
              </span>
              <Icon name="pencil" onClick={e => handleOpenModal(e, item)} />
            </div>
            <div className="org-card-content">
              {/* <div className="org-card-avatar">{item.avatar}</div> */}
              {/* Temporary Avatar */}
              <div className="org-card-avatar">
                {item.legalName.charAt(0).toUpperCase() +
                  item.legalName.charAt(1).toUpperCase()}
              </div>
              <div className="org-card-name">{item.legalName}</div>
              {/* <div className="org-card-info content-subtitle">{item.info}</div> */}
            </div>
            <div className="org-card-type-wrapper">
              <div
                className={`org-card-type content-subtitle ${
                  item.networkSubRole ? 'org-card-type-subrole' : null
                }`}
              >
                <span>Type: </span>
                <span className="content-type">{item.networkRole}</span>
              </div>
              {item.networkSubRole && (
                <div className="org-card-subrole content-subtitle">
                  <span>Subrole: </span>
                  <span className="content-type">{item.networkSubRole}</span>
                </div>
              )}
              {org.orgAndUser.map((userItem, index) =>
                item.orgId === userItem.org.orgId ? (
                  <div className="org-card-user-wrapper" key={index}>
                    <div
                      onClick={event => handleClickOrgUser(event, item.orgId)}
                    >
                      <img
                        src={require('../assets/svg/account-icon.svg')}
                        alt="Account"
                      />
                      <span className="org-card-user">
                        {userItem.userAccounts.length <= 1
                          ? `${userItem.userAccounts.length} account`
                          : `${userItem.userAccounts.length} accounts`}
                      </span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrganizationCard
