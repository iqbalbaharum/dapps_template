const transaction = {
  state: {

  },
  mutations: {

  },
  actions: {
    GetExternalTransactions({ rootState }) {

      if(!rootState.contract.walletId) { return }

      return new Promise((resolve, reject) => {
        this.$repository.transaction.getWalletExternalTransactions(rootState.contract.walletId)
          .then(res => {
            if(res.data.message !== 'OK') {
              reject(res.data.message)
              return
            }

            resolve(res)
          })
          .catch(e => {
            reject(e)
          })
      })
    },

    GetBEP20TokenTransactions({ rootState }) {

      if(!rootState.contract.walletId) { return }

      return new Promise((resolve, reject) => {
        this.$repository.transaction.getBEP20TokenTransactions(rootState.contract.walletId)
          .then(async res => {
            if(res.data.message !== 'OK') {
              reject(res.data.message)
              return
            }

            const datas = res.data.result
            let assets = []
            for(const data of datas) {
              
              let value = (data.value / Math.pow(10, data.tokenDecimal))

              if(data.to === rootState.contract.walletId) { // in
                const asset = assets.filter(e => e.address === data.contractAddress)
                if(asset.length === 1) {
                  asset[0].value = asset[0].value + value
                } else {
                  assets.push({
                    address: data.contractAddress,
                    tokenName: data.tokenName,
                    tokenSymbol: data.tokenSymbol,
                    tokenDecimal: data.tokenDecimal,
                    value: value
                  })
                }
              } else if(data.from === rootState.contract.walletId) { // out
                const asset = assets.filter(e => {
                  return e.address === data.contractAddress
                })
                if(asset.length === 1) {
                  asset[0].value = asset[0].value - value
                  if(asset[0].value <= 0) {
                    assets.splice(assets.indexOf(e => e.address === data.contractAddress), 1)
                  }
                }
              }
            }

            resolve(assets)
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  }
}

export default transaction