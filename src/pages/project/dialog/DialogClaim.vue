<template>
  <q-dialog v-model="isShowing" persistent>
    <q-card class="bn-card-width bn-card">
      <q-card-section class="text-h3 text-weight-light">
        Claim Token
      </q-card-section>
      <q-card-section>
        <div class="row text-weight-bold text-body1">
          <span class="col-8">Claimable Token</span><span class="col text-right text-primary">{{ amount }} RDZ</span>
        </div>
      </q-card-section>

      <q-card-actions class="justify-between">
        <q-btn flat label="cancel" v-close-popup color="negative" />
        <q-btn push color="blue" size="lg" padding="sm xl" @click="onClickClaim"><span class="text-body1 text-weight-medium">Claim</span></q-btn>
      </q-card-actions>
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
      amount: 0
    }
  },

  created() {
    this.getTotalClaimableToken()
  },

  methods: {
    onClickClaim() {
      this.$store.dispatch('BuyToken', this.amount)
        .then(res => {
          this.$q.notify({
            message: 'hello',
            position: 'top',
          })
        })
        .catch(e => {
          console.log(e)
          this.$q.notify({
            message: e,
            color: 'negative',
            position: 'top'
          })
        })
    },
    getTotalClaimableToken() {
      this.$store.dispatch('TotalClaimableToken')
        .then(res => {
          console.log(res)
          this.amount = res
        })
        .catch(e => {
          console.log(e)
          this.$q.notify({
            message: e,
            color: 'negative',
            position: 'top'
          })
        })
    }
  },

  
}
</script>