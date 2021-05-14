<template>
  <q-dialog v-model="isShowing">
    <q-card class="q-pa-md text-center" style="min-width: 350px">
      <div class="text-weight-bold text-h6">Login with your wallet</div>
      <div class="text-weight-body2">Please select your provider</div>
      <q-list class="q-gutter-y-sm q-mt-md">
        <q-item clickable class="borders q-border justify-center shadow-1" @click="onClickConnectMetamask">
          <q-img src="~assets/logos/metamask-logo.svg" style="width: 50%; height: auto" />
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters([
      'walletId'
    ]),
    isShowing: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value
      }
    }
  },

  data() {
    return {
      
    }
  },

  methods: {
    async onClickConnectMetamask() {
      if(!this.walletId) {
        const walletId = await this.$store.dispatch('ConnectWeb3')
         this.$q.notify({
            icon: 'fas fa-info-circle',
            message: `Wallet Update`,
            caption: `Connected to ${walletId}`
        })
        this.$emit('input', false)
      }
    },
  },
}
</script>