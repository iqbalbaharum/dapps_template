import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';

import app from './module/app'
import contract from './module/contract'
import project from './module/project'
import transaction from './module/transaction'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app,
      contract,
      project,
      transaction
    },
    getters,
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
