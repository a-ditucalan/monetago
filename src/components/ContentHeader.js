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
import { useDispatch } from 'react-redux'
import { orgActiveStep } from '../redux'
import { Image } from 'semantic-ui-react'
import MainModal from '../components/MainModal'
import AddUserOnAccountTab from './AddUserOnAccountTab'
import AddNewOrganization from './AddNewOrganization'
import AddOrganizationUser from './AddOrganizationUser'

const ContentHeader = ({
  contentHeaderTitle,
  btnContent,
  type = '',
  icon,
  info,
  orgType
}) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <div className="content-header-container">
      {type === 'OrgAndAcct' ? (
        <div></div>
      ) : type === 'cards' ? (
        <div
          className="back-link"
          onClick={() => dispatch(orgActiveStep('organizationCardList'))}
        >
          <Image src={require('../assets/svg/arrow-left.svg')} />
          <span>Back To Organization List</span>
        </div>
      ) : null}

      <div className="main-header">
        <div className="main-header-title">{contentHeaderTitle}</div>
        <MainModal
          btnTitle={btnContent}
          icon={icon}
          btnClass="add-user-btn"
          open={showModal}
          onClose={closeModal}
          onOpen={openModal}
        >
          {btnContent === 'Add Organization' ? (
            <AddNewOrganization showModal={setShowModal} />
          ) : btnContent === 'Add Account' && type === 'cards' ? (
            <AddUserOnAccountTab
              showModal={setShowModal}
              company={contentHeaderTitle}
              card="card"
            />
          ) : btnContent === 'Add Account' ? (
            <AddUserOnAccountTab showModal={setShowModal} />
          ) : btnContent === 'Edit User' ? (
            <EditUserOnAccount />
          ) : null}
        </MainModal>
      </div>
      {type === 'cards' ? (
        <div>
          <p className="supply">{info}</p>
          <div className="org-type">
            <p className="text-type">Type:</p>
            <p className="org">{orgType}</p>
          </div>
        </div>
      ) : type === 'OrgAndAcct' ? (
        <div className="content-header-line"></div>
      ) : null}
    </div>
  )
}

export default ContentHeader
