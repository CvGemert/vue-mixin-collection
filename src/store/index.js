import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

// import languages (only state translations)
import en from './en/index'
import translationsEn from '../locale/en/index'

Vue.use(Vuex)

const mutations = {
  selectionMethod(state, selected) {
    state.selectedMethod = selected
  },
  resetSelection(state) {
    state.selectedMethod = ''
  },
}

export const store = new Vuex.Store({
  modules: {
    en,
  },
  state: {
    selectedMethod: '',
    curLanguage: 'en',
  },
  mutations
})

Vue.use(vuexI18n.plugin, store)

// add translations directly to the application
Vue.i18n.add('en', translationsEn)

Vue.i18n.set(store.state.curLanguage)

// registering only the current language
// would be also possible but unloading & loading would be required
// at language change --> can be added later (for now load all langauges)
// store.registerModule('de', de);
