/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment, useState } from 'react'
import CommonButtons from '../common/CommonButton'

const InnerTabs = ({
  tabsItem,
  onClickTab,
  innerTab,
  info,
  onClickContent,
  innerContactTab,
  btnDisabled = true
}) => {
  return (
    <div className="innertab-wrapper">
      {tabsItem.map((item, i) => (
        <div
          key={i}
          onClick={onClickTab}
          className={`innertab-item ${
            innerTab === item ? 'active' : 'inactive'
          }`}
        >
          <div id={item} className="org-identity-detail">
            {item}
          </div>
        </div>
      ))}
      <div className="innrtab-submenu">
        <div className="submenu">
          {info === 'editParentContact' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('addParentContact')}
                image={require('../assets/svg/ic_add.svg')}
                content="Add"
              />
            </Fragment>
          ) : info === 'viewLegalInfo' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('legalInfo')}
                image={require('../assets/svg/ic_edit.svg')}
                content="Edit"
              />
            </Fragment>
          ) : info === 'subsidary' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('addSubsidary')}
                image={require('../assets/svg/ic_add.svg')}
                content="Add"
              />
            </Fragment>
          ) : info === 'viewParentContact' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('editParentContact')}
                image={require('../assets/svg/ic_edit.svg')}
                content="Edit"
              />
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('addParentContact')}
                image={require('../assets/svg/ic_add.svg')}
                content="Add"
              />
            </Fragment>
          ) : info === 'viewBusinessUnit' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('EditBusinessUnit')}
                image={require('../assets/svg/ic_edit.svg')}
                content="Edit"
              />
            </Fragment>
          ) : info === 'Contact Details' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('AddContactDetails')}
                image={require('../assets/svg/ic_add.svg')}
                content="Add New"
              />
            </Fragment>
          ) : info === 'manageCounterparties' ? (
            <Fragment>
              <CommonButtons
                btnClass="corporate-btn"
                onClick={() => onClickContent('Requested')}
                image={require('../assets/svg/ic_add.svg')}
                content="Add Counterparty"
                disabled={btnDisabled}
              />
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default InnerTabs
