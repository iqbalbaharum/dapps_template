<template>
  <div class="row">
     <div class="col-md-8 col-sm-12">
       <div class="q-py-md q-gutter-x-md">
        <q-btn label="whitepaper" outline color="black" :to="project.info.whitepaper" />
        <q-btn label="tokenomic" outline color="black" :to="project.info.tokenomic" />
      </div>
      <div class="text-grey-8">{{ project.description }}</div>
     </div>
      
    <div class="col-md-4 col-sm-12 q-gutter-y-md">
      <div class="q-pa-md bn-bg-gradient-1">
        <div class="text-body1 text-grey-8">Auditor Certification</div>
        <div class="text-h5 text-weight-bold text-white">RD Auditors</div>
        <div class="text-caption text-grey-8">11 April 2021</div>
      </div>
      <div class="q-pa-md bn-bg-gradient-1">
        <div class="text-body1 text-grey-8">Auditor Certification</div>
        <div class="text-h5 text-weight-bold text-white">RD Auditors</div>
        <div class="text-caption text-grey-8">11 April 2021</div>
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