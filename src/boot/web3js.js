// import something here
import Web3 from 'web3'
import Vue from 'vue'
import Vuex from 'vuex'

let web3 = new Promise((resolve, reject) => {
  let web3js = window.ethereum

  if(typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider)
    resolve({
      web3 () {
        return web3
      }
    })
  } else {
    reject(new Error('Unable to connect to metamask'))
  }
})
.then(result => {
  return new Promise(function (resolve, reject) {
    // Retrieve network ID
    console.log(result.web3().eth)
    result.web3().version.getId((err, networkId) => {
      if (err) {
        // If we can't find a networkId keep result the same and reject the promise
        reject(new Error('Unable to retrieve network ID'))
        } else {
        // Assign the networkId property to our result and resolve promise
        result = Object.assign({}, result, {networkId})
        resolve(result)
      }
    })
  })
})
.then(result => {
  return new Promise(function (resolve, reject) {
    // Retrieve coinbase
    result.web3().eth.getCoinbase((err, coinbase) => {
      if (err) {
        reject(new Error('Unable to retrieve coinbase'))
      } else {
        result = Object.assign({}, result, { coinbase })
        resolve(result)
      }
    })
  })
})
.then(result => {
  return new Promise(function (resolve, reject) {
    // Retrieve balance for coinbase
    result.web3().eth.getBalance(result.coinbase, (err, balance) => {
      if (err) {
        reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
      } else {
        result = Object.assign({}, result, { balance })
        resolve(result)
      }
    })
  })
})

Vue.prototype.$web3 = web3
Vuex.Store.prototype.$web3 = web3