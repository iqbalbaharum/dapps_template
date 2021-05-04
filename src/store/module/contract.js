import Web3 from 'web3'
import sc from './../../../src/abis/sc.json'

const contract = {
  state: {
    instance: () => ({
      web3: {},
    }),
    contract: () => ({}),
    walletId: '',
    networkId: 0,
    coinbase: null,
    balance: 0,
  },
  mutations: {
    SET_WEB3_INSTANCE(state, instance) {
      state.instance = instance
    },
    SET_WALLETID(state, id) {
      state.walletId = id
    },
    SET_NETWORKID(state, id) {
      state.networkId = id
    },
    SET_BALANCE(state, value) {
      state.balance = value
    },
    SET_CONTRACT(state, c) {
      state.contract = c
    }
  },
  actions: {
    InitContract({ commit }) {
      let web3 = new Web3(window.ethereum)
      commit('SET_WEB3_INSTANCE', () => web3)   
      
      const c = new web3.eth.Contract(sc.abi, '0x585EE93B8442FcdBABD27B3AB33eA3366Aaf83f6')
      commit('SET_CONTRACT', c)
    },
    ConnectWeb3 ({ commit, dispatch, state }) {
      return new Promise(async (resolve, reject) => {
        if(typeof window.ethereum !== 'undefined') {
          
          let accounts = await state.instance().eth.getAccounts()

          if(accounts.length > 0) {
            this.dispatch('GetWalletDetail', accounts[0])
          }

          dispatch('OnAccountChangeEvent')

          const networkId = await state.instance().eth.net.getId()
          const networkData = sc.networks[networkId.toString()]

          if(networkData) {
            commit('SET_NETWORKID', networkId)
          } else {
            commit('SET_NETWORKID', 0)
          }

          if(networkId === 0) { return }

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
      commit('SET_BALANCE', await state.instance().eth.getBalance(account))
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