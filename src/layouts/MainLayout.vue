<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
        
        <q-btn to="/" flat dense>
          <q-avatar size="80px">
            <q-img src="~assets/main/logo.jpeg" />
          </q-avatar>
        </q-btn>

        <q-space />

        <header-link v-for="(menu, index) in menus['header']" :key="index" :label="menu.meta.title" :to="menu.path" />

        <q-btn class="q-ml-md sign-in bn-button" :class="{ 'bg-positive': walletId, 'bg-accent': !walletId }" color="accent" padding="xs lg" @click="onClickConnect">
          <span class="ellipsis q-px-md text-weight-bold">{{ getWalletText }}</span>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer-layout />
  </q-layout>
</template>

<script>
import HeaderLink from 'src/components/HeaderLink'
import { mapGetters } from 'vuex'
import FooterLayout from './Footer'

export default {
  components: { HeaderLink, FooterLayout },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'menus',
      'walletId',
      'networkId'
    ]),
    getWalletText() {
      let text = 'Connect Wallet'
      return this.walletId && this.networkId !== 0 ? this.walletId : text
    }
  },

  created() {
    
  },

  methods: {
    async onClickConnect() {
      if(!this.walletId) {
        const walletId = await this.$store.dispatch('ConnectWeb3')
        this.$q.notify({
          type: 'positive',
          position: 'top',
          message: `Succesfully login using ${walletId}`
        })
      } else {
        await this.$store.dispatch('DisconnectWeb3')
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.sign-in
  max-width: 200px
</style>