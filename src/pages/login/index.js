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
import { useHistory } from 'react-router-dom'

import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'

const Login = () => {
  const [loginStep, setLoginStep] = useState('loginForm')
  const history = useHistory()

  const loginComponents = {
    loginForm: LoginForm,
    forgotPassword: ForgotPassword
  }

  const ActiveComponent = loginComponents[loginStep]

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      history.push('/dashboard')
    }
  }, [])

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-img"></div>
        <div className="login-form-container">
          <ActiveComponent loginStep={setLoginStep} />
        </div>
      </div>
    </div>
  )
}

export default Login
