 
const app = {
  state: {
    admin: false,
    menus: []
  },
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus
    }
  },
  actions: {
    // async InitializeApp({ commit }) {
    //   let res = await this.$web3()
    //   console.log(res)
    // }
    SetMenu({ commit }, menus) {
      commit('SET_MENUS', menus)
    }
  }
}

export default app