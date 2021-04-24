<template>
  <div>
    <q-btn flat :label="label" :to="to" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
}
</script>
