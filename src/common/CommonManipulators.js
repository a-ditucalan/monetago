/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

export default class CommonManipulators {
  //Email format
  static emailFormat(rawString) {
    let formatted = rawString

    if (rawString.indexOf('@') !== -1) {
      let matchArr
      matchArr = formatted.split('@')
      matchArr.splice(1, 0, '@')
      formatted = matchArr.join('')
    }

    if (rawString.indexOf('.') !== -1) {
      formatted = formatted.replace(/\.\.+/g, '.')
    }

    formatted = formatted.replace(/[^a-z0-9.@]/g, '')

    return formatted
  }
}
