import { createStore } from 'vuex'

import { meals } from './modules/meals'

const store = createStore({
  modules: { meals }
})

export default store