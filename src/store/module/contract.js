import Web3 from 'web3'
import sc from './../../../src/abis/sc.json'

const contract = {
  state: {
    walletId: '',
    networkId: 0,
    coinbase: null,
    balance: 0,
  },
  mutations: {
    SET_WALLETID(state, id) {
      state.walletId = id
    },
    SET_NETWORKID(state, id) {
      state.networkId = id
    },
    SET_BALANCE(state, value) {
      state.balance = value
    },
  },
  actions: {
    async  ConnectWeb3 ({ commit, dispatch, state }) {
      return new Promise(async (resolve, reject) => {
        if(this.$web3) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          if(!accounts.length) {
            reject(new Error('Unable to connect to metamask'))
          }

          if(accounts.length > 0) {
            this.dispatch('GetWalletDetail', accounts[0])
          }

          dispatch('OnAccountChangeEvent')

          const networkId = await this.$web3.eth.net.getId()
          const networkData = sc.networks[networkId.toString()]

          if(networkData) {
            commit('SET_NETWORKID', networkId)
          } else {
            commit('SET_NETWORKID', 0)
          }

          if(networkId === 0) { return }

          resolve(accounts[0])

        } else {
          reject(new Error('Unable to connect to metamask'))
        }
      })
    },
    DisconnectWeb3 ({ commit }) {
      commit('SET_NETWORKID', 0)
      commit('SET_WALLETID', '')
      commit('SET_BALANCE', 0)
    },
    async GetWalletDetail({ commit, state }, account) {
      commit('SET_WALLETID', account)
      let weiBalance = await this.$web3.eth.getBalance(account)
      commit('SET_BALANCE', await this.$web3.utils.fromWei(weiBalance))
    },
    OnAccountChangeEvent({ dispatch }) {
      if(window.ethereum === 'undefined') {
        return
      }

      window.ethereum.on('accountsChanged', (accounts) => {
        if(accounts.length > 0) {
          dispatch('GetWalletDetail', accounts[0])
        }
      })
    }
  }
}

export default contract