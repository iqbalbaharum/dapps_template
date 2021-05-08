<template>
  <q-page>
    <div class="q-py-md bg-main-block">
      <div class="bn-block items-center justify-center">
        <div class="row q-my-md justify-center q-py-md">
          <div class="col-md-6 q-pr-xl">
            
            <div class="text-h4 text-weight-bold">{{ project.title }}</div>
            <div class="q-gutter-x-sm">
              <q-badge rounded color="positive">Open</q-badge>
              <q-badge rounded color="accent">BNB</q-badge>
              <q-badge rounded color="accent">Binance</q-badge>
            </div>

            <div class="q-py-sm">
              <q-btn icon="fab fa-telegram" flat round class="bn-text-color-telegram" :to="project.channel.telegram" />
              <q-btn icon="fab fa-twitter" flat round class="bn-text-color-twitter" :to="project.channel.twitter" />
              <q-btn icon="fas fa-globe-asia" flat round :to="project.channel.website" />
              <q-btn icon="fab fa-medium" flat round color="black" :to="project.channel.medium" />
            </div>

            <div class="text-grey-8 ellipsis-3-lines">
              {{ project.description }}
            </div>
            <span class="text-blue-6 cursor-pointer" @click="onHandleClickMore">More...</span>

            <q-separator insert class="q-my-md"/>

            <div class="row">
              <div class="">
                <div class="text-weight-bold text-black">Price Per RDZ Token</div>
                <div class="text-h4 text-primary text-weight-bold">{{ project.token.price }} BNB</div>
              </div>
              <q-space />
              <div class="">
                <div class="text-weight-bold text-black">Your Max Approved Amount</div>
                <div class="text-h4 text-primary text-weight-bold">{{ project.token.max }} BUSD</div>
              </div>
            </div>
            <div class="q-py-md row  q-gutter-x-md bg-blue-1 justify-center q-my-md" v-if="isWhitelist">
              <q-btn push color="accent" size="lg" padding="sm xl" @click="onClickBuy"><span class="text-body1 text-weight-medium">Buy Token</span></q-btn>
              <q-btn push color="blue-5" size="lg" padding="sm xl" @click="onClickClaim"><span class="text-body1 text-weight-medium">Claim Token</span></q-btn>
            </div>
            <div class="q-py-md row  q-gutter-x-md bg-blue-1 justify-center q-my-md text-blue-8 text-weight-bold" v-else>
              <div>You're not whitelisted to bid on this project</div>
            </div>
          </div>
          <div class="col-md-6">
            <q-card class="bn-card q-pa-md">

              <q-card-section class="q-gutter-y-md">
                <div class="text-weight-bold text-black">Open in</div>
                <div class="text-h4">
                  <flip-countdown v-if="project.openDate" :deadline="project.openDate" @@timeElapsed="onTimeElapsed" />
                </div>
              </q-card-section>

              <!-- <q-card-section class="q-gutter-y-md">
                <div class="text-weight-bold text-black">Allocation round closed in</div>
                <div class="text-h4">
                  <flip-countdown :date-line="project.start" @@timeElapsed="onTimeElapsed" />
                </div>
              </q-card-section> -->

              <q-card-section horizontal>
                <q-card-section>
                  <div class="">
                    <div class="text-weight-bold text-black">Sold</div>
                    <div class="text-h6 text-grey-8">{{ project.token.sold }} BNB</div>
                  </div>
                </q-card-section>
                <q-space />
                <q-card-section>
                  <div class="">
                    <div class="text-weight-bold text-black">Remaining Allocation</div>
                    <div class="text-h6 text-grey-8">{{ project.token.left }} BNB</div>
                  </div>
                </q-card-section>
              </q-card-section>

              <q-card-section class="q-gutter-y-sm">
                <q-linear-progress size="55px" :value="project.token.sold / project.token.total" rounded color="primary">
                  <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="`${project.token.sold} BNB`" />
                  </div>
                </q-linear-progress>
                <div class="text-caption text-right">{{ project.token.sold }} / {{ project.token.total }} BNB</div>
              </q-card-section>

            </q-card>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-md bg-alt-block">
      <div class="bn-block items-center justify-center">
        <div class="row q-my-md q-py-md">
          <q-tabs
            v-model="currentTab"
            class="text-grey-8"
            align="left"
          >
            <q-tab name="pool" label="Pool Details" />
            <q-tab name="about" label="About the Project" />
            <q-tab name="allocation" label="Your Allocations" />
          </q-tabs>

          <q-tab-panels v-model="currentTab" animated id="panel" class="panel">
            <q-tab-panel name="pool">
              <tab-pool :project="project" />
            </q-tab-panel>
            <q-tab-panel name="about">
              <tab-about :project="project" />
            </q-tab-panel>
            <q-tab-panel name="allocation">
              <tab-allocation :project="project" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>

    <dialog-buy v-model="dialog.buy.show" />
    <dialog-claim v-model="dialog.claim.show" />
  </q-page>
</template>

<script>
import DialogBuy from './dialog/DialogBuy'
import DialogClaim from './dialog/DialogClaim'
import FlipCountdown from "vue2-flip-countdown";
import TabAbout from './tab/About'
import TabPool from './tab/Pool'
import TabAllocation from './tab/Allocation'
import { mapGetters } from 'vuex'

import { date, scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  components: {
    FlipCountdown, TabAbout, DialogBuy, DialogClaim,
    TabPool, TabAllocation
  },
  data() {
    return {
      currentTab: 'detail',
      active: false,
      isWhitelist: false,
      dialog: {
        buy: {
          show: false
        },
        claim : {
          show: false
        }
      },
      project: {
        icon: 'https://cdn.quasar.dev/img/avatar.png',
        title: 'Wall Street Bets IDO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus eget ultrices eget, aliquet vel risus. Aenean blandit eleifend tincidunt. Praesent viverra malesuada cursus. Morbi neque nunc, interdum et tempus vitae, sodales nec ante.',
        currentVote: 10,
        totalVote: 90,
        maxBuy: 0.19,
        token: 'BNB',
        openDate: null,
        closeDate: new Date() + 1,
        channel: {
          telegram: '#',
          website: '#',
          medium: '#'
        },
        info: {
          tokenomic: '#',
          whitepaper: '#',
        },
        token: {
          total: 0,
          left: 0,
          sold: 0,
          price: 0,
          max: 0
        }
      },
    }
  },

  computed: {
    ...mapGetters([
      'walletId'
    ])
  },

  created() {
    if(this.walletId) {
      this.isUserWhitelisted()
    }

    this.getOpeningTime()
    this.getMaxPurchase()
    this.getPerTokenPrice()
    this.getTotalTokenForSale()
    this.getTotalUnsoldToken()
    this.getTotalSoldToken()
  },

  watch: {
    walletId(newValue, oldValue) {
      if(newValue) {
        this.isUserWhitelisted()
      } else {
        this.isWhitelist = false
      }
    }
  },

  methods: {
    onTimeElapsed() {
      this.active = true
    },
    onHandleClickMore() {
      this.currentTab = 'about'
      this.scrollToElement('panel')
    },
    scrollToElement(el) {
      const target = document.getElementById(el)
      target.scrollIntoView({block: "end"});
    },
    async isUserWhitelisted() {
      this.isWhitelist = await this.$store.dispatch('IsWhitelisted')
    },
    onClickBuy() {
      this.dialog.buy.show = true
    },
    onClickClaim() {
      this.dialog.claim.show = true
    },
    getOpeningTime() {
      this.$store.dispatch('GetOpeningTime')
        .then(timestamp => {
          let openingHour = new Date(timestamp * 1000);
          this.project.openDate = date.formatDate(openingHour, 'YYYY-MM-DD HH:mm:ss');
        })
    },
    getTotalTokenForSale() {
      this.$store.dispatch('GetTotalTokenForSale')
        .then(amount => {
          this.project.token.total = amount
        })
    },
    async getMaxPurchase() {
      this.$store.dispatch('GetMaxInvest')
        .then(amount => {
          this.project.token.max = amount
        })
    },
    getTotalUnsoldToken() {
      this.$store.dispatch('GetUnsoldToken')
        .then(amount => {
          this.project.token.left = amount
        })
    },
    getTotalSoldToken() {
      this.$store.dispatch('GetSoldToken')
        .then(amount => {
          this.project.token.sold = amount
        })
    },
    getPerTokenPrice() {
      this.$store.dispatch('GetPerTokenPrice')
        .then(amount => {
          this.project.token.price = amount
        })
    }
  }
}
</script>