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
import CommonInput from '../../../common/CommonInput'
import CommonCheckbox from '../../../common/CommonCheckbox'
import CommonButtons from '../../../common/CommonButton'

const LoginFormIPA = props => {
  const { loginStep } = props
  const [checked, setchecked] = useState(false)
  return (
    <div className="login-page-wrapper">
      <div className="login-content">
        <img
          src={require('../../../assets/svg/login-logo.svg')}
          className="ipa-login-logo"
        />
        <p className="login-message">Login to your Account</p>
        <CommonInput
          icon="user"
          iconPosition="left"
          placeholder="Username"
          inputStyle="user-input"
          type="text"
        />
        <CommonInput
          icon="key"
          iconPosition="left"
          placeholder="Password"
          inputStyle="password-input"
          type="password"
        />
        <div className="checkbox-wrapper">
          <CommonCheckbox
            name="Keep Me Signed In"
            checkboxStyle="checkbox-keep"
            checked={checked}
            onClick={() => setchecked(!checked)}
          />
          <p className="message-keep" onClick={() => setchecked(!checked)}>
            Keep Me Signed In
          </p>
          <p
            className="message-forgot"
            onClick={() => loginStep('forgotPassword')}
          >
            <u>Forgot Password</u>
          </p>
        </div>
        <div className="btn-wrapper">
          <CommonButtons content="Sign In" btnClass="sign-in-btn" />
        </div>
      </div>
    </div>
  )
}

export default LoginFormIPA
