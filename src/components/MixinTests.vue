<template>
  <div>
    <div v-for="country in countryNaming" :key="country">
      {{ country[0] }}
      <br>
      {{ country[1] }}
    </div>
  </div>
</template>

<script>
import mockDataMixin from "./mixins/mockDataMixin";
import countryNameMixin from "./mixins/countryNameMixin";

export default {
  name: "MixinTest",
  mixins: [countryNameMixin, mockDataMixin],
  data() {
    return {
      inputArray: ["AF", "US", "US", "NL", "RU", "NL", "NL"]
    }
  }
};
</script>
