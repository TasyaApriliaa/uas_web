import axios from './axios'
import {
  getUserFromLocalStorage
} from './token.services'

/* eslint-disable */

export default {
  getApi(endpoint) {
    this.setToken()
    return axios.get(`${endpoint}`)
      // .catch((e) => {
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  getById(endpoint,slug){
    this.setToken()
    return axios.get(`${endpoint}/${slug}`)
  },
  postApiFile (endpoint,params) {
	   this.setToken()
	     return axios.post(`${endpoint}`, params,{
		'headers': {
		  'Content-Type': "multipart/form-data"
		}
	  })
  },
  postApi(endpoint, params) {
    this.setToken()
    return axios.post(`${endpoint}`, params)
      // .catch((e) => {
      //   console.log(e.response)
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  updateApi(endpoint, params = null) {
    this.setToken()
    return axios.put(`${endpoint}`, params)
      // .catch((e) => {
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  deleteApi(endpoint, slug) {
    this.setToken()
    return axios.delete(`${endpoint}/${slug}`)
      // .catch((e) => {
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  deleteNestApi(endpoint) {
    this.setToken()
    return axios.delete(`${endpoint}`)
      .catch((e) => {
        throw new Error(`error-message: ${e}`)
      })
  },
  setToken() {
    let data = getUserFromLocalStorage()
    axios.defaults.headers.common.Authorization = `Bearer ${data}`
    // axios.defaults.headers.common.Authorization = `Bearer ${data}`
    // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    // 'Content-Type': 'multipart/form-data'

  }

}
