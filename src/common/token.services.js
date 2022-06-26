import CryptoJS from 'crypto-js'

export const removeToken = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('role')
  window.localStorage.removeItem('user_id')
  window.localStorage.removeItem('token_expire')
}

export const setToken = (data) => {
  window.localStorage.setItem('token', data.access_token)
  window.localStorage.setItem('role', CryptoJS.AES.encrypt(data.role, 'amalanku'))
  window.localStorage.setItem('user_id', CryptoJS.AES.encrypt(data.id.toString(), 'amalanku'))
  // window.localStorage.setItem('user_id', data.user)
  window.localStorage.setItem('token_expire', data.expires_in)
  window.localStorage.setItem('name', data.name)
  window.localStorage.setItem('nip', data.nip)


}


export const getUserFromLocalStorage = () => {
  const json = window.localStorage.token
  return json ? json : undefined
}

export const getRoleFromLocalStorage = () => {
  let roleInfo = window.localStorage.getItem('role')
    let datarole = CryptoJS.AES.decrypt(roleInfo, 'amalanku').toString(CryptoJS.enc.Utf8)
    return datarole
}
//
// export default{
//
// }
