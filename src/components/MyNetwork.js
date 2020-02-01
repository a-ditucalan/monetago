import React, { useState } from 'react'
import { Icon, Table, Pagination } from 'semantic-ui-react'
import CommonCheckbox from '../common/CommonCheckbox'
import CommonInput from '../common/CommonInput'
import CommonFilterDropdown from '../common/CommonFilterDropdown'

const MyNetwork = () => {
  const headers = [
    {
      key: 'checkbox'
    },
    {
      key: 'uniqueId',
      content: 'Unique ID'
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
      key: 'cordaName',
      content: 'Corda Name'
    },
    {
      key: '',
      content: ''
    }
  ]

  const counterParties = [
    {
      uniqueId: 'a644d0b0-9c46-4d23-a978-7fe23b069f81',
      unitName: 'Capital Partner',
      orgRole: 'Issuer',
      cordaName: 'N/A',
      connected: 'Connected'
    },
    {
      uniqueId: 'ce807e68-05f7-4312-8d82-e2c79d539bc8',
      unitName: 'New Partner',
      orgRole: 'IPA',
      cordaName: 'N/A',
      connected: 'For Approval'
    },
    {
      uniqueId: 'cd2a4b68-fd28-48fd-8502-6dc8e01a350d',
      unitName: 'Test Partner',
      orgRole: 'Operator',
      cordaName: 'N/A',
      connected: 'Connected'
    },
    {
      uniqueId: 'd1fd3b36-3c56-4cee-b5e2-e2cf58a01ef0',
      unitName: 'New Test Partner',
      orgRole: 'Service Provider',
      cordaName: 'N/A',
      connected: 'For Approval'
    },
    {
      uniqueId: 'd1fd3b36-3c56-4cee-b5e2-e2cf58a01ef0',
      unitName: 'New New Test Partner',
      orgRole: 'Service Provider',
      cordaName: 'N/A',
      connected: 'Connected'
    }
  ]

  const filterOptions = [
    {
      name: 'role',
      placeholder: 'Role: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'Issuer',
          value: 'Issuer',
          text: 'Issuer'
        },
        {
          key: 'IPA',
          value: 'IPA',
          text: 'IPA'
        },
        {
          key: 'Operator',
          value: 'Operator',
          text: 'Operator'
        },
        {
          key: 'Service Provider',
          value: 'Service Provider',
          text: 'Service Provider'
        }
      ]
    },
    {
      name: 'organization',
      placeholder: 'Status: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'Connected',
          value: 'Connected',
          text: 'Connected'
        },
        {
          key: 'For Approval',
          value: 'For Approval',
          text: 'For Approval'
        }
      ]
    }
  ]

  const [orgType, setOrgType] = useState({
    legalEntityBase: {
      legalName: 'JC Supply PTY',
      networkRole: 'ISSUER'
    }
  })

  return (
    <div className="my-network-wrapper">
      <div className="corporate-entity">
        <div className="corporate-entity-block-one">
          <div className="corporate-entity-block-one-legal-info">
            <p className="content-title">
              {orgType.legalEntityBase.legalName}{' '}
            </p>
            <p className="corporate-identifier content-subtitle">
              Corporate Identifier:{' '}
              <span className="corporate-identifier-text content-type">
                Sample
              </span>
            </p>
          </div>
          <div className="corporate-entity-block-one-legal-subinfo">
            <p className="corporate-title">Organization Name</p>
            <p className="coporate-type">
              {orgType.legalEntityBase.networkRole}
            </p>
            <div className="corporate-inheritance">
              <p className="inehritance-title">
                <Icon name="users" /> {counterParties.length} counterparties
              </p>
            </div>
          </div>
        </div>
        <div className="menu-header">
          <CommonInput
            inputStyle="search-input"
            icon="search"
            iconPosition="left"
            placeholder="Search ..."
          />
          <CommonFilterDropdown options={filterOptions} />
          <div className="pagination">
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={3}
            />
          </div>
        </div>
        <div className="counter-parties-table">
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
                      {typeof header.content === 'string' && header.content ? (
                        <Icon name="sort" className="sort" />
                      ) : null}
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
                          // onClick={checkbox}
                          // checked={checked}
                          />
                        </Table.Cell>
                        <Table.Cell className="uid">{data.uniqueId}</Table.Cell>
                        <Table.Cell className="common-data">
                          {data.unitName}
                        </Table.Cell>
                        <Table.Cell className="common-data">
                          {data.orgRole}
                        </Table.Cell>
                        <Table.Cell className="common-data">
                          {data.cordaName}
                        </Table.Cell>
                        <Table.Cell className="connected-wrapper">
                          {data.connected === 'Connected' ? (
                            <span className="connected">{data.connected}</span>
                          ) : (
                            <span className="approval">{data.connected}</span>
                          )}
                        </Table.Cell>
                        <Table.Cell>
                          <Icon name="ellipsis vertical" className="menu" />
                        </Table.Cell>
                      </Table.Row>
                    )
                  })
                : null}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default MyNetwork
