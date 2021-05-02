 
const project = {
  state: {
  },
  mutations: {
  },
  actions: {
    async IsWhitelisted({ rootState }) {
      return new Promise((resolve, reject) => {
        rootState.contract.contract.methods.whitelistedAddresses(rootState.contract.walletId).call()
          .then(res => {
            resolve(res)
          })
          .catch(e => {
            reject(e)
          }) 
      })
    }
  }
}

export default project