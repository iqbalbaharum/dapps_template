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

        <q-btn push class="q-ml-md sign-in" :class="{ 'bg-positive': walletId, 'bg-accent': !walletId }" color="accent" padding="xs lg" @click="onClickConnect">
          <span class="ellipsis">{{ getWalletText }}</span>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
    </q-footer>
  </q-layout>
</template>

<script>
import HeaderLink from 'src/components/HeaderLink'
import { mapGetters } from 'vuex'

export default {
  components: { HeaderLink },

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
    this.$store.dispatch('InitContract')
  },

  methods: {
    onClickConnect() {
      if(!this.walletId) {
        this.$store.dispatch('ConnectWeb3')
      } else {
        this.$store.dispatch('DisconnectWeb3')
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.sign-in
  max-width: 200px
</style>