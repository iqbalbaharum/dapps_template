 
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
    },
    async BuyToken({ rootState }, amount) {
      new Promise((resolve, reject) => {
        rootState.contract.contract.methods.invest(amount).call()
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