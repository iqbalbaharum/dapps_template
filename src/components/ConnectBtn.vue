<template>
  <div>
    <q-btn v-if="!walletId" outline color="white" padding="xs lg" @click="onClickConnect">
      Connect
    </q-btn>
    <q-btn v-else color="grey-9" padding="xs lg">
      <span class="float-left">{{ `${parseFloat(balance).toFixed(2)} BNB` }}</span><span class="on-right float-right ellipsis text-weight-bold" style="width: 100px;">{{ walletId }}</span>
      <q-menu
        fit
        transition-show="jump-down"
        transition-hide="jump-up"
        :offset="[0, 2]">
        <q-list dense>
          <q-item clickable v-close-popup>
            <q-item-section>Change Wallet</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section class="text-red" @click="onClickDisconnect">Disconnect</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <wallet-dialog v-model="dialog.connect.show" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WalletDialog from './Dialog/WalletDialog'

export default {

  data() {
    return {
      dialog: {
        connect: {
          show: false
        }
      }
    }
  },

  components: { WalletDialog },
  
  computed: {
    ...mapGetters([
      'walletId',
      'balance'
    ]),
  },

  methods: {
    async onClickConnect() {
      if(!this.walletId) {
        this.dialog.connect.show = true
      }
    },
    async onClickDisconnect() {
      await this.$store.dispatch('DisconnectWeb3')
      this.$q.notify({
        icon: 'fas fa-info-circle',
        message: `Wallet Update`,
        caption: `Disconnected from wallet`
      })
    }
  },
}
</script>