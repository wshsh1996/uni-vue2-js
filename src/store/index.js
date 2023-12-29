import Vuex from 'vuex'
import config from '@/store/modules/config'
import user from '@/store/modules/user'

export default new Vuex.Store({
  modules: {
    config,
    user
  }
})
