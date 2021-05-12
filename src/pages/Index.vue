<template>
  <q-page>

    <div class="bn-screen text-white full-width flex flex-center text-center">
      <div class="bn-block q-gutter-y-md text-black">
        <div class="text-h3 text-primary text-weight-bold">The epicenter of all things crypto</div>
        <div class="text-body1">Welcome to the RD Familia, where you will learn everything crypto, finding, vetting, investing and supporting crypto projects.</div>
        <div class="q-gutter-x-md">
          <q-btn text-color="white" size="md" padding="sm lg" color="primary" class="bn-button" to="/pools"><span class="text-body1">View All Pools</span></q-btn>
        </div>
        <div>
          <q-img src="~assets/main/main-block.png" style="width: 523px;height: 308px;"/>
        </div>
      </div>
    </div>


    <div class="bg-alt-block">
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
          title: 'RD Token',
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
        }
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
