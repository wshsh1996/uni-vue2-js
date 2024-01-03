import Vuex from 'vuex'
import config from '@/store/modules/config'
import token from '@/store/modules/token'
import user from '@/store/modules/user'

export default new Vuex.Store({
  modules: {
    config,
    token,
    user
  }
})
