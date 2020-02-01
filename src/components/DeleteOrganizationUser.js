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
import { Modal } from 'semantic-ui-react'
import CommonButtons from '../common/CommonButton'

const DeleteOrganizationUser = ({ btnTitle, icon, btnClass }) => {
  return (
    <Modal
      trigger={
        <CommonButtons content={btnTitle} icon={icon} btnClass={btnClass} />
      }
      className="modal-popup"
      style={{ backgroundColor: '#000' }}
      centered
      size="tiny"
    >
      <Modal.Content className="delete-content">
        <h3>Are you sure you want to deactivate this user?</h3>
        <CommonButtons content="CANCEL" btnClass="btn-cancel" />
        <CommonButtons content="DEACTIVATE" btnClass="btn-deact" />
      </Modal.Content>
    </Modal>
  )
}

export default DeleteOrganizationUser
