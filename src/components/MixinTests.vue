<template>
  <div>
    <b>Sub-array extractors:</b>
    <ul>
      <li>buzzword: {{buzzwordArray.slice(0, 3)}}</li>
      <li>primary: {{primaryArray.slice(0, 3)}}</li>
      <li>age: {{ageArray.slice(0, 3)}}</li>
      <li>gender: {{genderArray.slice(0, 3)}}</li>
      <li>city {{cityArray.slice(0, 3)}}:</li>
      <li>country: {{countryArray.slice(0, 3)}}</li>
      <li>timestamp: {{timestampArray.slice(0, 3)}}</li>
    </ul>
    <br>
    <p>
      <b>Country code to country name converter:</b><br><br>
      {{countryNaming.slice(0, 3)}}
    </p>
    <div class="country-table">
      <table>
        <tr>
          <th>Code</th>
          <th>Name</th>
        </tr>
        <tr v-for="country in countryNaming.slice(0, 10)" :key="country">
          <td>{{ country[0] }}</td>
          <td>{{ country[1] }}</td>
        </tr>
      </table>
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
      // inputArray: [],
    }
  },
  computed: {
    // creates a new array from the specified key-value pair in all objects
    buzzwordArray: function() {
      let inputArray = this.exampleArray.map(el => el.buzzword);
      return inputArray;
    },
    primaryArray: function() {
      let inputArray = this.exampleArray.map(el => el.primary);
      return inputArray;
    },
    ageArray: function() {
      let inputArray = this.exampleArray.map(el => el.age);
      return inputArray;
    },
    genderArray: function() {
      let inputArray = this.exampleArray.map(el => el.gender);
      return inputArray;
    },
    cityArray: function() {
      let inputArray = this.exampleArray.map(el => el.city);
      return inputArray;
    },
    countryArray: function() {
      let inputArray = this.exampleArray.map(el => el.country);
      return inputArray;
    },
    timestampArray: function() {
      let inputArray = this.exampleArray.map(el => el.timestamp);
      return inputArray;
    },
  },
};
</script>

<style>
.country-table table {
  table-layout: fixed;
  width: 256px;
}

.country-table th {
  text-align: initial;
}

.country-table td {
  border-top: 1px solid #999;
}
</style>
