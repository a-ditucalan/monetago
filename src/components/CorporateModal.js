/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { Fragment, useState, useEffect } from 'react'
import ReactPhoneInput from 'react-phone-input-2'
import { Modal, Tab, Table, Checkbox } from 'semantic-ui-react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

import CommonButtons from '../common/CommonButton'
import CommonInput from '../common/CommonInput'
import 'react-phone-input-2/lib/style.css'
import InnerTabs from './InnerTabs'
import CommonDropdown from '../common/CommonDropdown'
import CommonCheckbox from '../common/CommonCheckbox'

const CorporateModal = ({
  btnTitle,
  icon = '',
  infoData,
  btnClass,
  img = '',
  onChangeCountry,
  onChangeCountryPhone,
  dataNumber,
  tabsItem,
  onClickTab,
  innerTab,
  contactTabsItem,
  innerContactTab,
  trigger = (
    <CommonButtons
      content={btnTitle}
      image={img}
      icon={icon}
      btnClass={btnClass}
    />
  ),
  open = false,
  onClose,
  onOpen
}) => {
  const [info, setInfo] = useState(infoData)

  const onClick = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setInfo(tab)
  }

  const onClickContent = data => {
    setInfo(data)
  }

  const resetModal = () => {
    onClose()
    setInfo(infoData)
    setCounterParties([])
    setchecked(false)
    setsearchDisabled(true)
    setSearchedCounterparties({ unitName: '', orgRole: '' })
    setConnected('No')
  }

  const headers = [
    {
      key: 'checkbox'
    },
    {
      key: 'unitName',
      content: 'Unit Name'
    },
    {
      key: 'orgRole',
      content: 'Organization Role'
    },
    {
      key: 'uniqueId',
      content: 'Unique ID'
    },
    {
      key: 'cordaName',
      content: 'Corda Name'
    },
    {
      key: 'connected',
      content: 'Connected'
    }
  ]

  const [connect, setConnected] = useState('No')
  const [searchedCounterParties, setSearchedCounterparties] = useState({
    unitName: '',
    orgRole: ''
  })

  const unitName = e => {
    const toTitleCase = phrase => {
      return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    let result = toTitleCase(e.target.value)
    setSearchedCounterparties({
      ...searchedCounterParties,
      unitName: result
    })
  }

  const orgRole = e => {
    setSearchedCounterparties({
      ...searchedCounterParties,
      orgRole: e.target.innerText
    })
  }

  const checkbox = () => {
    setchecked(!checked)
  }

  const searchCounterParty = () => {
    let final = counterPartyData.filter(data => {
      if (
        searchedCounterParties.unitName === data.unitName ||
        searchedCounterParties.orgRole === data.orgRole
      ) {
        return data
      } else if (searchedCounterParties.unitName !== data.unitName) {
        return null
      } else {
        return null
      }
    })
    setCounterParties(final)
  }

  const [counterParties, setCounterParties] = useState([])
  const [checked, setchecked] = useState(false)
  const [disabled, setdisabled] = useState(true)
  const [searchDisabled, setsearchDisabled] = useState(true)

  const counterPartyData = [
    {
      unitName: 'Capital Partner',
      orgRole: 'Issuer',
      uniqueId: 'a644d0b0-9c46-4d23-a978-7fe23b069f81',
      cordaName: 'N/A',
      connected: connect
    },
    {
      unitName: 'New Partner',
      orgRole: 'IPA',
      uniqueId: 'ce807e68-05f7-4312-8d82-e2c79d539bc8',
      cordaName: 'N/A',
      connected: connect
    },
    {
      unitName: 'Test Partner',
      orgRole: 'Operator',
      uniqueId: 'cd2a4b68-fd28-48fd-8502-6dc8e01a350d',
      cordaName: 'N/A',
      connected: connect
    },
    {
      unitName: 'New Test Partner',
      orgRole: 'Service Provider',
      uniqueId: 'd1fd3b36-3c56-4cee-b5e2-e2cf58a01ef0',
      cordaName: 'N/A',
      connected: connect
    },
    {
      unitName: 'New New Test Partner',
      orgRole: 'Service Provider',
      uniqueId: 'd1fd3b36-3c56-4cee-b5e2-e2cf58a01ef0',
      cordaName: 'N/A',
      connected: connect
    }
  ]

  const clicked = data => {
    setConnected(data)
  }

  useEffect(() => {
    if (checked === true) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  })

  useEffect(() => {
    if (
      searchedCounterParties.orgRole !== '' ||
      searchedCounterParties.unitName !== ''
    ) {
      setsearchDisabled(false)
    } else {
      setsearchDisabled(true)
    }
  })

  return (
    <Modal
      open={open}
      trigger={trigger}
      onClose={() => resetModal()}
      onOpen={onOpen}
      size="large"
    >
      <div className="modal-legal-info-wrapper">
        {info === 'legalInfo' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Information']}
              innerTab={innerTab}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <CommonInput title="Unit Name" />
              <CommonInput title="Corporate Identifier" />
              <CommonInput title="Email Address" />
            </div>
            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
              <CommonInput title="Domain name" inputStyle="input-domain" />
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'addParentContact' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Add Contact Person Details']}
              innerTab={'Add Contact Person Details'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <CommonInput title="First Name" />
              <CommonInput title="Last Name" />
              <CommonInput title="Designation" />
            </div>
            <div className="legal-modal-block-one">
              <CommonInput title="Email Address" />
              <CommonInput title="Domain Name" />
            </div>
            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'editParentContact' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Edit Contact Person Details']}
              innerTab={'Edit Contact Person Details'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <CommonInput title="First Name" />
              <CommonInput title="Last Name" />
              <CommonInput title="Designation" />
            </div>
            <div className="legal-modal-block-one">
              <CommonInput title="Email Address" />
              <CommonInput title="Domain Name" />
            </div>
            <div className="legal-modal-block-two">
              <div className="legal-number">
                <label className="input-title">Phone Number</label>
                <div className="legal-number-wrapper">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="legal-fax">
                <label className="input-title">Fax</label>
                <div className="legal-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'viewLegalInfo' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Information Details']}
              innerTab={'Information Details'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <div className="view-info-holder">
                <p className="org-title">JC Supply PTY</p>
                <p className="org-subsidary-title">
                  Corporate Identifier: <span>sample</span>
                </p>
              </div>
              <div className="view-info-holder">
                <p className="input-title">Email:</p>
                <p className="view-text-link">Brendan@gmail.com</p>
              </div>
              <div className="view-info-holder">
                <p className="input-title">Domain Name:</p>
                <p className="view-text-link">monetago.com</p>
              </div>
            </div>
            <div className="legal-modal-block-one">
              <div className="view-info-holder">
                <p className="input-title">Fax</p>
                <p className="view-text-link">+1 (212) 123 - 1234</p>
              </div>
              <div className="view-info-holder">
                <p className="input-title">Phone Number</p>
                <p className="view-text-link">+1 (212) 123 - 1234</p>
              </div>
              <div className="view-info-holder">
                <p className="input-title">Address</p>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan, New York City, 10010 USA
                </p>
              </div>
            </div>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Subsidiary']}
              innerTab={'Subsidiary'}
              info="subsidary"
              onClickContent={onClickContent}
            />
            <div className="subsidary-wrapper">
              <div className="subsidary-holder">
                <p className="subsidary-title">
                  HQ Supply Co.
                  <CommonButtons
                    content="View"
                    onClick={() => setInfo('Edit Contact Details')}
                    image={require('../assets/svg/ic_visibility_24px.svg')}
                    btnClass="corporate-btn subsidary-view"
                  />
                </p>
                <p className="org-subsidary-title ">
                  Corporate Identifier: <span>sample</span>
                </p>
                <p className="content-type">afred@monetago.com</p>
                <p className="content-type">+1 (212) 123-1234</p>
                <p className="content-type">+1 (212) 123-1234</p>
                <p className="content-type">monetago.com</p>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
              <div className="subsidary-holder">
                <p className="subsidary-title">
                  HQ Supply Co.{' '}
                  <CommonButtons
                    content="View"
                    onClick={() => setInfo('Edit Contact Details')}
                    image={require('../assets/svg/ic_visibility_24px.svg')}
                    btnClass="corporate-btn subsidary-view"
                  />
                </p>
                <p className="org-subsidary-title">
                  Corporate Identifier: <span>sample</span>
                </p>
                <p className="content-type">afred@monetago.com</p>
                <p className="content-type">+1 (212) 123-1234</p>
                <p className="content-type">+1 (212) 123-1234</p>
                <p className="content-type">monetago.com</p>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
              <div className="subsidary-holder">
                <p className="subsidary-title">
                  HQ Supply Co.{' '}
                  <CommonButtons
                    content="View"
                    onClick={() => setInfo('Edit Contact Details')}
                    image={require('../assets/svg/ic_visibility_24px.svg')}
                    btnClass="corporate-btn subsidary-view"
                  />
                </p>
                <p className="org-subsidary-title">
                  Corporate Identifier: <span>sample</span>
                </p>
                <p className="content-type">afred@monetago.com</p>
                <p className="content-type">+1 (212) 123-1234</p>
                <p className="content-type">+1 (212) 123-1234</p>
                <p className="content-type">monetago.com</p>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
            </div>
          </Fragment>
        ) : info === 'addSubsidary' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Add Subsidary']}
              innerTab={'Add Subsidary'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <div className="subsidary-box">
                <CommonInput title="Unit Name" inputStyle="zipcode" />
              </div>
              <div className="subsidary-box">
                <CommonInput
                  title="Corporate Identifier"
                  inputStyle="zipcode"
                />
              </div>
              <div className="subsidary-box">
                <CommonInput title="Email Address" inputStyle="zipcode" />
              </div>
            </div>
            <div className="legal-modal-block-one">
              <div className="subsidary-box">
                <label className="input-title">Phone Number</label>
                <div className="subsidary-phone">
                  <ReactPhoneInput
                    defaultCountry={'us'}
                    value={dataNumber}
                    onChange={onChangeCountryPhone}
                  />
                </div>
              </div>
              <div className="subsidary-fax">
                <label className="input-title">Fax</label>
                <div className="subsidary-fax-wrapper">
                  <CommonInput />
                  <CommonInput />
                  <CommonInput />
                </div>
              </div>
              <div className="subsidary-box">
                <CommonInput title="Domain" inputStyle="zipcode" />
              </div>
            </div>
            <div className="legal-modal-block-three">
              <div className="legal-street">
                <div className="legal-street-wrapper">
                  <CommonInput title="Street" inputStyle="street-num" />
                  <CommonInput title="Street" inputStyle="street" />
                </div>
              </div>
              <div className="legal-city">
                <div className="legal-city-wrapper">
                  <CommonInput title="City" inputStyle="city" />
                </div>
              </div>
              <div className="legal-country">
                <div className="legal-country-wrapper">
                  <div className="country-box">
                    <label className="input-title">Country</label>
                    <Select
                      options={countryList().getData()}
                      onChange={onChangeCountry}
                      className="country"
                    />
                  </div>
                  <CommonInput title="Zipcode" inputStyle="zipcode" />
                </div>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'viewParentContact' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Contact Person Details']}
              innerTab={'Contact Person Details'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">Name:</label>
                <p className="content-subtitle">Brendan Taylor</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Designation
                </label>
                <p className="content-subtitle">Chief Technology Officer</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Email Address
                </label>
                <p className="view-text-link">brendan@gmail.com</p>
              </div>
            </div>
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Phone 1
                </label>
                <p className="view-text-link">+ 1 (212) 123-124</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Phone 2
                </label>
                <p className="view-text-link">+ 1 (212) 123-124</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Domain Name
                </label>
                <p className="view-text-link">monetago.com</p>
              </div>
            </div>
            <div className="legal-modal-block-four">
              <div className="contact-view-address">
                <label className="contact-view-label input-title">
                  Address
                </label>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
            </div>
            <div className="legal-info-button">
              <CommonButtons
                content="Apply"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
              <CommonButtons
                content="Cancel"
                btnClass="corporate-mod-btn btn-sky-blue"
              />
            </div>
          </Fragment>
        ) : info === 'viewBusinessUnit' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Business Unit']}
              innerTab={'Business Unit'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Unit Name
                </label>
                <p className="content-subtitle">Monetago India</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">GSTIN</label>
                <p className="content-subtitle">22175A496B531Z6</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Business Unit Email
                </label>
                <p className="view-text-link">india@monetago.com</p>
              </div>
            </div>
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Phone Number 1
                </label>
                <p className="view-text-link">+1 (212) 123-1234</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Phone Number 2
                </label>
                <p className="view-text-link">+1 (212) 123-1234</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Place of Supplies
                </label>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan, New York City, 10010 USA
                </p>
              </div>
            </div>
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Business Unit Address
                </label>
                <p className="content-subtitle">
                  7th Floor 902 Broadway Manhattan, New York City, 10010 USA
                </p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Listing Exchanges
                </label>
                <p className="content-subtitle">Nasdaq, NYSE</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Industries
                </label>
                <p className="content-subtitle">AMCE Building Supply</p>
              </div>
            </div>
            <InnerTabs
              info="Contact Details"
              tabsItem={contactTabsItem}
              innerContactTab={innerContactTab}
              innerTab={innerContactTab}
              onClickContent={onClickContent}
            />
            <div className="business-unit-contact-person">
              <div className="business-unit-contact-person-wrapper">
                <div className="edit-btn-wrapper">
                  <CommonButtons
                    content="Edit"
                    onClick={() => setInfo('Edit Contact Details')}
                    image={require('../assets/svg/ic_edit.svg')}
                    btnClass="corporate-btn"
                  />
                </div>
                <p className="contact-person-name">Brendan Taylor</p>
                <p className="contact-subtext">Chief Technology Officer</p>
                <p className="contact-text">brendan@monetago.com</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">monetago.com</p>
                <p className="contact-subtext">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
              <div className="business-unit-contact-person-wrapper">
                <div className="edit-btn-wrapper">
                  <CommonButtons
                    content="Edit"
                    onClick={() => setInfo('Edit Contact Details')}
                    image={require('../assets/svg/ic_edit.svg')}
                    btnClass="corporate-btn"
                  />
                </div>
                <p className="contact-person-name">Brendan Taylor</p>
                <p className="contact-subtext">Chief Technology Officer</p>
                <p className="contact-text">brendan@monetago.com</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">monetago.com</p>
                <p className="contact-subtext">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
              <div className="business-unit-contact-person-wrapper">
                <div className="edit-btn-wrapper">
                  <CommonButtons
                    content="Edit"
                    onClick={() => setInfo('Edit Contact Details')}
                    image={require('../assets/svg/ic_edit.svg')}
                    btnClass="corporate-btn"
                  />
                </div>
                <p className="contact-person-name">Brendan Taylor</p>
                <p className="contact-subtext">Chief Technology Officer</p>
                <p className="contact-text">brendan@monetago.com</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">monetago.com</p>
                <p className="contact-subtext">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
            </div>
          </Fragment>
        ) : info === 'Edit Business Unit' ? (
          <Fragment>
            <InnerTabs
              info={info}
              tabsItem={['Edit Business Unit', 'Edit Contact Details']}
              innerTab={'Edit Business Unit'}
              onClickTab={onClick}
            />
            <div className="edit-bu-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="Unit Name" />
                <CommonInput title="GSTIN" />
                <CommonInput title="Business Unit Email" />
              </div>
              <div className="legal-modal-block-two">
                <div className="legal-number">
                  <label className="input-title">Phone Number</label>
                  <div className="legal-number-wrapper">
                    <ReactPhoneInput
                      defaultCountry={'us'}
                      value={dataNumber}
                      onChange={onChangeCountryPhone}
                    />
                  </div>
                </div>
                <div className="legal-fax">
                  <label className="input-title">Fax</label>
                  <div className="legal-fax-wrapper">
                    <CommonInput />
                    <CommonInput />
                    <CommonInput />
                  </div>
                </div>
              </div>
              <div className="labels">Business Unit Address</div>
              <div className="legal-modal-block-three">
                <div className="legal-street">
                  <div className="legal-street-wrapper">
                    <CommonInput title="Street" inputStyle="street-num" />
                    <CommonInput title="Street" inputStyle="street" />
                  </div>
                </div>
                <div className="legal-city">
                  <div className="legal-city-wrapper">
                    <CommonInput title="City" inputStyle="city" />
                  </div>
                </div>
                <div className="legal-country">
                  <div className="legal-country-wrapper">
                    <div className="country-box">
                      <label className="input-title">Country</label>
                      <Select
                        options={countryList().getData()}
                        onChange={onChangeCountry}
                        className="country"
                      />
                    </div>
                    <CommonInput title="Zipcode" inputStyle="zipcode" />
                  </div>
                </div>
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Industries" />
                <CommonInput title="Listing Exchanges" />
                <CommonInput title="" inputStyle="without-title" />
              </div>
              <div className="labels">Place of Supplies</div>
              <div className="legal-modal-block-three">
                <div className="legal-street">
                  <div className="legal-street-wrapper">
                    <CommonInput title="Street" inputStyle="street-num" />
                    <CommonInput title="Street" inputStyle="street" />
                  </div>
                </div>
                <div className="legal-city">
                  <div className="legal-city-wrapper">
                    <CommonInput title="City" inputStyle="city" />
                  </div>
                </div>
                <div className="legal-country">
                  <div className="legal-country-wrapper">
                    <div className="country-box">
                      <label className="input-title">Country</label>
                      <Select
                        options={countryList().getData()}
                        onChange={onChangeCountry}
                        className="country"
                      />
                    </div>
                    <CommonInput title="Zipcode" inputStyle="zipcode" />
                  </div>
                </div>
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'Edit Contact Details' ? (
          <Fragment>
            <InnerTabs
              info={info}
              tabsItem={['Edit Business Unit', 'Edit Contact Details']}
              innerTab={'Edit Contact Details'}
              onClickTab={onClick}
            />
            <div className="edit-bu-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="First Name" />
                <CommonInput title="Last Name" />
                <CommonInput title="Designation" />
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Email Address" />
                <CommonInput title="Domain Name" />
              </div>
              <div className="legal-modal-block-two">
                <div className="legal-number">
                  <label className="input-title">Phone Number</label>
                  <div className="legal-number-wrapper">
                    <ReactPhoneInput
                      defaultCountry={'us'}
                      value={dataNumber}
                      onChange={onChangeCountryPhone}
                    />
                  </div>
                </div>
                <div className="legal-fax">
                  <label className="input-title">Fax</label>
                  <div className="legal-fax-wrapper">
                    <CommonInput />
                    <CommonInput />
                    <CommonInput />
                  </div>
                </div>
              </div>
              <div className="legal-modal-block-three">
                <div className="legal-street">
                  <div className="legal-street-wrapper">
                    <CommonInput title="Street" inputStyle="street-num" />
                    <CommonInput title="Street" inputStyle="street" />
                  </div>
                </div>
                <div className="legal-city">
                  <div className="legal-city-wrapper">
                    <CommonInput title="City" inputStyle="city" />
                  </div>
                </div>
                <div className="legal-country">
                  <div className="legal-country-wrapper">
                    <div className="country-box">
                      <label className="input-title">Country</label>
                      <Select
                        options={countryList().getData()}
                        onChange={onChangeCountry}
                        className="country"
                      />
                    </div>
                    <CommonInput title="Zipcode" inputStyle="zipcode" />
                  </div>
                </div>
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'addNewScheme' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Add Scheme']}
              innerTab={'Add Scheme'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="add-scheme-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="Scheme Name" />
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Depository Name" />
                <CommonInput title="Client Name" />
                <CommonInput title="Reference ID" />
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'AddContactDetails' ? (
          <Fragment>
            <InnerTabs
              info={info}
              tabsItem={['Add Contact Details']}
              innerTab={'Add Contact Details'}
            />
            <div className="edit-bu-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="First Name" />
                <CommonInput title="Last Name" />
                <CommonInput title="Designation" />
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Email Address" />
                <CommonInput title="Domain Name" />
              </div>
              <div className="legal-modal-block-two">
                <div className="legal-number">
                  <label className="input-title">Phone Number</label>
                  <div className="legal-number-wrapper">
                    <ReactPhoneInput
                      defaultCountry={'us'}
                      value={dataNumber}
                      onChange={onChangeCountryPhone}
                    />
                  </div>
                </div>
                <div className="legal-fax">
                  <label className="input-title">Fax</label>
                  <div className="legal-fax-wrapper">
                    <CommonInput />
                    <CommonInput />
                    <CommonInput />
                  </div>
                </div>
              </div>
              <div className="legal-modal-block-three">
                <div className="legal-street">
                  <div className="legal-street-wrapper">
                    <CommonInput title="Street" inputStyle="street-num" />
                    <CommonInput title="Street" inputStyle="street" />
                  </div>
                </div>
                <div className="legal-city">
                  <div className="legal-city-wrapper">
                    <CommonInput title="City" inputStyle="city" />
                  </div>
                </div>
                <div className="legal-country">
                  <div className="legal-country-wrapper">
                    <div className="country-box">
                      <label className="input-title">Country</label>
                      <Select
                        options={countryList().getData()}
                        onChange={onChangeCountry}
                        className="country"
                      />
                    </div>
                    <CommonInput title="Zipcode" inputStyle="zipcode" />
                  </div>
                </div>
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'EditBusinessUnit' ? (
          <Fragment>
            <InnerTabs
              info={info}
              tabsItem={['Edit Business Unit']}
              innerTab={'Edit Business Unit'}
            />
            <div className="edit-bu-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="Unit Name" />
                <CommonInput title="GSTIN" />
                <CommonInput title="Business Unit Email" />
              </div>
              <div className="legal-modal-block-two">
                <div className="legal-number">
                  <label className="input-title">Phone Number</label>
                  <div className="legal-number-wrapper">
                    <ReactPhoneInput
                      defaultCountry={'us'}
                      value={dataNumber}
                      onChange={onChangeCountryPhone}
                    />
                  </div>
                </div>
                <div className="legal-fax">
                  <label className="input-title">Fax</label>
                  <div className="legal-fax-wrapper">
                    <CommonInput />
                    <CommonInput />
                    <CommonInput />
                  </div>
                </div>
              </div>
              <div className="labels">Business Unit Address</div>
              <div className="legal-modal-block-three">
                <div className="legal-street">
                  <div className="legal-street-wrapper">
                    <CommonInput title="Street" inputStyle="street-num" />
                    <CommonInput title="Street" inputStyle="street" />
                  </div>
                </div>
                <div className="legal-city">
                  <div className="legal-city-wrapper">
                    <CommonInput title="City" inputStyle="city" />
                  </div>
                </div>
                <div className="legal-country">
                  <div className="legal-country-wrapper">
                    <div className="country-box">
                      <label className="input-title">Country</label>
                      <Select
                        options={countryList().getData()}
                        onChange={onChangeCountry}
                        className="country"
                      />
                    </div>
                    <CommonInput title="Zipcode" inputStyle="zipcode" />
                  </div>
                </div>
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Industries" />
                <CommonInput title="Listing Exchanges" />
                <CommonInput title="" inputStyle="without-title" />
              </div>
              <div className="labels">Place of Supplies</div>
              <div className="legal-modal-block-three">
                <div className="legal-street">
                  <div className="legal-street-wrapper">
                    <CommonInput title="Street" inputStyle="street-num" />
                    <CommonInput title="Street" inputStyle="street" />
                  </div>
                </div>
                <div className="legal-city">
                  <div className="legal-city-wrapper">
                    <CommonInput title="City" inputStyle="city" />
                  </div>
                </div>
                <div className="legal-country">
                  <div className="legal-country-wrapper">
                    <div className="country-box">
                      <label className="input-title">Country</label>
                      <Select
                        options={countryList().getData()}
                        onChange={onChangeCountry}
                        className="country"
                      />
                    </div>
                    <CommonInput title="Zipcode" inputStyle="zipcode" />
                  </div>
                </div>
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'addNewScheme' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Add Scheme']}
              innerTab={'Add Scheme'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="add-scheme-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="Scheme Name" />
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Depository Name" />
                <CommonInput title="Client Name" />
                <CommonInput title="Reference ID" />
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'editScheme' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Edit Scheme']}
              innerTab={'Edit Scheme'}
              info={info}
              onClickContent={onClickContent}
            />
            <div className="add-scheme-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="Scheme Name" />
              </div>
              <div className="legal-modal-block-one">
                <CommonInput title="Depository Name" />
                <CommonInput title="Client Name" />
                <CommonInput title="Reference ID" />
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="Apply"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
                <CommonButtons
                  content="Cancel"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'viewSchemeDetails' ? (
          <Fragment>
            <InnerTabs
              tabsItem={['Scheme Details']}
              innerTab={'Scheme Details'}
            />
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <p className="content-subtitle">JC Supply PTY</p>
                <label className="contact-view-label input-title-scheme">
                  Liquid Asset Fund
                </label>
                <label className="contact-view-label input-title-scheme">
                  +1 (212) 123-1234
                </label>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Scheme Name
                </label>
                <p className="content-subtitle input-title-scheme">
                  Liquid Asset Fund
                </p>
              </div>
            </div>

            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Depository Name
                </label>
                <p className="view-text-link">Stock Holding Corp. of India</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Client Name
                </label>
                <p className="view-text-link">Yes Bank Limited</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Reference ID
                </label>
                <p className="content-subtitle">Redemption</p>
              </div>
            </div>
          </Fragment>
        ) : info === 'addDepositoryAccount' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Add Depository Account']}
              innerTab={'Add Depository Account'}
              info={info}
            />
            <div className="add-scheme-wrapper">
              <div className="legal-modal-block-one">
                <p className="scheme-name">Scheme Name</p>
              </div>
              <p className="depo-title">Liquid Asset Fund</p>
              <div className="legal-modal-block-one">
                <CommonInput title="Depository Name" />
                <CommonInput title="Client Name" />
                <CommonInput title="Reference ID" />
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="ADD"
                  btnClass="corporate-mod-btn btn-sky-blue"
                  icon="add"
                />
                <CommonButtons
                  content="CANCEL"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'viewDepositoryAccount' ? (
          <Fragment>
            <InnerTabs
              tabsItem={['Depository Account Details']}
              innerTab={'Depository Account Details'}
            />
            <div className="legal-modal-block-one">
              <div className="contact-view">
                <p className="content-subtitle">My IPA, INC.</p>
                <label className="contact-view-label input-title">
                  Luqid Asset Fund
                </label>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">Email</label>
                <p className="content-subtitle">india@monetago.com</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">Phone</label>
                <p className="view-text-link">+1 (212) 123-1234</p>
              </div>
            </div>

            <div className="legal-modal-block-one">
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Depository Name
                </label>
                <p className="view-text-link">Stock Holding Corp. of India</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Client Name
                </label>
                <p className="view-text-link">Yes Bank Limited</p>
              </div>
              <div className="contact-view">
                <label className="contact-view-label input-title">
                  Reference ID
                </label>
                <p className="content-subtitle">Redemption</p>
              </div>
            </div>

            <InnerTabs
              // info="Contact Details"
              // tabsItem={contactTabsItem}
              // innerContactTab={innerContactTab}
              // innerTab={innerContactTab}
              // onClickContent={onClickContent}
              tabsItem={['Contact Person']}
              innerTab={'Contact Person'}
            />
            <div className="business-unit-contact-person">
              <div className="business-unit-contact-person-wrapper">
                <p className="contact-person-name">Brendan Taylor</p>
                <p className="contact-subtext">Chief Technology Officer</p>
                <p className="contact-text">brendan@monetago.com</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">monetago.com</p>
                <p className="contact-subtext">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
              <div className="business-unit-contact-person-wrapper">
                <p className="contact-person-name">Brendan Taylor</p>
                <p className="contact-subtext">Chief Technology Officer</p>
                <p className="contact-text">brendan@monetago.com</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">monetago.com</p>
                <p className="contact-subtext">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
              <div className="business-unit-contact-person-wrapper">
                <p className="contact-person-name">Brendan Taylor</p>
                <p className="contact-subtext">Chief Technology Officer</p>
                <p className="contact-text">brendan@monetago.com</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">+1 (212) 123-1234</p>
                <p className="contact-text">monetago.com</p>
                <p className="contact-subtext">
                  7th Floor 902 Broadway Manhattan , New York City, 10010 USA
                </p>
              </div>
            </div>
          </Fragment>
        ) : info === 'editDepositoryAccount' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Edit Depository Account']}
              innerTab={'Edit Depository Account'}
              info={info}
            />
            <div className="add-scheme-wrapper">
              <div className="legal-modal-block-one">
                <p className="scheme-name">Scheme Name</p>
              </div>
              <p className="depo-title">Liquid Asset Fund</p>
              <div className="legal-modal-block-one">
                <CommonInput title="Depository Name" />
                <CommonInput title="Client Name" />
                <CommonInput title="Reference ID" />
              </div>
              <div className="legal-info-button">
                <CommonButtons
                  content="ADD"
                  btnClass="corporate-mod-btn btn-sky-blue"
                  icon="add"
                />
                <CommonButtons
                  content="CANCEL"
                  btnClass="corporate-mod-btn btn-sky-blue"
                />
              </div>
            </div>
          </Fragment>
        ) : info === 'manageCounterparties' ? (
          <Fragment>
            <InnerTabs
              onClickTab={onClickTab}
              tabsItem={['Counterparties']}
              innerTab={'Counterparties'}
              info={info}
              btnDisabled={disabled}
              onClickContent={clicked}
            />
            <div className="add-scheme-wrapper">
              <div className="legal-modal-block-one">
                <CommonInput title="Unit Name" onChange={e => unitName(e)} />
                <div className="input-wrapper">
                  <label className="default-text input-title">
                    Oragnization Role
                  </label>
                  <CommonDropdown
                    title="Oragnization Role"
                    dropdownClass="sample"
                    onChange={e => orgRole(e)}
                  />
                </div>
                <div className="search-block">
                  <CommonButtons
                    content="Search"
                    btnClass="corporate-mod-btn btn-sky-blue"
                    onClick={searchCounterParty}
                    disabled={searchDisabled}
                  />
                </div>
              </div>
            </div>

            <div className="add-scheme-wrapper">
              <p>Search Results</p>
              <div className="legal-modal-block-one">
                <Table unstackable>
                  <Table.Header>
                    <Table.Row>
                      {headers.map((header, i) => {
                        return header.key === 'checkbox' ? (
                          <Table.HeaderCell key={i}>
                            <CommonCheckbox />
                          </Table.HeaderCell>
                        ) : (
                          <Table.HeaderCell key={i}>
                            {header.content}
                          </Table.HeaderCell>
                        )
                      })}
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {counterParties !== ''
                      ? counterParties.map((data, i) => {
                          return (
                            <Table.Row key={i}>
                              <Table.Cell>
                                <CommonCheckbox
                                  onClick={checkbox}
                                  checked={checked}
                                />
                              </Table.Cell>
                              <Table.Cell>{data.unitName}</Table.Cell>
                              <Table.Cell>{data.orgRole}</Table.Cell>
                              <Table.Cell>{data.uniqueId}</Table.Cell>
                              <Table.Cell>{data.cordaName}</Table.Cell>
                              <Table.Cell>{data.connected}</Table.Cell>
                            </Table.Row>
                          )
                        })
                      : null}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </Fragment>
        ) : null}
      </div>
    </Modal>
  )
}

export default CorporateModal
