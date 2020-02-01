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

const MainModal = ({
  btnTitle,
  children,
  icon = '',
  btnClass,
  img = '',
  trigger = (
    <CommonButtons
      content={btnTitle}
      image={img}
      icon={icon}
      btnClass={btnClass}
    />
  ),
  open = false,
  onClose,
  onOpen
}) => {
  return (
    <Modal
      open={open}
      trigger={trigger}
      onClose={onClose}
      onOpen={onOpen}
      className="main-modal"
      size="small"
      closeIcon={{
        style: { top: '20px', right: '20px', fontSize: '20px' },
        color: 'black',
        name: 'close'
      }}
    >
      {children}
    </Modal>
  )
}

export default MainModal
