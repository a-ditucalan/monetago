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
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { login } from '../../redux/user/userActions'

import CommonButtons from '../../common/CommonButton'
import CommonInput from '../../common/CommonInput'
import CommonManipulators from '../../common/CommonManipulators'
import CommonValidations from '../../common/CommonValidations'
import CommonNotifPortal from '../../common/CommonNotifPortal'

const LoginForm = props => {
  const { loginStep } = props
  const history = useHistory()

  const accountState = useSelector(state => state.log)
  const dispatch = useDispatch()

  const { emailFormat } = CommonManipulators
  const { validateEmail } = CommonValidations

  const [user, setUser] = useState({ userEmail: '', pswd: '' })
  const [inputStatus, setInputStatus] = useState({
    email: null,
    emailValid: false
  })
  const [disabled, setDisabled] = useState(true)
  const [loader, setLoader] = useState(false)

  const onChangeInput = event => {
    const { name, value } = event.target
    let targetValue

    if (name === 'userEmail') {
      targetValue = emailFormat(value)

      if (inputStatus.emailValid) {
        validateEmail(targetValue, inputStatus, setInputStatus)
      }
    } else {
      targetValue = value
    }

    setUser({ ...user, [name]: targetValue })
  }

  const onBlurInput = event => {
    const { name } = event.target

    if (name === 'userEmail') {
      validateEmail(user.userEmail, inputStatus, setInputStatus)
    }
  }

  const onSubmitLog = () => {
    setLoader(true)

    setTimeout(() => {
      if (user.userEmail && user.pswd) {
        dispatch(login(user.userEmail, user.pswd, history))
        setLoader(false)
      }
    }, 2000)
  }

  const onEnterSubmit = event => {
    if (event.key === 'Enter') {
      console.log(disabled)

      if (disabled === false) {
        onSubmitLog()
      }
    }
  }

  useEffect(() => {
    if (
      inputStatus.email !== null &&
      inputStatus.email !== false &&
      user.userEmail.length !== 0 &&
      user.pswd.length !== 0
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })

  return (
    <div>
      <form className="login-form" onKeyDown={onEnterSubmit}>
        <CommonNotifPortal
          notifOpen={accountState.notif.open}
          notifClass={accountState.notif.status}
          notifIcon={accountState.notif.icon}
          notifTextContent={accountState.notif.msg}
        />
        <img
          src={require('../../assets/svg/login-logo.svg')}
          alt="Logo"
          className="logo"
        />
        <h2 className="login-form-title form-title">Sign in</h2>
        <div className="login-form-subtitle form-subtitle">
          Welcome to Treasury Debt Issuance
        </div>
        <div className="form-field">
          <CommonInput
            type="email"
            name="userEmail"
            value={user.userEmail}
            inputStyle="common-input"
            onBlur={onBlurInput}
            onChange={onChangeInput}
            error={inputStatus.email === null ? false : !inputStatus.email}
            status={inputStatus.email}
            statusMessage="Invalid email"
            icon="envelope"
            iconPosition="left"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="form-field">
          <CommonInput
            type="password"
            name="pswd"
            inputStyle="common-input"
            onChange={event => onChangeInput(event)}
            icon="lock"
            iconPosition="left"
            placeholder="Enter Password"
          />
        </div>

        <div
          className="login-form-link form-link-text"
          onClick={() => loginStep('forgotPassword')}
        >
          Forgot Password?
        </div>

        <CommonButtons
          onClick={onSubmitLog}
          content="SIGN IN"
          btnClass="login-form-btn btn-blue"
          disabled={disabled}
          loader={loader}
        />
      </form>
    </div>
  )
}

export default LoginForm
