// import something here
import Web3 from 'web3'
import Vue from 'vue'
import Vuex from 'vuex'

let web3
// let web3 = new Promise((resolve, reject) => {
//   let web3js = window.web3

//   if(typeof web3js !== 'undefined') {
//     var web3 = new Web3(web3js.currentProvider)
//     resolve({
//       injectedWeb3: web3.isConnected(),
//       web3 () {
//         return web3
//       }
//     })
//   } else {
//     reject(new Error('Unable to connect to metamask'))
//   }
// })

Vue.prototype.$web3 = web3
Vuex.Store.prototype.$web3 = web3