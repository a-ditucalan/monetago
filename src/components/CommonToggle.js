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

const CommonToggle = ({
  dataToggleActive,
  dataStateToggle,
  handleToggleData
}) => {
  const [toggle, setToggle] = useState({
    activeToggle: dataToggleActive,
    prevToggle: dataToggleActive
  })

  const onClickToggle = e => {
    setToggle({ activeToggle: !toggle.activeToggle })
    handleToggleData(!toggle.activeToggle)
  }

  return (
    <div>
      <input
        type="checkbox"
        className="toggle"
        onChange={onClickToggle}
        id={dataStateToggle}
        checked={toggle.activeToggle}
      />
      <label htmlFor={dataStateToggle}>
        <span className="on"></span>
        <span className="off"></span>
      </label>
    </div>
  )
}

export default CommonToggle
