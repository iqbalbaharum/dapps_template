// import something here
import { Notify } from 'quasar'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  Notify.setDefaults({
    position: 'bottom-left',
    timeout: 2500,
    color: 'white',
    textColor: 'grey-10'
  })
}
