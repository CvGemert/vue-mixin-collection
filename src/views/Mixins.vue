<template>
  <div class="mixins-page-wrap">

    <input type="checkbox" id="array-info-checkbox">

    <div class="details-section">
      <h3>Data used:</h3>
      <p>The data array used in this project consists of 1000 objects, each containing 7 key-value pairs.<p>
      <label for="array-info-checkbox" class="array-info-toggle">
        <b>More info <i class="material-icons">arrow_drop_down</i></b>
      </label>

      <div class="array-info-wrapper">
        <mock-data-section />
      </div>
    </div>

    <MixinTests/>
    
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
.mixins-page-wrap {
  padding: 16px;
  margin: 8px 32px;
}

.details-section {
  border-bottom: 2px solid #bbb;
  margin-bottom: 16px;
}

h3 { 
  margin-top: 0;
  background: #222;
  width: fit-content;
  padding: 8px 16px;
  color: #fff;
  border-radius: 2px;
}

.array-info-toggle {
  cursor: pointer;
}

.array-info-toggle i {
  transition-duration: .3s;
  font-size: 16px;
}

#array-info-checkbox:checked ~ .details-section .array-info-toggle i {
  transform: rotate(180deg);
  transition-duration: .3s;
}

.array-info-wrapper {
  height: 0;
  overflow: hidden;
  transition-duration: .3s;
}

#array-info-checkbox { 
  display: none;
}
#array-info-checkbox:checked ~ .details-section .array-info-wrapper {
  height: 500px;
  transition-duration: .3s;
}
</style>
