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
  CREATE_ORGANIZATION,
  FETCH_API,
  SET_ORG_USER,
  RESET_SELECTED_USERS,
  EDIT_ORGANIZATION,
  USER_ORG_ID,
  SET_USER_PAGE,
  SET_ACTIVE_TAB
} from './organizationTypes'
import axioz from '../../common/ApiUtils'
import Authentication from '../../common/Authentication'

export const orgActiveStep = currStep => {
  return {
    type: ORG_ACTIVE_STEP,
    activeStep: currStep
  }
}

export const userOrgId = orgId => {
  return {
    type: USER_ORG_ID,
    orgId: orgId
  }
}
export const orgAccount = (data, organization) => {
  return {
    type: ORG_ACCOUNT,
    data: data,
    orgName: organization
  }
}

export const orgProfile = (currStep, currOrgTab, orgId) => {
  return {
    type: ORG_PROFILE,
    activeStep: currStep,
    activeOrgTab: currOrgTab,
    orgId: orgId
  }
}

export const sortBy = (tableType, sortType = '', orgName) => {
  return {
    type: SORT_ADMIN_TABLE,
    tableType: tableType,
    sortType: sortType,
    orgName: orgName
  }
}

export const filterBy = e => {
  return {
    type: FILTER_ADMIN_TABLE,
    filterType: e.target.firstElementChild.innerText
  }
}

export const userCheckbox = (tableType, id, orgName) => {
  return {
    type: CHECKBOX_SELECT_USER,
    tableType: tableType,
    checkedUser: id,
    orgName: orgName
  }
}

export const resetSelected = () => {
  return {
    type: RESET_SELECTED_USERS,
    selected: false
  }
}

export const setActiveTab = tab => {
  return {
    type: SET_ACTIVE_TAB,
    tab: tab
  }
}

export const fetchApi = page => {
  return dispatch => {
    let orgData = []
    let userData = []
    let userPageData = []
    let userPage = {}
    let authUser = JSON.parse(Authentication.loadUserProfile())

    // GET - All Organizations
    axioz('get', '/organizations')
      .then(response => {
        orgData = response.data._embedded.organizations

        // GET - All User Accounts
        axioz('get', `/useraccounts`)
          .then(response => {
            userData = response.data._embedded.useraccounts

            // GET - All User Accounts by Page
            axioz('get', `/useraccounts?page=${page}&size=10`)
              .then(response => {
                userPageData = response.data._embedded.useraccounts
                userPage = response.data.page

                if (authUser.roles[0] === 'MGADMIN') {
                  dispatch(callApi(orgData, userData))
                  dispatch(setUserOrg(orgData, userData))
                  dispatch(setUserPage(orgData, userPageData, userPage))
                } else {
                  let currOrg = []
                  orgData.filter(orgz => {
                    if (orgz.orgId === authUser.orgId) {
                      return currOrg.push(orgz)
                    }
                  })

                  let listUser = []
                  userData.filter(user => {
                    if (user.orgId === authUser.orgId) {
                      return listUser.push(user)
                    }
                  })

                  let orgUserPage = []
                  userPageData.filter(user => {
                    if (user.orgId === authUser.orgId) {
                      return orgUserPage.push(user)
                    }
                  })

                  dispatch(callApi(currOrg, listUser))
                  dispatch(setUserOrg(orgData, userData))
                  dispatch(setUserPage(currOrg, orgUserPage, userPage))
                }
              })
              .catch(err => {
                console.log(err)
              })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const createOrganization = data => {
  return dispatch => {
    axioz('post', '/organizations', data)
      .then(response => {
        dispatch(createOrg(response))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const callUserAccountsApi = () => {
  return dispatch => {
    // GET - All User Accounts
    axioz('get', '/useraccounts')
      .then(response => {
        dispatch(setUserAccounts(response.data._embedded.useraccounts))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const editOrganization = (id, data) => {
  return dispatch => {
    axioz('patch', `/organizations/${id}`, data)
      .then(response => {
        console.log(response, 'Test')
        dispatch(editOrg(response))
        dispatch(fetchApi(1))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const deactivateOrganization = id => {
  return dispatch => {
    axioz('patch', `/organizations/${id}/deactivate`)
      .then(response => {
        console.log(response, 'Test')
        // dispatch(editOrg(response))
        dispatch(fetchApi(1))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const activateOrganization = id => {
  return dispatch => {
    axioz('patch', `/organizations/${id}`, { active: true })
      .then(response => {
        console.log(response, 'Test')
        // dispatch(editOrg(response))
        dispatch(fetchApi(1))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const callApi = (orgs, users) => {
  return {
    type: FETCH_API,
    orgs: orgs,
    data: users
  }
}

const setUserPage = (orgData, userData, page) => {
  return {
    type: SET_USER_PAGE,
    orgs: orgData,
    data: userData,
    page: page
  }
}

export const setUserOrg = (orgs, users) => {
  return {
    type: SET_ORG_USER,
    orgs: orgs,
    users: users
  }
}

export const createOrg = () => {
  return { type: CREATE_ORGANIZATION }
}

export const editOrg = () => {
  return { type: EDIT_ORGANIZATION }
}
