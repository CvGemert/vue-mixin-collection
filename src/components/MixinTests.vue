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
import countryNameMixin from "./mixins/countryNameMixin";

export default {
  name: "MixinTest",
  mixins: [countryNameMixin],
  data() {
    return {
      inputArray: ["AF", "US", "NL", "RU"]
    }
  }
};
</script>
