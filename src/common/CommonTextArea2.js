/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment } from 'react'
import { TextArea } from 'semantic-ui-react'
import CommonInput from './CommonInput'

const CommonTextArea2 = ({
  label,
  onChangeTextarea,
  corporateIdentityDetails,
  style,
  index,
  onBlurText,
  row,
  data = ''
}) => {
  return (
    <Fragment>
      <div className="textarea-wrapper">
        <p className="textarea-label org-identity-title">{label}</p>
        <CommonInput
          name={index}
          data={data}
          onBlur={onBlurText}
          onChange={onChangeTextarea}
          className={style}
          rows={row}
          value={corporateIdentityDetails}
        />
      </div>
    </Fragment>
  )
}

export default CommonTextArea2
