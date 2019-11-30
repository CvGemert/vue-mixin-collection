<template>
  <div>

    <details class="details-section">
      <summary><b style="cursor: pointer;">Show / hide the mock data structure</b></summary>
      <p>The mock data array consists of 1000 objects with the following structure:</p>
      <mock-data-section />
    </details>

    <MixinTests class="general-wrap"/>
  </div>
</template>

<script>
import MixinTests from '@/components/MixinTests.vue'
import MockDataSection from '@/components/MockDataSection'

export default {
  name: 'mixins',
  components: {
    MixinTests,
    MockDataSection
  }
}
</script>

<style lang="scss" scoped>
.details-section {
  padding: 16px;
  margin: 32px;
  border-bottom: 2px solid #999;
}
</style>
