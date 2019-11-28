<template>
  <div class="general-wrap">
    <div class="section-wrap">
      <h2>Simple example to demonstrate how mixins work:</h2>
      <p>(Mixin name: clickMixin)</p>
      <button v-on:click="clicked('you just clicked on button 1')">Button 1</button>
    </div>

    <div class="section-wrap">
      <h2>Country code to country name mixin:</h2>
      <p>(Mixin name: countryNameMixin)</p>
      <div v-for="example in countryNaming" :key="example">
        <!-- <span v-if="Object.keys(countries).includes(example)"> -->
          <!-- {{countries}} -->
          <!-- {{countryNaming}} -->
          {{example[1]}}
        <!-- </span> -->

        <!-- {{(Object.keys(countries).includes(example))}} -->
      </div>
    </div>
  </div>
</template>

<script>
import clickMixin from "./mixins/clickMixin";
import countryNameMixin from "./mixins/countryNameMixin";

export default {
  name: "Test",
  mixins: [clickMixin, countryNameMixin],
  data() {
    return {
      exampleArray: ["AF", "US", "NL", "RU"]
    }
  }
};
</script>

<style scoped lang="scss">

</style>
