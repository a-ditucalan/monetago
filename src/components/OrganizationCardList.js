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
import ContentHeader from './ContentHeader'
import CommonInput from '../common/CommonInput'
import CommonFilterDropdown from '../common/CommonFilterDropdown'
import OrganizationCard from './OrganizationCard'

const OrganizationCardList = () => {
  const filterOptions = [
    {
      name: 'accountType',
      placeholder: 'Account Type: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'admin',
          value: 'admin',
          text: 'Admin'
        },
        {
          key: 'Account',
          value: 'Account',
          text: 'Account'
        }
      ]
    },
    {
      name: 'status',
      placeholder: 'Status: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'active',
          value: 'active',
          text: 'Active'
        },
        {
          key: 'inactive',
          value: 'inactive',
          text: 'Inactive'
        }
      ]
    }
  ]

  return (
    <div className="org-card-list">
      <ContentHeader
        contentHeaderTitle="Organizations"
        btnContent="Add Organization"
        type="OrgAndAcct"
        icon="add"
      />

      <CommonInput
        inputStyle="search-input"
        icon="search"
        iconPosition="left"
        placeholder="Search Account Name, Email or Phone Number..."
      />

      <div className="table-filter-details">
        <CommonFilterDropdown options={filterOptions} />
        <div className="table-filter-page">
          <p>
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="prev-icon"
              alt="Previous Icon"
            />
            1-50 of 2,000
            <img
              src={require('../assets/svg/left-arrow.svg')}
              className="next-icon"
              alt="Next Icon"
            />
          </p>
        </div>
      </div>

      <OrganizationCard />
    </div>
  )
}

export default OrganizationCardList
