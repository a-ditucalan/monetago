export default class Authentication {
  static accessToken = ''
  static UserObject = {}

  // the method signature will be same
  static saveAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken)
  }

  static saveTokenExpiration(expiration) {
    localStorage.setItem('tokenExpiration', expiration)
  }

  // static userLoad(userObject) {
  //     console.log("userObject>>authentication", userObject);
  //     Authentication.UserObject = userObject;
  // }

  static load() {
    return localStorage.getItem('accessToken')
  }

  static remove() {
    localStorage.removeItem('accessToken', '')
    localStorage.removeItem('tokenExpiration', '')
  }

  // static saveUserId(userId) {
  //   localStorage.setItem('xUserId', userId)
  // }

  // static loadUserId() {
  //   return localStorage.getItem('xUserId')
  // }

  // static removeUserId() {
  //   localStorage.removeItem('xUserId')
  // }

  static saveUserProfile(profile) {
    localStorage.setItem('userProfile', profile)
  }

  static loadUserProfile() {
    return localStorage.getItem('userProfile')
  }

  static reset() {
    // localStorage.setItem('xUserId', '')
    // localStorage.setItem('userProfile', {})
    localStorage.setItem('accessToken', '')
    localStorage.setItem('authUser', '')
  }
}
