import ApiService from '@/common/api.services'
// import { CHECK_AUTH } from './actions.type'
// import TokenAuth from '@/common/token.services'
// import UserSetting from '@/common/user.services'

export default {
  state: {
    error: null,
    user: {},
    role: 1,
  },
  getters: {
    getRole(state) {
        return state.role
    },
    dataTes (state) {
      return state.tesVuexCoex
    },
    getUserLogin (state) {
      return state.user
    }
  },
  actions: {
    // login (context) {
    //   UserSetting.getUserLogin()
    //     .then((response) => {
    //       console.log('yee')
    //       context.commit('getUserData', response.data.data)
    //     })
    // },
    tesVuex (context) {
      context.commit('tesCoex')
    },
    // [CHECK_AUTH] (context) {
    //   if (TokenAuth.getToken()) {
    //     ApiService.setHeders()
    //   }
    // },
    changePassword (context, data) {
      return new Promise((resolve, reject) => {
        ApiService.post('login/pwdchange', data.playload)
          .then((r) => {
            resolve(r)
            window.sessionStorage.setItem('api_token', r.data.token)
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  },
  mutations: {
    getUserData (state, data) {
      state.user = data
    },
    tesCoex (state) {
      state.tesVuexCoex = 'mantap'
    }
  }
}
