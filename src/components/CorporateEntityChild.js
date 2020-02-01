/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React, { useState, Fragment } from 'react'
import CommonToggle from './CommonToggle'
import CorporateModal from './CorporateModal'
import { useSelector } from 'react-redux'

const CorporateEntity = () => {
  const orgData = useSelector(state => state.organization)
  let finalSelctedOrg = orgData.organizations.find(org => {
    return org.orgId === orgData.selectedOrg
  })

  const tabsItemView = ['Information Details']
  const tabsItem = ['Information']
  const addPContactItem = ['Add Contact Person Details']
  const editPContactItem = ['Edit Contact Person Details']
  const viewPContactItem = ['Contact Person Details']
  const BUnitItem = ['Business Unit', 'Contact Details']
  const BUnitViewItem = ['Business Unit Details']
  const SchemeAddItem = ['Add Scheme']
  const SchemeEditItem = ['Edit Scheme']
  const SchemeViewItem = ['Scheme Details']
  const contactTabsItem = ['Contact Person']

  const [inheritance, setInheritance] = useState(false)
  const [orgType, setOrgType] = useState({
    legalEntityBase: {
      leId: '111',
      orgId: '114',
      leIdParent: '331',
      version: '1',
      active: true,
      enableChildAuth: '',
      inheritParentAuth: '',
      linearId: '',
      legalName: 'JC Supply PTY',
      accountId: 'linearId',
      ownerKey: '',
      corpIdentifiers: { additionalProperties: 'blah' },
      registeredAddress: {
        floor: '7th Floor',
        buildingNumOrName: '902',
        street: 'Broadway',
        area: 'Manhattan',
        city: 'New York',
        state: 'New York',
        postalCode: '10010',
        country: 'USA'
      },
      tel1: '+1 (212) 123-1234',
      tel2: '+1 (212) 123-1235',
      fax: '+1 (212) 123-1234',
      primaryEmail: 'brendan@monetago.com',
      domain: 'monetago.com',
      contactPerson: {
        firstName: 'Brendan',
        lastName: 'Taylor',
        contactPersonId: ' linearId',
        designation: 'Chief Technology Officer',
        officeAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        email: 'brendan@monetago.com'
      },
      otherParticipants: {
        additionalProperties: 'blah'
      },
      networkRole: 'ISSUER',
      subRole: ''
    },
    issuer: {
      businessUnits: {
        unitName: 'MonetaGo India',
        buAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        buEmail: 'india@monetago.com',
        buIdentifiers: {
          additionalProperties: {
            gstin: '22175A496B531Z6'
          }
        },
        buContactPersons: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        }
      },
      industry: 'AMCE Building Supply',
      listingExchanges: ['nasdaq', 'NYSE'],
      placeOfSupply: {
        floor: '7th Floor',
        buildingNumOrName: '902',
        street: 'Broadway',
        area: 'Manhattan',
        city: 'New York',
        state: 'New York',
        postalCode: '10010',
        country: 'USA'
      },
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'ISSUER',
        subRole: ''
      }
    },
    investor: {
      scheme: {
        schemeName: 'Liquid Asset Fund',
        schemeId: 'linearId',
        dpAccount: {
          dpName: 'Stock Holding Corporation of India Ltd',
          dpId: 'IN300812',
          clientName: 'Yes Bank Limited',
          clientId: '10489663',
          referenceId: 'Redemption',
          uniqueId: 'linerId'
        }
      },
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'ISSUER',
        subRole: ''
      }
    },
    ipa: {
      depositoryAccounts: {
        dpName: 'Stock Holding Corporation of India Ltd',
        dpId: 'IN300812',
        clientName: 'Yes Bank Limited',
        clientId: '10489663',
        referenceId: 'Redemption',
        uniqueId: 'linerId'
      },
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'ISSUER',
        subRole: ''
      }
    },
    serviceProvider: {
      legalEntityBase: {
        leId: '111',
        orgId: '114',
        leIdParent: '331',
        version: '1',
        active: true,
        enableChildAuth: '',
        inheritParentAuth: '',
        linearId: '',
        legalName: 'JC Supply PTY',
        accountId: 'linearId',
        ownerKey: '',
        corpIdentifiers: { additionalProperties: 'blah' },
        registeredAddress: {
          floor: '7th Floor',
          buildingNumOrName: '902',
          street: 'Broadway',
          area: 'Manhattan',
          city: 'New York',
          state: 'New York',
          postalCode: '10010',
          country: 'USA'
        },
        tel1: '+1 (212) 123-1234',
        tel2: '+1 (212) 123-1235',
        fax: '+1 (212) 123-1234',
        primaryEmail: 'brendan@monetago.com',
        domain: 'monetago.com',
        contactPerson: {
          firstName: 'Brendan',
          lastName: 'Taylor',
          contactPersonId: ' linearId',
          designation: 'Chief Technology Officer',
          officeAddress: {
            floor: '7th Floor',
            buildingNumOrName: '902',
            street: 'Broadway',
            area: 'Manhattan',
            city: 'New York',
            state: 'New York',
            postalCode: '10010',
            country: 'USA'
          },
          tel1: '+1 (212) 123-1234',
          tel2: '+1 (212) 123-1235',
          email: 'brendan@monetago.com'
        },
        otherParticipants: {
          additionalProperties: 'blah'
        },
        networkRole: 'SERVICEPROVIDER',
        subRole: 'DEPOSITORY'
      }
    }
  })
  const [showModal, setShowModal] = useState(false)
  const [showMod, setShowMod] = useState({
    viewLegalInfo: false,
    addSubsidary: false,
    info: false,
    addPContact: false,
    editPContact: false,
    viewPContact: false,
    editBUnit: false,
    viewBUnit: false,
    addScheme: false,
    editScheme: false,
    viewScheme: false,
    mngCntrpty: false
  })
  const [innerTab, setInnerTab] = useState('Information')
  const [innerViewInfoTab, setInnerViewInfoTab] = useState(
    'Information Details'
  )
  const [innerContactTab, setinnerContactTab] = useState('Contact Person')
  const [innerAddSchemeTab, setinnerAddSchemeTab] = useState('Add Scheme')
  const [innerEditSchemeTab, setinnerEditSchemeTab] = useState('Edit Scheme')
  const [innerViewSchemeTab, setinnerViewSchemeTab] = useState('Scheme Details')
  const [buInnerTab, setbuInnerTab] = useState('Edit Business Unit')

  const handleToggleData = toggleData => {
    setInheritance(!toggleData)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const closeMod = mod => {
    setShowMod({ [mod]: false })
    setbuInnerTab('Business Unit')
    setInnerTab('Business Unit')
  }

  const openMod = (mod, tab) => {
    setShowMod({ [mod]: true })
    setInnerTab(tab)
  }

  const onChangeCountry = value => {
    useState({ [orgType.legalEntityBase.tel1]: value })
  }

  const openModal = tab => {
    setShowModal(true)
    if (tab === 'addPContact') {
      setShowModal({ editPcontact: false })
    }
  }

  const onClickTab = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setInnerTab(tab)
  }

  const onClickTabBU = event => {
    const tab = event.currentTarget.firstChild.getAttribute('id')
    setbuInnerTab(tab)
    setInnerTab(tab)
  }

  return (
    <div className="corporate-entity">
      <div className="corporate-entity-block-one">
        <div className="corporate-entity-block-one-legal-info">
          <p className="content-title">
            {orgType.legalEntityBase.legalName}{' '}
            <CorporateModal
              btnTitle="View"
              infoData="viewLegalInfo"
              open={showMod.viewInfo}
              tabsItem={tabsItemView}
              onClickTab={onClickTab}
              innerTab={innerViewInfoTab}
              onClose={() => closeMod('viewInfo')}
              dataNumber={orgType.legalEntityBase.tel1}
              btnClass="corporate-btn"
              img={require('../assets/svg/ic_edit.svg')}
              onOpen={() => openMod('viewInfo', 'Information Details')}
            />
            <CorporateModal
              btnTitle="Edit"
              infoData="legalInfo"
              open={showMod.info}
              tabsItem={tabsItem}
              onClickTab={onClickTab}
              innerTab={innerTab}
              onClose={() => closeMod('info')}
              onChangeCountry={onChangeCountry}
              dataNumber={orgType.legalEntityBase.tel1}
              btnClass="corporate-btn"
              img={require('../assets/svg/ic_edit.svg')}
              onOpen={() => openMod('info', 'Information')}
            />
            <CorporateModal
              btnTitle="Manage Counterparties"
              infoData="manageCounterparties"
              open={showMod.mngCntrpty}
              tabsItem="Counterparties"
              onClose={() => closeMod('mngCntrpty')}
              btnClass="corporate-btn"
              // innerTab={innerTab}
              img={require('../assets/svg/ic_show_chart.svg')}
              onOpen={() => openMod('mngCntrpty', 'Counterparties')}
            />
          </p>
          <p className="corporate-identifier content-subtitle">
            Corporate Identifier:{' '}
            <span className="corporate-identifier-text content-type">
              Sample
            </span>
          </p>
          <p className="tel-one corporate-icon main-info">
            {orgType.legalEntityBase.tel1}
          </p>
          <p className="fax corporate-iconmain-info main-info">
            {orgType.legalEntityBase.fax}
          </p>
          <p className="company-address corporate-icon address-primary">
            {orgType.legalEntityBase.registeredAddress.floor}{' '}
            {orgType.legalEntityBase.registeredAddress.buildingNumOrName}{' '}
            {orgType.legalEntityBase.registeredAddress.street}{' '}
            {orgType.legalEntityBase.registeredAddress.area}{' '}
            {orgType.legalEntityBase.registeredAddress.city}{' '}
            {orgType.legalEntityBase.registeredAddress.state}{' '}
            {orgType.legalEntityBase.registeredAddress.postalCode}{' '}
            {orgType.legalEntityBase.registeredAddress.country}{' '}
          </p>
          <p className="corporate-email corporate-icon main-info">
            {orgType.legalEntityBase.primaryEmail}
          </p>
          <p className="corporate-domain corporate-icon main-info">
            {orgType.legalEntityBase.domain}
          </p>
        </div>
        <div className="corporate-entity-block-one-legal-subinfo">
          <p className="corporate-title">Organization Name</p>
          <p className="coporate-type">{orgType.legalEntityBase.networkRole}</p>
          <div className="corporate-inheritance">
            <p className="inehritance-title">Authorization Inheritance</p>
            <CommonToggle
              dataToggleActive={inheritance}
              dataStateToggle="inheritance"
              handleToggleData={handleToggleData}
            />
          </div>
        </div>
      </div>
      <div className="corporate-entity-block-two">
        <div className="contact-person-wrapper">
          <div className="contact-person-header">
            <p className="contact-person-title">Contact Person</p>
            <CorporateModal
              btnTitle="Add New"
              infoData="addParentContact"
              open={showMod.addPContact}
              onOpen={() =>
                openMod('addPContact', 'Add Contact Person Details')
              }
              onClose={() => closeMod('addPContact')}
              tabsItem={addPContactItem}
              onClickTab={onClickTab}
              innerTab={innerTab}
              btnClass="corporate-btn"
              img={require('../assets/svg/ic_add.svg')}
            />
          </div>
          <div className="cotant-person-container">
            <div className="contact-person-box">
              <p className="contact-person-name modal-form-title ">
                {orgType.legalEntityBase.contactPerson.firstName}{' '}
                {orgType.legalEntityBase.lastName}
              </p>
              <p className="contact-person-designation">
                {orgType.legalEntityBase.contactPerson.designation}
              </p>
              <p className="tel-one  main-info">
                {orgType.legalEntityBase.contactPerson.tel1}
              </p>
            </div>
            <div className="corporate-buttons">
              <CorporateModal
                btnTitle="View"
                infoData="viewParentContact"
                open={showMod.viewPContact}
                onOpen={() => openMod('viewPContact', 'Contact Person Details')}
                onClose={() => closeMod('viewPContact')}
                tabsItem={viewPContactItem}
                onClickTab={onClickTab}
                innerTab={innerTab}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_visibility_24px.svg')}
              />
              <CorporateModal
                btnTitle="Edit"
                infoData="editParentContact"
                open={showMod.editPContact}
                onOpen={() =>
                  openMod('editPContact', 'Edit Contact Person Details')
                }
                onClose={() => closeMod('editPContact')}
                tabsItem={editPContactItem}
                onClickTab={onClickTab}
                innerTab={innerTab}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_edit.svg')}
              />
              <CorporateModal
                btnTitle="Delete"
                open={showModal}
                onClose={closeModal}
                btnClass="corporate-btn"
                img={require('../assets/svg/ic_delete_24px.svg')}
                onOpen={openModal}
              />
            </div>
          </div>
        </div>
        {finalSelctedOrg.networkRole === 'ISSUER' ? (
          <Fragment>
            {/* Business Unit Card */}
            <div className="business-unit-wrapper">
              <div className="business-unit-header">
                <p className="business-unit-title">Business Unit</p>
                <div className="business-unit-edit">
                  <CorporateModal
                    btnTitle="View"
                    infoData="viewBusinessUnit"
                    open={showMod.viewBUnit}
                    tabsItem={BUnitViewItem}
                    onClickTab={onClickTab}
                    innerTab={innerTab}
                    innerContactTab={innerContactTab}
                    contactTabsItem={contactTabsItem}
                    onOpen={() => openMod('viewBUnit', 'Business Unit Details')}
                    onClose={() => closeMod('viewBUnit')}
                    onChangeCountry={onChangeCountry}
                    dataNumber={orgType.legalEntityBase.tel1}
                    btnClass="corporate-btn"
                    img={require('../assets/svg/ic_visibility_24px.svg')}
                  />

                  <CorporateModal
                    btnTitle="Edit"
                    infoData={buInnerTab}
                    open={showMod.editBUnit}
                    onOpen={() => openMod('editBUnit', 'Business Unit')}
                    onClose={() => closeMod('editBUnit')}
                    tabsItem={BUnitItem}
                    onClickTab={onClickTabBU}
                    innerTab={innerTab}
                    btnClass="corporate-btn"
                    img={require('../assets/svg/ic_edit.svg')}
                  />
                </div>
              </div>
              <div className="business-unit-box">
                <p className="unit-name">
                  {orgType.issuer.businessUnits.unitName}
                </p>
                <p className="gstin  content-subtitle">
                  GSTIN:{' '}
                  <span className="content-type">
                    {
                      orgType.issuer.businessUnits.buIdentifiers
                        .additionalProperties.gstin
                    }
                  </span>
                </p>
                <p className="corporate-icon company-address address-primary">
                  {' '}
                  {orgType.issuer.businessUnits.buAddress.floor}{' '}
                  {orgType.issuer.businessUnits.buAddress.buildingNumOrName}{' '}
                  {orgType.issuer.businessUnits.buAddress.street}{' '}
                  {orgType.issuer.businessUnits.buAddress.area}{' '}
                  {orgType.issuer.businessUnits.buAddress.city}{' '}
                  {orgType.issuer.businessUnits.buAddress.state}{' '}
                  {orgType.issuer.businessUnits.buAddress.postalCode}{' '}
                  {orgType.issuer.businessUnits.buAddress.country}{' '}
                </p>
                <p className="business-unit-email corporate-email corporate-icon main-info">
                  {orgType.issuer.businessUnits.buEmail}
                </p>
                <p className="business-unit-contact  content-subtitle">
                  Business Unit Contact Person :
                  <span className="content-type">
                    {orgType.issuer.businessUnits.buContactPersons.firstName}{' '}
                    {orgType.issuer.businessUnits.buContactPersons.lastName}
                  </span>
                </p>
              </div>
            </div>
            {/* End */}
          </Fragment>
        ) : finalSelctedOrg.networkRole === 'INVESTOR' ? (
          <Fragment>
            <Fragment>
              {/* Scheme Card */}
              <div className="business-unit-wrapper">
                <div className="business-unit-header">
                  <p className="business-unit-title">Scheme</p>
                  <div className="business-unit-edit">
                    <CorporateModal
                      btnTitle="Add New"
                      infoData="addNewScheme"
                      open={showMod.addScheme}
                      tabsItem={SchemeAddItem}
                      onClickTab={onClickTab}
                      innerTab={innerAddSchemeTab}
                      onOpen={() => openMod('addScheme', 'Add Scheme')}
                      onClose={() => closeMod('addScheme')}
                      btnClass="corporate-btn"
                      img={require('../assets/svg/ic_add_24px.svg')}
                    />

                    <CorporateModal
                      btnTitle="View"
                      infoData="viewSchemeDetails"
                      open={showMod.viewScheme}
                      tabsItem={SchemeViewItem}
                      onClickTab={onClickTab}
                      innerTab={innerViewSchemeTab}
                      onOpen={() => openMod('viewScheme', 'Scheme Details')}
                      onClose={() => closeMod('viewScheme')}
                      btnClass="corporate-btn"
                      img={require('../assets/svg/ic_visibility_24px.svg')}
                    />

                    <CorporateModal
                      btnTitle="Edit"
                      infoData="editScheme"
                      open={showMod.editScheme}
                      onOpen={() => openMod('editScheme', 'Edit Scheme')}
                      onClose={() => closeMod('editScheme')}
                      tabsItem={SchemeEditItem}
                      onClickTab={onClickTab}
                      innerTab={innerEditSchemeTab}
                      btnClass="corporate-btn"
                      img={require('../assets/svg/ic_edit.svg')}
                    />
                  </div>
                </div>
                <div className="business-unit-box">
                  <p className="unit-name">
                    {orgType.investor.scheme.schemeName}
                  </p>
                  <p className="gstin  content-subtitle">
                    Depository Name:{' '}
                    <span className="content-type">
                      {orgType.investor.scheme.dpAccount.dpName}
                    </span>
                  </p>
                  {/* <p className="corporate-icon company-address address-primary">
              {' '}
              {orgType.issuer.businessUnits.buAddress.floor}{' '}
              {orgType.issuer.businessUnits.buAddress.buildingNumOrName}{' '}
              {orgType.issuer.businessUnits.buAddress.street}{' '}
              {orgType.issuer.businessUnits.buAddress.area}{' '}
              {orgType.issuer.businessUnits.buAddress.city}{' '}
              {orgType.issuer.businessUnits.buAddress.state}{' '}
              {orgType.issuer.businessUnits.buAddress.postalCode}{' '}
              {orgType.issuer.businessUnits.buAddress.country}{' '}
            </p>
            <p className="business-unit-email corporate-email corporate-icon main-info">
              {orgType.issuer.businessUnits.buEmail}
            </p> */}
                  <p className="business-unit-contact  content-subtitle">
                    <span className="content-type">
                      {orgType.investor.scheme.dpAccount.clientName}
                    </span>
                  </p>
                </div>
              </div>
            </Fragment>

            <Fragment>
              <div className="contact-person-wrapper">
                <div className="contact-person-header">
                  <p className="contact-person-title">Depository Accounts</p>
                  <CorporateModal
                    btnTitle="Add New"
                    infoData="addDepositoryAccount"
                    open={showMod.addDAccount}
                    onOpen={() =>
                      openMod('addDAccount', 'Add Depository Account')
                    }
                    onClose={() => closeMod('addDAccount')}
                    btnClass="corporate-btn"
                    img={require('../assets/svg/ic_add.svg')}
                  />
                </div>
                <div className="cotant-person-container">
                  <div className="contact-person-box">
                    <p className="contact-person-name modal-form-title ">
                      {orgType.ipa.depositoryAccounts.dpName}
                    </p>
                    <p className="contact-person-designation">
                      Reference ID: {orgType.ipa.depositoryAccounts.referenceId}
                    </p>
                    <p className="main-info">
                      {orgType.ipa.depositoryAccounts.clientName}
                    </p>
                  </div>
                  <div className="corporate-buttons">
                    <CorporateModal
                      btnTitle="View"
                      infoData="viewDepositoryAccount"
                      open={showMod.viewDAccount}
                      onOpen={() =>
                        openMod('viewDAccount', 'View Depository Account')
                      }
                      onClose={() => closeMod('viewDAccount')}
                      btnClass="corporate-btn"
                      img={require('../assets/svg/ic_visibility_24px.svg')}
                    />
                    <CorporateModal
                      btnTitle="Edit"
                      infoData="editDepositoryAccount"
                      open={showMod.editDAccount}
                      onOpen={() =>
                        openMod('editDAccount', 'Edit Depository Account')
                      }
                      onClose={() => closeMod('editDAccount')}
                      btnClass="corporate-btn"
                      img={require('../assets/svg/ic_edit.svg')}
                    />
                    <CorporateModal
                      btnTitle="Delete"
                      // open={showModal}
                      // onClose={closeModal}
                      // btnClass="corporate-btn"
                      img={require('../assets/svg/ic_delete_24px.svg')}
                      // onOpen={openModal}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          </Fragment>
        ) : finalSelctedOrg.networkRole === 'IPA' ? (
          <Fragment>
            <div className="contact-person-wrapper">
              <div className="contact-person-header">
                <p className="contact-person-title">Depository Accounts</p>
                <CorporateModal
                  btnTitle="Add New"
                  infoData="addDepositoryAccount"
                  open={showMod.addDAccount}
                  onOpen={() =>
                    openMod('addDAccount', 'Add Depository Account')
                  }
                  onClose={() => closeMod('addDAccount')}
                  btnClass="corporate-btn"
                  img={require('../assets/svg/ic_add.svg')}
                />
              </div>
              <div className="cotant-person-container">
                <div className="contact-person-box">
                  <p className="contact-person-name modal-form-title ">
                    {orgType.ipa.depositoryAccounts.dpName}
                  </p>
                  <p className="contact-person-designation">
                    Reference ID: {orgType.ipa.depositoryAccounts.referenceId}
                  </p>
                  <p className="main-info">
                    {orgType.ipa.depositoryAccounts.clientName}
                  </p>
                </div>
                <div className="corporate-buttons">
                  <CorporateModal
                    btnTitle="View"
                    infoData="viewDepositoryAccount"
                    open={showMod.viewDAccount}
                    onOpen={() =>
                      openMod('viewDAccount', 'View Depository Account')
                    }
                    onClose={() => closeMod('viewDAccount')}
                    btnClass="corporate-btn"
                    img={require('../assets/svg/ic_visibility_24px.svg')}
                  />
                  <CorporateModal
                    btnTitle="Edit"
                    infoData="editDepositoryAccount"
                    open={showMod.editDAccount}
                    onOpen={() =>
                      openMod('editDAccount', 'Edit Depository Account')
                    }
                    onClose={() => closeMod('editDAccount')}
                    btnClass="corporate-btn"
                    img={require('../assets/svg/ic_edit.svg')}
                  />
                  <CorporateModal
                    btnTitle="Delete"
                    // open={showModal}
                    // onClose={closeModal}
                    // btnClass="corporate-btn"
                    img={require('../assets/svg/ic_delete_24px.svg')}
                    // onOpen={openModal}
                  />
                </div>
              </div>
            </div>
          </Fragment>
        ) : null}
      </div>
    </div>
  )
}

export default CorporateEntity
