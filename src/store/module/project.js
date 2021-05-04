 
const project = {
  state: {
  },
  mutations: {
  },
  actions: {
    async IsWhitelisted({ rootState }) {
      if(!rootState.contract.contract) { return }

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
      if(!rootState.contract.contract) { return }

      return new Promise((resolve, reject) => {
        rootState.contract.contract.methods.invest(amount).call()
          .then(res => {
            resolve(res)
          })
          .catch(e => {
            reject(e)
          }) 
      })
    },
    async TotalClaimableToken({ rootState }) {
      if(!rootState.contract.contract) { return }

      return new Promise((resolve, reject) => {
        rootState.contract.contract.methods.investments(rootState.contract.walletId).call()
          .then(res => resolve(res))
          .catch(e => reject(e))
      })
    },
    async GetOpeningTime({ rootState }) {
      if(!rootState.contract.contract) { return }
      console.log('here')
      return new Promise((resolve, reject) => {
        rootState.contract.contract.methods.openTime().call()
          .then(res => resolve(res))
          .catch(e => reject(e))
      })
    },
    async GetMaxInvest({ rootState }) {
      if(!rootState.contract.contract) { return }
      return new Promise((resolve, reject) => {
        rootState.contract.contract.methods.maxInvestInWei().call()
          .then(res => resolve(res))
          .catch(e => reject(e))
      })
    },
    async GetMinInvest({ rootState }) {
      if(!rootState.contract.contract) { return }
      return new Promise((resolve, reject) => {
        rootState.contract.contract.methods.minInvestInWei().call()
          .then(res => resolve(res))
          .catch(e => reject(e))
      })
    }
  }
}

export default project