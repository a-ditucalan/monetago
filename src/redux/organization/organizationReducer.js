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
  ORG_ACCOUNT,
  FETCH_API,
  SET_ORG_USER,
  RESET_SELECTED_USERS,
  EDIT_ORGANIZATION,
  USER_ORG_ID,
  SET_USER_PAGE,
  SET_ACTIVE_TAB
} from './organizationTypes'

import { userConstants } from '../user/userTypes'

const initialState = {
  sortBy: '',
  filterBy: '',
  selectedOrg: '',
  ascending: false,
  selectAll: false,
  activeStep: 'organizationCardList',
  activeSideTab: 'Organization',
  userAccounts: [],
  organizations: [],
  orgAndUser: [],
  userTable: [],
  userPage: {}
}

// Add Custom Properties for each Users
const userAccounts = action => {
  let userAccounts = []
  action.data.map(user => {
    user.selected = false
    user.organization = action.orgs.filter(data => {
      return data.orgId === user.orgId
    })
    userAccounts.push(user)
  })
  return userAccounts
}

const setUserTable = action => {
  let userAccounts = []
  action.data.map(user => {
    user.selected = false
    user.organization = action.orgs.filter(data => {
      return data.orgId === user.orgId
    })
    userAccounts.push(user)
  })
  return userAccounts
}

// Set Organization and its User Accounts
const getOrgUser = (orgs, users) => {
  let orgUserList = []

  orgs.forEach(orgz => {
    orgUserList.push({
      org: orgz,
      userAccounts: []
    })
  })

  users.forEach(user => {
    // const userOrgId = user.organization[0].orgId
    const userOrgId = user.orgId
    let currOrgIndex
    let currUser

    orgUserList.forEach((orgItem, index) => {
      if (orgItem.org.orgId === userOrgId) {
        currOrgIndex = index
        currUser = user
      }
    })

    orgUserList[currOrgIndex].userAccounts.push(currUser)
  })

  return orgUserList
}

// Sort User Data
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

// Set Selected Users on Table
const selectedUsers = (state, action) => {
  let selectedArr = []
  let dataToSelect = {}
  let orgUserSelect = []

  if (action.tableType === 'Account') {
    dataToSelect = state.userAccounts
  } else {
    state.orgAndUser.map(data => {
      if (data.org.orgId === state.selectedOrg) {
        return (dataToSelect = data.userAccounts)
      }
    })
  }

  if (action.checkedUser === 'All') {
    state.selectAll = !state.selectAll

    dataToSelect.find(arr => {
      state.selectAll ? (arr.selected = true) : (arr.selected = false)
    })
  } else {
    dataToSelect.find(arr => {
      if (arr.id === action.checkedUser) {
        arr.selected = !arr.selected
      }
    })
  }

  dataToSelect.map(data => {
    return data.selected ? selectedArr.push(data.id) : null
  })

  selectedArr.length === dataToSelect.length
    ? (state.selectAll = true)
    : (state.selectAll = false)

  if (action.tableType === 'Account') {
    return dataToSelect
  } else {
    return state.selectedOrg
  }
}

// Reset Selected User Accounts
const resetSelected = state => {
  let userAccounts = []
  state.userAccounts.map(user => {
    user.selected = false
    return userAccounts.push(user)
  })

  return userAccounts
}
//END OF HELPER FUNCTIONS

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
    case USER_ORG_ID:
      return {
        ...state,
        selectedOrg: action.orgId
      }
    case ORG_PROFILE:
      return {
        ...state,
        activeStep: action.activeStep,
        activeOrgTab: action.activeOrgTab,
        selectedOrg: action.orgId
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
        selectedOrg: selectedUsers(state, action)
      }

    case FETCH_API:
      return {
        ...state,
        organizations: action.orgs,
        userAccounts: userAccounts(action)
      }

    case SET_ORG_USER:
      return {
        ...state,
        orgAndUser: getOrgUser(action.orgs, action.users)
      }

    case RESET_SELECTED_USERS:
      return {
        ...state,
        selectAll: action.selected,
        userAccounts: resetSelected(state)
      }

    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeSideTab: action.tab
      }

    case SET_USER_PAGE: {
      return {
        ...state,
        userTable: userAccounts(action),
        userPage: action.page
      }
    }

    case userConstants.USER_LOGOUT:
      return {
        sortBy: '',
        filterBy: '',
        selectedOrg: '',
        ascending: false,
        selectAll: false,
        activeStep: 'organizationCardList',
        activeSideTab: 'Organization',
        userAccounts: [],
        organizations: [],
        orgAndUser: [],
        userTable: [],
        userPage: {}
      }

    default:
      return state
  }
}
