<template>
  <div>
    <div class="text-h4 text-weight-bold q-py-sm">Pools Detail</div>
    <div class="row q-pa-md q-gutter-x-lg">
      <div class="col-md-5 col-sm-12 q-gutter-y-lg">
        <div>
          <q-card>
            <q-list separator>
              <q-item class="text-weight-bold text-h6 text-primary">Pools Information</q-item>
              <q-item>
                <q-item-section class="text-weight-bold">Token Distribution</q-item-section>
                <q-item-section avatar>
                  {{ 'Sat May 08 2021 19:31:10 GMT+0800' }}
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-weight-bold">Min. Allocation</q-item-section>
                <q-item-section avatar>
                  No. minimum
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-weight-bold">Max. Allocation</q-item-section>
                <q-item-section avatar>
                  0.09 ETH
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-weight-bold">Min. Swap Level</q-item-section>
                <q-item-section avatar>
                  0.09 ETH
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-weight-bold">Access Type</q-item-section>
                <q-item-section avatar>
                  <span class="text-uppercase">Private</span>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>

        <div>
          <q-card>
            <q-list separator class="text-grey-10">
              <q-item class="text-weight-bold text-h6 text-primary">Token</q-item>
              <q-item class="justify-between">
                <span class="text-weight-bold">Name</span>
                <span>Couldn't fetch data</span>
              </q-item>
              <q-item class="justify-between">
                <span class="text-weight-bold">Symbol</span>
                <span>Couldn't fetch data</span>
              </q-item>
              <q-item class="justify-between">
                <span class="text-weight-bold">Decimals</span>
                <span>Couldn't fetch data</span>
              </q-item>
              <q-item class="justify-between">
                <span class="text-weight-bold">Address</span>
                <span>Couldn't fetch data</span>
              </q-item>
              <q-item class="justify-between">
                <span class="text-weight-bold">Total Supply</span>
                <span>Couldn't fetch data</span>
              </q-item>
            </q-list>
          </q-card>
        </div>

      </div>
        
      <div class="col-md-5 col-sm-12 q-gutter-y-md">
        <q-card class="bg-auditor-block q-pa-md q-pl-xl">
          <q-card-item>
            <div>Auditor Certification</div>
            <div class="text-h5 text-weight-bold text-primary">Rug Detective</div>
            <div class="text-caption">April 14th 2021</div>
          </q-card-item>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
}
</script>