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
import { useDispatch } from 'react-redux'

import { filterBy } from '../redux'
import Dropdown from '../common/CommonDropdown'

const CommonFilterDropdown = ({ options }) => {
  const dispatch = useDispatch()

  return (
    <div className="table-filter">
      <div>
        <img
          src={require('../assets/svg/filter.svg')}
          className="filter-icon"
          alt="Filter Icon"
        />{' '}
        Filter:
      </div>
      {options.map((filter, i) => {
        return (
          <Dropdown
            key={i}
            name={filter.name}
            placeholder={filter.placeholder}
            options={filter.options}
            dropdownClass="table-filter-dropdown"
            onChange={e => dispatch(filterBy(e))}
          />
        )
      })}
    </div>
  )
}

export default CommonFilterDropdown
