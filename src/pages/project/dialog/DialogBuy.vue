<template>
  <q-dialog v-model="isShowing" persistent>
    <q-card class="bn-card-width bn-card">
      <q-card-section class="text-h3 text-weight-light">
        Buy Token
      </q-card-section>
      <q-card-section>
        <div class="row text-weight-bold text-body1">
          <span class="col-8">Your Balance</span><span class="col text-right text-primary">{{ getFormattedBalance }} BNB</span>
        </div>
        <div class="row text-body1 text-weight-bold">
          <span class="col-8">Price Per Token</span><span class="col text-right text-primary">0.00029 BNB</span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-gutter-x-md q-mb-md">
          <q-btn class="col" push size="lg" label="10%"></q-btn>
          <q-btn class="col" push size="lg" label="25%"></q-btn>
          <q-btn class="col" push size="lg" color="primary" label="50%"></q-btn>
          <q-btn class="col" push size="lg" color="primary" label="75%"></q-btn>
          <q-btn class="col" push size="lg" color="positive" label="100%"></q-btn>
        </div>
        <q-input outlined type="number" v-model.number="amount" style="font-size:30px;" />
      </q-card-section>

      <q-card-actions class="justify-between">
        <q-btn flat label="cancel" v-close-popup color="negative" />
        <q-btn push color="accent" size="lg" padding="sm xl" @click="onClickBuy"><span class="text-body1 text-weight-medium">Buy Token</span></q-btn>
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
    ...mapGetters([
      'balance'
    ]),
    getFormattedBalance() {
      return (this.$store.getters.balance/1000000000000000000)
    },
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

  methods: {
    onClickBuy() {

    }
  },

  
}
</script>