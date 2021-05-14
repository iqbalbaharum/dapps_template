<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-black text-white">
        
        <span class="text-weight-bold text-h6">VISUALIZE</span>

        <q-space />

        <header-link v-for="(menu, index) in menus['header']" :key="index" :label="menu.meta.title" :to="menu.path" />
        
        <connect-btn />
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-black text-white">
      <router-view />
    </q-page-container>

    <footer-layout />
  </q-layout>
</template>

<script>
import HeaderLink from 'src/components/HeaderLink'
import ConnectBtn from 'src/components/ConnectBtn'
import { mapGetters } from 'vuex'
import FooterLayout from './Footer'

export default {
  components: { HeaderLink, FooterLayout, ConnectBtn },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'menus',
      'networkId',
    ]),
    getWalletText() {
      let text = 'Connect Wallet'
      return this.walletId && this.networkId !== 0 ? this.walletId : text
    }
  },

  created() {
    
  },
}
</script>

<style lang="sass" scoped>
.sign-in
  max-width: 200px
</style>