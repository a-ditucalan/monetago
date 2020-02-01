/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

export default class CommonValidations {
  //Email validation
  static checkEmail(rawString) {
    const testEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return testEmail.test(rawString)
  }

  static validateEmail(email, status, callbackStatus) {
    if (email.length > 0) {
      if (CommonValidations.checkEmail(email)) {
        callbackStatus({
          ...status,
          email: true,
          emailValid: true
        })
      } else {
        callbackStatus({ ...status, email: false })
      }
    } else {
      callbackStatus({ ...status, email: null })
    }
  }
}
