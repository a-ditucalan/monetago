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

import Sidebar from '../../../usersComponents/Sidebar'
import DashboardCards from '../../../usersComponents/DashboardCards'

const index = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const onClickSidebar = e => {
    const navItem = e.currentTarget.firstChild.getAttribute('id')
    setActiveComponent(navItem)
  }

  let ActiveTabComponent = DashboardCards

  return (
    <div className="dashboard">
      <Sidebar
        activeComponent={activeComponent}
        onClickSidebar={onClickSidebar}
      />
      <div className="dashboard-content">{<ActiveTabComponent />}</div>
    </div>
  )
}

export default index
