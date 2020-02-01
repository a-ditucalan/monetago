/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React from 'react'
import { useSelector } from 'react-redux'
import ContentHeader from '../../components/ContentHeader'
import UserTable from '../../components/UserTable'

const Account = () => {
  const data = useSelector(state => state.organization)

  return (
    <div className="dashboard-account">
      <ContentHeader
        contentHeaderTitle="Accounts"
        btnContent="Add Account"
        type="OrgAndAcct"
        icon="add"
      />
      <UserTable type="Account" content={data.userTable} page={data.userPage} />
    </div>
  )
}

export default Account
