<template>
  <q-page>

    <div class="bn-screen bg-main-block text-white full-width flex flex-center text-center">
      <div class="bn-block q-gutter-y-md text-black">
        <div class="text-h3">Decentralized fundraising for RD Audit Platform</div>
        <div class="text-body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio neque, porta non suscipit vel, porttitor a mauris. Pellentesque auctor diam ac est vestibulum scelerisque. Aliquam erat volutpat. Duis gravida, ante a varius euismod, arcu enim dapibus nulla, nec efficitur sem ex non urna.</div>
        <div class="q-gutter-x-md">
          <q-btn push text-color="white" size="lg" padding="sm lg" color="primary" label="View All Pools" />
          <q-btn push color="accent" size="lg" padding="sm lg" label="Buy $RDZ" />
        </div>
        <div class="text-h6 q-pt-lg">Follow Us</div>
        <div class="q-gutter-x-md">
          <q-btn label="Twitter" class="bn-bg-color-twitter" text-color="white" rounded icon="fab fa-twitter" />
          <q-btn label="Telegram" class="bn-bg-color-telegram" text-color="white" rounded icon="fab fa-telegram" />
          <q-btn label="Medium" outline rounded icon="fab fa-medium" />
        </div>
      </div>
    </div>


    <div class="bn-screen full-width flex flex-center">
      <div class="bn-block">
        <div class="items-center justify-center">
          <div class="row q-my-md q-gutter-md justify-center">
            <div class="col-md-12 q-py-md text-center">
              <div class="text-weight-bold text-h3">Featured Project</div>
            </div>
            <q-card class="bn-card col-md-5 col-xs-12 q-pa-sm bg-yellow-2" v-for="(project, index) in projects" :key="index">
              <q-card-section horizontal @click="onClickProject(project.id)" class="cursor-pointer">
                <q-card-section avatar>
                  <q-avatar size="80px">
                    <img :src="project.icon">
                  </q-avatar>
                </q-card-section>

                <q-card-section>
                  <div class="text-weight-bold text-h6">{{ project.title }}</div>
                  <div class="q-gutter-x-sm">
                    <q-badge rounded color="accent">BNB</q-badge>
                    <q-badge rounded color="accent">Binance</q-badge>
                  </div>
                </q-card-section>
              </q-card-section>

              <q-card-section class="text-grey-8">
                <div class="ellipsis-3-lines">{{ project.description }}</div>
              </q-card-section>

              <q-card-section>
                <div class="text-weight-bold text-black">Progress</div>
                <q-linear-progress size="25px" :value="project.currentVote / project.totalVote" rounded color="primary">
                  <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="`${(project.currentVote / project.totalVote * 100).toFixed(2)} %`" />
                  </div>
                </q-linear-progress>
              </q-card-section>

              <q-card-section horizontal>
                <q-card-section>
                  <div class="">
                    <div class="text-weight-bold text-black">Max</div>
                    <div class="text-h6 text-black">{{ project.maxBuy }} <span class="text-uppercase">{{ project.token }}</span></div>
                  </div>
                </q-card-section>
                <q-space />
                <q-card-section>
                  <div class="text-weight-bold text-black text-right">Links</div>
                  <div class="">
                    <q-btn icon="fab fa-telegram" flat round color="accent" :to="project.channel.telegram" />
                    <q-btn icon="fas fa-globe-asia" flat round color="accent" :to="project.channel.website" />
                    <q-btn icon="fab fa-medium" flat round color="accent" :to="project.channel.medium" />
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          icon: 'https://cdn.quasar.dev/img/avatar.png',
          title: 'Wall Street Bets IDO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus eget ultrices eget, aliquet vel risus. Aenean blandit eleifend tincidunt. Praesent viverra malesuada cursus. Morbi neque nunc, interdum et tempus vitae, sodales nec ante. Fusce lobortis eget sem vel viverra. Aliquam fermentum lectus id nulla vulputate laoreet. Nunc ac enim in nibh efficitur fringilla ac faucibus mauris. Ut posuere molestie convallis. Sed ac purus nec erat varius tempus. Suspendisse a fringilla erat. Morbi vel mauris arcu. Aenean non finibus ex. Nam a finibus nisi. Integer nec arcu vel neque vehicula vehicula id sit amet metus.',
          currentVote: 10,
          totalVote: 90,
          maxBuy: 0.19,
          token: 'BNB',
          openDate: new Date(),
          closeDate: new Date() + 1,
          channel: {
            telegram: '#',
            website: '#',
            medium: '#'
          }
        },
        {
          id: 2,
          icon: 'https://cdn.quasar.dev/img/avatar.png',
          title: 'Jumble',
          description: 'Suspendisse potenti. Vivamus vitae arcu orci. Sed in imperdiet leo, in vulputate ipsum. In id lacus malesuada, posuere risus ac, tempor augue. In hac habitasse platea dictumst.',
          currentVote: 1,
          totalVote: 1000,
          maxBuy: 0.19,
          token: 'BNB',
          openDate: new Date(),
          closeDate: new Date() + 2,
          channel: {
            telegram: '#',
            website: '#'
          }
        },
        // {
        //   icon: 'https://cdn.quasar.dev/img/avatar.png',
        //   title: 'GoSwapp',
        //   currentVote: 25,
        //   totalVote: 100,
        //   maxBuy: 0.19,
        //   token: 'BNB',
        //   openDate: new Date(),
        //   closeDate: new Date() + 2,
        //   channel: {
        //     telegram: '#',
        //     website: '#'
        //   }
        // }
      ]
    }
  },

  methods: {
    onClickProject(id) {
      this.$router.push({ path: `/project/${id}` })
    }
  }
}
</script>
