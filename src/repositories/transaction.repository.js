
import datasource from './../datasources/bscscan'

export default class TransactionRepository {
  constructor() {}

  async getWalletExternalTransactions(address) {
    return await datasource({
      method: 'get',
      params: {
        module: 'account',
        action: 'txlist',
        startblock: 1,
        endblock: 99999999,
        address: address
      }
    })
  }

  async getBEP20TokenTransactions(address) {
    return await datasource({
      method: 'get',
      params: {
        module: 'account',
        action: 'tokentx',
        address: address,
        sort: 'asc'
      }
    })
  }

}