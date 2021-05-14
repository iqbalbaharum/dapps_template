<template>
  <q-page>
    <div class="row justify-center q-pa-xl">
      <div class="col-7">
        <div class="q-mb-lg">
          <p class="text-h3 text-weight-bold">Dashboard</p>
        </div>
        <div class="q-py-lg">
          <div class="text-grey-6 text-h6 text-weight-bold">Net worth</div>
          <div class="text-white text-h3 text-weight-bold">$250.49</div>
        </div>
        <div class="q-py-lg row justify-between text-h5 text-weight-bold">
          <div class=""><q-icon name="fas fa-wallet" class="on-left"></q-icon> Wallet</div>
          <div class="">$65.00</div>
        </div>
        <div>
          <q-table
            :columns="columns"
            :data="data"
            dark
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      data: [],
      columns: [
        { name: 'asset', align: 'left', label: 'Asset', field: row => `${row.tokenName} (${row.tokenSymbol})`, sortable: true },
        { name: 'value', align: 'right', label: 'Balance', field: 'value', sortable: true },
        // { name: 'price', align: 'center', label: 'Price', field: '', sortable: true },
        // { name: 'value', align: 'center', label: 'Value', field: '', sortable: true },
      ]
    }
  },

  computed: {
    ...mapGetters([
      'walletId'
    ])
  },

  watch: {
    'walletId' (newVal, oldVal) {
      if(newVal) {
        this.getTransactions()
      }
    }
  },

  created() {
    this.getTransactions()
  },

  methods: {
    getTransactions() {
      this.data = []
      this.$store.dispatch('GetBEP20TokenTransactions')
        .then(res => {
          this.data = res
        })
    }
  },
}
</script>