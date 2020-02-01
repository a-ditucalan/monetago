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
import { Input, Icon } from 'semantic-ui-react'

const CommonInput = ({
  onChange,
  onClick,
  onBlur,
  name,
  type,
  disabled,
  background,
  value,
  inputStyle,
  placeholder,
  icon,
  iconPosition,
  required = false,
  title = '',
  error,
  status,
  statusMessage
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="input-wrapper">
      {title && <label className="default-text input-title">{title}</label>}
      <div className={type === 'password' ? 'input-password-holder' : null}>
        <Input
          name={name}
          type={showPassword ? (type === 'password' ? 'text' : type) : type}
          value={value}
          icon={icon}
          placeholder={placeholder}
          iconPosition={iconPosition}
          className={`input-${background} ${inputStyle}`}
          required={required}
          disabled={disabled}
          onClick={onClick}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        />
        {type === 'password' && (
          <div className="input-password-action">
            <div
              onClick={handleShowPassword}
              className="input-password-icon-eye"
            >
              <Icon name={showPassword ? 'unhide' : 'hide'} size="large" />
            </div>
          </div>
        )}
      </div>
      {status === false && <div className="input-message">{statusMessage}</div>}
    </div>
  )
}

export default CommonInput
