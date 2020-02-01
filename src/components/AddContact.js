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
import CommonInput from '../common/CommonInput'
import CommonButtons from '../common/CommonButton'

const AddContact = () => {
  const input = [
    {
      inputType: CommonInput,
      type: 'text',
      icon: 'user',
      iconPos: 'left',
      placeholder: 'Fullname',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'fullname'
    },
    {
      inputType: CommonInput,
      type: 'text',
      icon: 'user',
      iconPos: 'left',
      placeholder: 'Position',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'position'
    },
    {
      inputType: CommonInput,
      type: 'text',
      icon: 'mail',
      iconPos: 'left',
      placeholder: 'Email',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'email'
    },
    {
      inputType: CommonInput,
      type: 'text',
      icon: 'mobile',
      iconPos: 'left',
      placeholder: 'Cellphone Number',
      inputStyle: 'fullwidth-inputs',
      required: true,
      name: 'cpNum'
    }
  ]

  const [contactData, setContactData] = useState({
    fullname: '',
    position: '',
    email: '',
    number: ''
  })

  const onSumbit = e => {
    console.log(e)
  }

  const onChangeInput = e => {
    const data = e.target.name
    contactData[data] = e.target.value
  }

  return (
    <div className="add-contact-wrapper">
      <h2 className="content-title">Add New Contact</h2>
      {input.map((dataCont, i) => {
        return (
          <dataCont.inputType
            key={i}
            icon={dataCont.icon}
            iconPosition={dataCont.iconPos}
            placeholder={dataCont.placeholder}
            inputStyle={dataCont.inputStyle}
            type={dataCont.type}
            name={dataCont.name}
            onChange={onChangeInput}
          />
        )
      })}
      <div className="btn-holder">
        <CommonButtons content="CANCEL" btnClass="btn-gray" />
        <CommonButtons
          content="ADD NEW CONTACT"
          btnClass="btn-blue"
          onClick={onSumbit}
        />
      </div>
    </div>
  )
}

export default AddContact
