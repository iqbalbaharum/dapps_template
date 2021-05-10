 
const project = {
  state: {
  },
  mutations: {
  },
  actions: {
    async IsWhitelisted({ rootState }) {
      if(!this.$contract) { return }

      return new Promise((resolve, reject) => {
        this.$contract.methods.whitelistedAddresses(rootState.contract.walletId).call()
          .then(res => {
            resolve(res)
          })
          .catch(e => {
            reject(e)
          }) 
      })
    },
    async BuyToken({ rootState }, amount) {
      if(!this.$contract) { return }

      return new Promise((resolve, reject) => {
        const amountToSend = this.$web3.utils.toWei(amount.toString())
        this.$contract.methods.invest().send({
          from: rootState.contract.walletId,
          value: amountToSend,
          gas: 1500000,
        })
          .then(res => {
            console.log(res)
            resolve(res)
          })
          .catch(e => {
            reject(e)
          }) 
      })
    },
    async ClaimToken({ rootState }) {
      if(!this.$contract) { return }

      return new Promise((resolve, reject) => {
        this.$contract.methods.claimTokens().send({
          from: rootState.contract.walletId,
          gas: 150000,
        })
          .then(res => {
            resolve(res)
          })
          .catch(e => {
            reject(e)
          }) 
      })
    },
    async HasUserClaimed({ rootState }) {
      if(!this.$contract) { return }

      return new Promise((resolve, reject) => {
        this.$contract.methods.claimed(rootState.contract.walletId).call()
          .then(hasClaim => {
            resolve(hasClaim)
          })
          .catch(e => reject(e))
      })
    },
    async TotalClaimableToken({ rootState }) {
      if(!this.$contract) { return }

      return new Promise((resolve, reject) => {
        this.$contract.methods.investments(rootState.contract.walletId).call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
    async GetOpeningTime({ rootState }) {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.openTime().call()
          .then(res => resolve(res))
          .catch(e => reject(e))
      })
    },
    async GetMaxInvest({ rootState }) {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.maxInvestInWei().call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
    async GetMinInvest({ rootState }) {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.minInvestInWei().call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
    async GetTotalTokenForSale() {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.totalTokens().call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
    async GetUnsoldToken() {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.tokensLeft().call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
    async GetSoldToken() {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.totalCollectedWei().call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
    async GetPerTokenPrice() {
      if(!this.$contract) { return }
      return new Promise((resolve, reject) => {
        this.$contract.methods.tokenPriceInWei().call()
          .then(res => {
            let amount = this.$web3.utils.fromWei(res)
            resolve(amount)
          })
          .catch(e => reject(e))
      })
    },
  }
}

export default project