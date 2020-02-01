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
import { Card } from 'semantic-ui-react'

const cardContents = [
  {
    head: 'Total Client CP Outstanding',
    value: '15,42,000',
    sub: 'INR'
  },
  { head: 'AVG Yield of Outstanding', value: '9.78%', sub: 'APY' },
  { head: 'Maturing Today', value: '3', sub: 'COUNT' },
  { head: 'Placement in Progress', value: '37,200 CR', sub: 'INR' },
  { head: 'Client MTD Issued', value: '3,01,000 CR', sub: 'INR' },
  { head: 'Total Market Outstanding', value: '35,54,800 CR', sub: 'DAYS' },
  { head: 'Client INS Outstanding', value: '135', sub: 'COUNT' },
  { head: 'Avg Term Outstanding', value: '94', sub: 'DAYS' },
  { head: 'Value Date Today', value: '5', sub: 'COUNT' },
  { head: 'Placement in Progress', value: '12', sub: 'COUNT' },
  { head: 'AVG Client Issued Value', value: '11,422, CR', sub: 'INR' },
  { head: 'Total Market ISNs Outstanding', value: '398', sub: 'INR' }
]

const cards = cardContents.map((item, i) => ({
  key: i,
  description: {
    content: (
      <>
        <p className="cardHead">{item.head}</p>
        <p className="cardDesc">{item.value}</p>
        <p className="cardFoot">{item.sub}</p>
      </>
    ),
    textAlign: 'center'
  }
}))

const DashboardCards = () => {
  return <Card.Group centered items={cards} />
}

export default DashboardCards
