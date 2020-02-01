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

import { Input, Icon, Popup, Checkbox } from 'semantic-ui-react'

const CommonPasswordInput = ({
  onChange,
  background,
  value,
  name,
  inputStyle,
  placeholder,
  icon,
  iconPosition,
  required,
  title,
  status,
  callbackInputStatus
}) => {
  const [passwordMetrics, setPasswordMetrics] = useState({
    meetsMinimumLength: false,
    hasNumber: false,
    hasSpecial: false
  })
  const [iconColor, setIconColor] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  let passwordMethods = {
    meetsMinimumLength: password => password.length >= 8,
    hasNumber: password => new RegExp(/[0-9]/).test(password),
    hasSpecial: password =>
      new RegExp(/[-!@#$%^&*(),.?":{}|<>_~`/;]/).test(password)
  }

  const { meetsMinimumLength, hasNumber, hasSpecial } = passwordMetrics

  const passwordChecklist = [
    {
      label: 'Minimum 8 charaters',
      fullfilled: meetsMinimumLength
    },
    {
      label: 'One number',
      fullfilled: hasNumber
    },
    {
      label: 'One special character',
      fullfilled: hasSpecial
    }
  ]

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  //Check password status
  useEffect(() => {
    let newPasswordMetrics = {}

    Object.keys(passwordMethods).forEach(method => {
      let testResult = passwordMethods[method](value)

      newPasswordMetrics[method] = testResult
    })

    setPasswordMetrics({ ...passwordMetrics, ...newPasswordMetrics })
  }, [value])

  useEffect(() => {
    if (
      passwordMetrics.meetsMinimumLength &&
      passwordMetrics.hasNumber &&
      passwordMetrics.hasSpecial
    ) {
      callbackInputStatus({
        ...status,
        password: true
      })
      setIconColor(true)
    } else {
      callbackInputStatus({
        ...status,
        password: false
      })
      setIconColor(false)
    }
  }, [passwordMetrics])

  return (
    <div className="input-wrapper">
      {title && <label className="default-text input-title">{title}</label>}
      <div className="input-password-holder">
        <Input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          required={required}
          icon={icon}
          iconPosition={iconPosition}
          className={`input-${background} ${inputStyle}`}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="input-password-action">
          <div className="input-password-icon-info">
            {value.length !== 0 && (
              <Popup
                trigger={
                  iconColor ? (
                    <Icon color="green" name="check circle" />
                  ) : (
                    <Icon color="blue" name="info circle" />
                  )
                }
                position="top center"
                on={['hover']}
                content={
                  <div className="input-password-checklist">
                    {passwordChecklist.map(item => (
                      <div
                        className="input-password-checklist-item"
                        key={item.label}
                      >
                        <Checkbox
                          label={item.label}
                          checked={item.fullfilled}
                        />
                      </div>
                    ))}
                  </div>
                }
              />
            )}
          </div>
          <div onClick={handleShowPassword} className="input-password-icon-eye">
            <Icon name={showPassword ? 'unhide' : 'hide'} size="large" />
          </div>
        </div>
      </div>
      {/* {status === false && <div className="input-message">{statusMessage}</div>} */}
    </div>
  )
}

export default CommonPasswordInput
