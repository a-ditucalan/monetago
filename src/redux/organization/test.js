/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential andproprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a writtenagreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to createderivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  Noportion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import {
  ORG_ACTIVE_STEP,
  ORG_PROFILE,
  SORT_ADMIN_TABLE,
  FILTER_ADMIN_TABLE,
  CHECKBOX_SELECT_USER,
  ORG_ACCOUNT
} from './organizationTypes'

const initialState = {
  sortBy: '',
  filterBy: '',
  selectedOrg: '',
  ascending: false,
  selectAll: false,
  accounts: {
    users: [
      {
        userId: 'user09812',
        password: '000',
        orgId: '000',
        firstName: 'Anuar',
        lastName: 'Ditucalan',
        email: 'anuarditucalan@gmail.com',
        phoneNumber: '+63519 862 7612',
        group: 'Group 1',
        role: 'Admin',
        active: true,
        selected: false
      }
    ]
  },

  activeStep: 'organizationCardList',
  column: ['userId', 'name', 'email', 'phoneNumber', 'group', 'role', 'active'],
  filterOptions: [
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
      name: 'group',
      placeholder: 'Group: All',
      options: [
        {
          key: 'all',
          value: 'all',
          text: 'All'
        },
        {
          key: 'group1',
          value: 'group1',
          text: 'Group 1'
        },
        {
          key: 'group2',
          value: 'group2',
          text: 'Group 2'
        },
        {
          key: 'group3',
          value: 'group3',
          text: 'Group 3'
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
  ],
  headers: [
    {
      key: 'checkbox'
    },
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
      key: 'group',
      content: 'Group'
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
  ],
  organization: [
    {
      status: 'inactive',
      avatar: 'AB',
      name: 'AMCE Bldg Supply LTD',
      info: 'AMCE Building Supply',
      orgId: '111',
      leIdRoot: '118d0cf8-693d-437c-b90e-6e8650f633a1',
      type: 'Issuer',
      subRole: '',
      leInfo: {
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
      users: [
        {
          userId: 'user09811',
          password: '111',
          orgId: '111',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 1',
          role: 'Admin',
          active: true,
          selected: false
        }
      ]
    },
    {
      status: 'active',
      avatar: 'JC',
      name: 'JC Supply PTY',
      info: 'Construction Supply',
      orgId: '112',
      leIdRoot: '118d0cf8-693d-437c-b90e-6e8650f633a2',
      type: 'Investor',
      subRole: '',
      leInfo: {
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
      users: [
        {
          userId: 'user09812',
          password: '112',
          orgId: '112',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 1',
          role: 'Admin',
          active: true,
          selected: false
        },
        {
          userId: 'user098258613',
          password: '112',
          orgId: '112',
          firstName: 'Richardson',
          lastName: 'Vandelier',
          email: 'richardson.vandelier@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 2',
          role: 'Admin',
          active: false,
          selected: false
        }
      ]
    },
    {
      status: 'inactive',
      avatar: 'DK',
      name: 'DK Solutions',
      info: 'Solutions Company',
      leIdRoot: '118d0cf8-693d-437c-b90e-6e8650f633a8',
      orgId: '113',
      type: 'IPA',
      subRole: '',
      leInfo: {
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
      users: [
        {
          userId: 'user09814',
          password: '113',
          orgId: '113',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 1',
          role: 'Admin',
          active: true,
          selected: false
        },
        {
          userId: 'user098258615',
          password: '113',
          orgId: '113',
          firstName: 'Richardson',
          lastName: 'Vandelier',
          email: 'richardson.vandelier@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 2',
          role: 'Admin',
          active: false,
          selected: false
        },
        {
          userId: 'user0982526',
          password: '113',
          orgId: '113',
          firstName: 'Thomas',
          lastName: 'Col',
          email: 'TMCollines@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 2',
          role: 'User',
          active: true,
          selected: false
        }
      ]
    },
    {
      status: 'active',
      avatar: 'JC',
      name: 'JC Supply PTY',
      info: 'Construction Supply',
      orgId: '114',
      leIdRoot: '118d0cf8-693d-437c-b90e-6e8650f633a4',
      type: 'Service Provider',
      leInfo: {
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
      },
      subRole: 'DEPOSITORY',
      users: [
        {
          userId: 'user09817',
          password: '114',
          orgId: '114',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 1',
          role: 'Admin',
          active: true,
          selected: false
        },
        {
          userId: 'user098258618',
          password: '114',
          orgId: '114',
          firstName: 'Richardson',
          lastName: 'Vandelier',
          email: 'richardson.vandelier@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 2',
          role: 'Admin',
          active: false,
          selected: false
        },
        {
          userId: 'user0982529',
          password: '114',
          orgId: '114',
          firstName: 'Thomas',
          lastName: 'Col',
          email: 'TMCollines@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 2',
          role: 'User',
          active: true,
          selected: false
        },
        {
          userId: 'user0982536110',
          password: '114',
          orgId: '114',
          firstName: 'Raven',
          lastName: 'Dutch',
          email: 'raven.dutch@gmail.com',
          phoneNumber: '+63519 862 7612',
          group: 'Group 3',
          role: 'User',
          active: true,
          selected: false
        }
      ]
    }
  ]
}

initialState.organization.map(org => {
  org.users.map(user => {
    user.organizationName = org.name
    initialState.accounts.users.push(user)
  })
})

const sortData = (state, action) => {
  let self = state.ascending
  let dataToSort =
    action.tableType === 'Account' ? state.accounts : state.selectedOrg
  self = !self

  dataToSort.users.sort((a, b) => {
    return a[state.sortBy] < b[state.sortBy]
      ? self
        ? 1
        : -1
      : a[state.sortBy] > b[state.sortBy]
        ? self
          ? -1
          : 1
        : 0
  })
}

const selectedUsers = (state, action) => {
  let selectedArr = []
  let dataToSelect =
    action.tableType === 'Account' ? state.accounts : state.selectedOrg

  if (action.checkedUser === 'All') {
    state.selectAll = !state.selectAll

    dataToSelect.users.find(arr => {
      state.selectAll ? (arr.selected = true) : (arr.selected = false)
    })
  } else {
    dataToSelect.users.find(arr => {
      if (arr.userId === action.checkedUser) {
        arr.selected = !arr.selected
      }
    })
  }

  dataToSelect.users.map(data => {
    return data.selected ? selectedArr.push(data.userId) : null
  })

  selectedArr.length === dataToSelect.users.length
    ? (state.selectAll = true)
    : (state.selectAll = false)

  return dataToSelect.users
}

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORG_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.activeStep
      }

    case ORG_ACCOUNT:
      return {
        ...state,
        selectedOrg: action.orgName
      }

    case ORG_PROFILE:
      return {
        ...state,
        activeStep: action.activeStep,
        selectedOrg: action.orgName
      }

    case SORT_ADMIN_TABLE:
      return {
        ...state,
        ascending: !state.ascending,
        sortBy: action.sortType,
        selectedOrg: {
          name: state.selectedOrg.name,
          users:
            action.tableType === 'Account'
              ? state.accounts.users.sort(sortData(state, action))
              : state.selectedOrg.users.sort(sortData(state, action))
        }
      }

    case FILTER_ADMIN_TABLE:
      return {
        ...state,
        filterBy: action.filterType
      }

    case CHECKBOX_SELECT_USER:
      return {
        ...state,
        selectedOrg: {
          name: state.selectedOrg.name,
          users: selectedUsers(state, action)
        }
      }

    default:
      return state
  }
}
