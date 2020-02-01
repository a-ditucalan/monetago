/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.'s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.'s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.'s consent.
 */

import React, { Fragment } from 'react'
import { Select } from 'semantic-ui-react'
import classnames from 'classnames'

const placeholderOptions = [
  {
    key: 'Operator',
    text: 'Operator',
    value: 'Operator'
  },
  {
    key: 'Issuer',
    text: 'Issuer',
    value: 'Issuer'
  },
  {
    key: 'IPA',
    text: 'IPA',
    value: 'IPA'
  },
  {
    key: 'Service Provider',
    text: 'Service Provider',
    value: 'Service Provider'
  }
]

const CommonDropdown = ({
  title,
  onChange,
  name,
  options = placeholderOptions,
  placeholder,
  isGray,
  dropdownClass = '',
  value,
  disabled,
  defaultValue
}) => {
  return (
    <Fragment>
      <Select
        onChange={onChange}
        name={name}
        className={classnames(dropdownClass, {
          'background-gray': isGray
        })}
        placeholder={placeholder}
        options={options}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </Fragment>
  )
}
export default CommonDropdown
