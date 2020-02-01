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

import CommonInput from '../../common/CommonInput'
import CommonButton from '../../common/CommonButton'
import CommonManipulators from '../../common/CommonManipulators'
import CommonValidations from '../../common/CommonValidations'
import CommonNotifPortal from '../../common/CommonNotifPortal'

const ForgotPassword = props => {
  const { loginStep } = props
  const [email, setEmail] = useState('')
  const [inputStatus, setInputStatus] = useState({
    email: null,
    emailValid: false
  })
  const [disabled, setDisabled] = useState(true)
  const [loader, setLoader] = useState(false)

  const { emailFormat } = CommonManipulators
  const { validateEmail } = CommonValidations

  const handleEmail = event => {
    const { value } = event.target
    const targetValue = emailFormat(value)

    setEmail(targetValue)

    if (inputStatus.emailValid) {
      validateEmail(targetValue, inputStatus, setInputStatus)
    }
  }

  const handleEmailStatus = event => {
    const { value } = event.target

    validateEmail(value, inputStatus, setInputStatus)
  }

  const handleSubmit = () => {
    setLoader(true)

    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }

  const handleEnterSubmit = event => {
    if (!disabled) {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    }
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
    <div>
      <form className="forgotpass-wrapper" onKeyDown={handleEnterSubmit}>
        <CommonNotifPortal
          notifOpen={loader}
          notifClass="notif-success"
          notifIcon="check circle"
          notifTextContent="Please check your inbox for the password reset link"
        />
        <div className="forgotpass-content">
          <img
            src={require('../../assets/images/monetaGo-logo.png')}
            alt="Logo"
            className="forgotpass-logo"
          />
          <div className="form-title">FORGOT PASSWORD?</div>
          <div className="forgotpass-subtitle form-subtitle-sm">
            Kindly enter your registered email and we will get back to you with
            a reset password link and OTP confirmation.
          </div>
          <CommonInput
            icon="mail"
            iconPosition="left"
            placeholder="Enter Email Address"
            inputStyle="common-input"
            type="email"
            value={email}
            onChange={handleEmail}
            onBlur={handleEmailStatus}
            error={inputStatus.email === null ? false : !inputStatus.email}
            status={inputStatus.email}
            statusMessage="Invalid email"
          />
          <CommonButton
            content="REQUEST RESET PASSWORD"
            btnClass="forgotpass-btn btn-blue"
            onClick={handleSubmit}
            loader={loader}
            disabled={disabled}
          />

          <div
            className="forgotpass-link form-link-text"
            onClick={() => loginStep('loginForm')}
          >
            Go back to login page
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
