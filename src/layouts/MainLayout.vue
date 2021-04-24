<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-py-md">

        <q-toolbar-title>
          RD AUDITORS
        </q-toolbar-title>

        <q-space />

        <header-link v-for="(menu, index) in menus['header']" :key="index" :label="menu.meta.title" :to="menu.path" />

        <q-btn class="q-ml-md" padding="xs lg" outline label="Connect Wallet" />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
      'menus'
    ])
  }
}
</script>
