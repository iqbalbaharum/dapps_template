// import something here
import Web3 from 'web3'
import Vue from 'vue'
import Vuex from 'vuex'
import sc from '../abis/sc.json'

const web3 = new Web3(window.ethereum)
const contract = new web3.eth.Contract(sc.abi, '0x585EE93B8442FcdBABD27B3AB33eA3366Aaf83f6')

Vue.prototype.$web3 = web3
Vuex.Store.prototype.$web3 = web3

Vue.prototype.$contract = contract
Vuex.Store.prototype.$contract = contract