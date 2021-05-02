const getters = {
  //
  menus: state => state.app.menus,
  //
  isAdmin: state => state.app.admin,
  //
  walletId: state => state.contract.walletId,
  networkId: state => state.contract.networkId
}

export default getters