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
import CommonInput from '../../../common/CommonInput'
import CommonButtons from '../../../common/CommonButton'
import CommonManipulators from '../../../common/CommonManipulators'
import CommonValidations from '../../../common/CommonValidations'

const ForgotPassword = props => {
  const { loginStep } = props
  const [email, setEmail] = useState('')
  const [inputStatus, setInputStatus] = useState({
    email: null
  })
  const [disabled, setDisabled] = useState(true)

  const { emailFormat } = CommonManipulators
  const { validateEmail } = CommonValidations

  const handleEmail = event => {
    const { value } = event.target
    const targetVal = emailFormat(value)

    setEmail(targetVal)
  }

  const handleEmailStatus = event => {
    const { value } = event.target

    validateEmail(value, inputStatus, setInputStatus)
  }

  useEffect(() => {
    if (
      inputStatus.email !== null &&
      inputStatus.email !== false &&
      email.length !== 0
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })
  return (
    <div className="login-page-wrapper">
      <div className="login-content">
        <img
          src={require('../../../assets/svg/login-logo.svg')}
          className="ipa-login-logo"
        />
        <p className="login-message">FORGOT PASSWORD?</p>
        <p className="steps">
          Kindly enter your registered email and we will get back to you with a
          reset password link and OTP confirmation.
        </p>
        <CommonInput
          icon="mail"
          iconPosition="left"
          placeholder="Enter Email Address"
          inputStyle="user-input"
          type="email"
          value={email}
          onChange={handleEmail}
          onBlur={handleEmailStatus}
          status={inputStatus.email}
          statusMessage="Invalid email"
        />
        <div className="btn-wrapper">
          <CommonButtons
            content="Submit"
            btnClass="submit-btn"
            disabled={disabled}
          />
        </div>
        <p className="back-to-login" onClick={() => loginStep('loginForm')}>
          <u>Go back to Login page</u>
        </p>
      </div>
    </div>
  )
}
export default ForgotPassword
