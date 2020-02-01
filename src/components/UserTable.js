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
import { useSelector, useDispatch } from 'react-redux'

import { editAccount } from '../redux'
import { updateUserRole, setUserStatus } from '../redux/user/userActions'
import { fetchApi } from '../redux/organization/organizationActions'

import {
  Table,
  Button,
  Popup,
  Modal,
  Icon,
  Pagination
} from 'semantic-ui-react'

import Authentication from '../common/Authentication'
import CommonInput from '../common/CommonInput'
import CommonFilterDropdown from '../common/CommonFilterDropdown'
import MainModal from './MainModal'
import EditUserOnAccount from './EditUserOnAccount'
import CommonButton from '../common/CommonButton'
import CommonDropdown from '../common/CommonDropdown'
import CommonNotifPortal from '../common/CommonNotifPortal'
import {
  mgAdmin,
  issuer,
  investor,
  IPA
} from '../lib/AddNewOrganizationUserData'

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
        key: 'admin',
        value: 'admin',
        text: 'Admin'
      },
      {
        key: 'User',
        value: 'User',
        text: 'User'
      }
    ]
  },
  {
    name: 'organization',
    placeholder: 'Organization: All',
    options: [
      {
        key: 'all',
        value: 'all',
        text: 'All'
      },
      {
        key: 'organization1',
        value: 'organization1',
        text: 'Organization 1'
      },
      {
        key: 'organization2',
        value: 'organization2',
        text: 'Organization 2'
      },
      {
        key: 'organization3',
        value: 'organization3',
        text: 'Organization 3'
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

const headers = [
  // {
  //   key: 'checkbox'
  // },
  {
    key: 'userId',
    content: 'Account ID'
  },
  {
    key: 'firstName',
    content: 'Name'
  },
  {
    key: 'email',
    content: 'Email'
  },
  {
    key: 'phoneNumber',
    content: 'Phone Number'
  },
  {
    key: 'organization',
    content: 'Organization'
  },
  {
    key: 'role',
    content: 'Role'
  },
  {
    key: '',
    content: ''
  },
  {
    key: '',
    content: ''
  }
]

const actions = [
  {
    // icon: require('../assets/svg/settings.svg'),
    icon: 'cog',
    type: 'setRole',
    text: 'Set Role',
    component: 'null',
    modalOpen: false
  },
  {
    // icon: require('../assets/svg/edit.svg'),
    icon: 'pencil',
    type: 'editAccount',
    text: 'Edit Account',
    component: EditUserOnAccount,
    modalOpen: false
  },
  {
    // icon: require('../assets/svg/delete.svg'),
    icon: 'pencil',
    type: 'accountStatus',
    text: '',
    component: 'null',
    modalOpen: false
  }
]

// roles = []
// const roles = [
//   {
//     key: 1,
//     text: 'Issuer - Senior Treasury Operations',
//     value: 'Issuer - Senior Treasury Operations'
//   },
//   {
//     key: 2,
//     text: 'Investor - Senior Operations',
//     value: 'Investor - Senior Operations'
//   },
//   {
//     key: 3,
//     text: 'IPA - Senior Operations',
//     value: 'IPA - Senior Operations'
//   },
//   {
//     key: 4,
//     text: 'MGADMIN',
//     value: 'MGADMIN'
//   }
// ]

const UserTable = ({ type, content, page }) => {
  const activeStep = useSelector(state => state.organization.activeSideTab)
  const userAccounts = useSelector(state => state.organization.userAccounts)
  const authUser = JSON.parse(Authentication.loadUserProfile())
  const table =
    activeStep === 'Organization' && authUser.roles[0] === 'MGADMIN'
      ? content
      : userAccounts

  const accountState = useSelector(state => state.log)
  const dispatch = useDispatch()
  const [popupState, setPopupState] = useState([])

  const [openSetRoleModal, setopenSetRoleModal] = useState(false)
  const [roleValue, setroleValue] = useState([])
  const [userIdSetRole, setuserIdSetRole] = useState('')
  const [orgRole, setOrgRole] = useState([])
  const [currRole, setCurrRole] = useState('')
  const [openStatusModal, setopenStatusModal] = useState(false)

  const [modal, setModal] = useState(false)
  const [component, setComponent] = useState({ component: '' })

  // const [selectedUser, setSelectedUser] = useState({})
  const [currAccount, setCurrAccount] = useState({
    id: '',
    status: null
  })

  const [loaderSetRole, setLoaderSetRole] = useState(false)
  const [loaderSetStatus, setLoaderSetStatus] = useState(false)

  const closeSetRoleModal = () => {
    setopenSetRoleModal(false)
  }

  const closeStatusModal = () => {
    setopenStatusModal(false)
  }

  const handlePopupOpen = (data, index) => {
    for (let x = 1; x <= index; x++) {
      popupState.splice(index, 1, false)
    }
    popupState.splice(index, 1, true)
    setPopupState([...popupState])

    setCurrAccount({
      ...currAccount,
      id: data.id,
      status: data.active
    })
  }

  const handlePopupClose = (index, comp = 'null', data, type) => {
    dispatch(editAccount(data))
    popupState.splice(index, 1, false)
    setPopupState([...popupState])
    if (comp !== 'null') {
      setModal(true)
      setComponent({
        component: comp,
        id: data.id,
        status: data.active,
        uId: data.uid,
        password: data.password,
        fName: data.firstName,
        lName: data.lastName,
        email: data.email,
        pNum: data.phone,
        orgName: data.organization[0].legalName,
        group: data.group,
        department: data.department,
        role: data.role
      })
    } else if (type === 'setRole') {
      let listCurrRole = data.roles[0].toString()

      setModal(false)
      setopenSetRoleModal(true)
      setCurrRole(listCurrRole)

      setuserIdSetRole(data.id)
      let dataRole = data.organization[0].networkRole

      if (dataRole === 'ISSUER') {
        setOrgRole(issuer)
      } else if (dataRole === 'OPERATOR') {
        setOrgRole(mgAdmin)
      } else if (dataRole === 'IPA') {
        setOrgRole(IPA)
      } else if (dataRole === 'INVESTOR') {
        setOrgRole(investor)
      }
    } else if (type === 'accountStatus') {
      setModal(false)
      setopenStatusModal(true)
    }
  }

  const handleModalClose = () => {
    setModal(false)
  }

  const setRoleValue = e => {
    setroleValue([e.target.innerText])
  }

  const updateSetRole = () => {
    setLoaderSetRole(true)

    setTimeout(() => {
      dispatch(updateUserRole(userIdSetRole, roleValue))
      setLoaderSetRole(false)
      dispatch(fetchApi(1))
    }, 2000)

    setTimeout(() => {
      setopenSetRoleModal(false)
    }, 5000)
  }

  const handlAccountStatus = (account, status) => {
    let finalStatus
    setLoaderSetStatus(true)

    if (status) {
      finalStatus = 'deactivate'
    } else {
      finalStatus = 'activate'
    }

    setTimeout(() => {
      dispatch(setUserStatus(account, finalStatus))
      setLoaderSetStatus(false)
      dispatch(fetchApi(1))
    }, 2000)

    setTimeout(() => {
      closeStatusModal()
    }, 5000)
  }

  const [searched, setsearched] = useState('')
  const search = event => {
    setsearched(event.target.value)
  }

  const onEnterSubmit = event => {
    if (event.key === 'Enter') {
      // axioz('get', `/useraccounts/search/findByEmail?email=${searched}`)
      //   .then(response => {
      //     // console.log(content)
      //     // console.log(response)
      //     // let search = []
      //     // content.find(data => {
      //     //   return data.id === response.data.id ? search.push(data) : false
      //     // })
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      console.log(event.key)
    }
  }

  return (
    <div className="admin-table-wrapper">
      <CommonNotifPortal
        notifOpen={accountState.notif.open}
        notifClass={accountState.notif.status}
        notifIcon={accountState.notif.icon}
        notifTextContent={accountState.notif.msg}
      />

      <form className="login-form" onKeyDown={onEnterSubmit}>
        <CommonInput
          inputStyle="search-input"
          icon="search"
          iconPosition="left"
          placeholder="Search Account Name, Email or Phone Number..."
          onChange={e => search(e)}
        />
      </form>
      <div className="table-filter-details">
        <CommonFilterDropdown options={filterOptions} />
        {page ? (
          <div className="table-filter-page">
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              ellipsisItem={null}
              pointing
              secondary
              totalPages={page.totalPages}
              onPageChange={(e, data) => dispatch(fetchApi(data.activePage))}
            />
          </div>
        ) : null}
      </div>
      <div className="table-wrapper">
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              {headers.map((header, i) => {
                // return header.key === 'checkbox' ? (
                //   <Table.HeaderCell key={i}>
                //     {' '}
                //     <Checkbox
                //       checked={table.selectAll}
                //       onChange={() =>
                //         dispatch(userCheckbox(type, 'All', content.name))
                //       }
                //     />
                //   </Table.HeaderCell>
                // ) : (
                return (
                  <Table.HeaderCell key={i}>
                    {header.content}{' '}
                    {typeof header.content === 'string' && header.content ? (
                      <img
                        src={require('../assets/svg/sort-arrows.svg')}
                        className="sort-arrow"
                        alt="Sort Arrows Icon"
                      />
                    ) : null}
                  </Table.HeaderCell>
                )
                // )
              })}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {table
              ? table.map((data, i) => {
                  return (
                    <Table.Row
                      key={i}
                      className={data.selected ? 'checked' : null}
                    >
                      {/* <Table.Cell>
                        <Checkbox
                          checked={data.selected}
                          onChange={() => dispatch(userCheckbox(type, data.id))}
                        />
                      </Table.Cell> */}
                      <Table.Cell className="user-id">{data.uid}</Table.Cell>
                      <Table.Cell>{`${data.firstName} ${data.lastName}`}</Table.Cell>
                      <Table.Cell>{data.email}</Table.Cell>
                      <Table.Cell>{data.phone}</Table.Cell>
                      <Table.Cell>{data.organization[0].legalName}</Table.Cell>
                      <Table.Cell>{data.roles}</Table.Cell>
                      <Table.Cell className="activity">
                        <span className={data.active ? 'active' : 'inactive'}>
                          {data.active ? 'Active' : 'Inactive'}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <Popup
                          className="action-popup"
                          trigger={
                            <Button className="btn btn-menu">
                              <img
                                src={require('../assets/svg/vertical-menu.svg')}
                                className="vertical-menu"
                                alt="Vertical Menu Icon"
                              />
                            </Button>
                          }
                          open={popupState[i]}
                          onOpen={() => handlePopupOpen(data, i)}
                          onClose={() => handlePopupClose(i)}
                          content={
                            <div className="action-menu">
                              {actions.map((action, ii) => {
                                return (
                                  <p
                                    key={ii}
                                    className="actions"
                                    onClick={() =>
                                      handlePopupClose(
                                        i,
                                        action.component,
                                        data,
                                        action.type
                                      )
                                    }
                                  >
                                    {/* <img
                                      src={action.icon}
                                      alt={`${action.text} Icon`}
                                      className="action-icon"
                                    /> */}

                                    <Icon
                                      name={action.icon}
                                      className="action-icon"
                                    />
                                    {action.text.length === 0
                                      ? currAccount.status
                                        ? 'Deactivate'
                                        : 'Activate'
                                      : action.text}
                                  </p>
                                )
                              })}
                            </div>
                          }
                          on="click"
                          position="top right"
                        />
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              : null}
          </Table.Body>
        </Table>
      </div>
      <MainModal trigger={''} open={modal} onClose={handleModalClose}>
        {
          <component.component
            id={component.id}
            tableType={type}
            modal={() => setModal()}
          />
        }
      </MainModal>

      <Modal
        className="modal-popup"
        style={{ backgroundColor: '#000' }}
        open={openSetRoleModal}
        onClose={closeSetRoleModal}
        centered
        size="small"
      >
        <Modal.Content className="set-role-content">
          <p className="modal-form-title">Set Role</p>

          <CommonDropdown
            placeholder={currRole}
            options={orgRole}
            dropdownClass="dropdown-select-role"
            onChange={setRoleValue}
          />
          <div className="btn-container">
            <CommonButton
              content="CANCEL"
              btnClass="btn-cancel btn-gray"
              onClick={closeSetRoleModal}
            />

            <CommonButton
              content="UPDATE"
              btnClass={
                document.querySelector('.set-role-content .default')
                  ? 'btn-save btn-blue disabled'
                  : 'btn-save btn-blue '
              }
              onClick={updateSetRole}
              loader={loaderSetRole}
            />
          </div>
        </Modal.Content>
      </Modal>

      <Modal
        open={openStatusModal}
        onClose={closeStatusModal}
        className="modal-popup"
        style={{ backgroundColor: '#000' }}
        centered
        size="small"
      >
        <Modal.Content className="delete-content">
          <p className="modal-form-title">
            Are you sure you want to{' '}
            {currAccount.status ? 'deactivate' : 'activate'} this user?
          </p>
          <div className="btn-actions">
            <CommonButton
              content="CANCEL"
              btnClass="btn-cancel btn-white"
              onClick={closeStatusModal}
            />
            <CommonButton
              content={currAccount.status ? 'DEACTIVATE' : 'ACTIVATE'}
              btnClass="btn-deact btn-blue"
              onClick={() =>
                handlAccountStatus(currAccount.id, currAccount.status)
              }
              loader={loaderSetStatus}
            />
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default UserTable
