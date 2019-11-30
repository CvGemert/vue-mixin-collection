<template>
  <div>
    <b>Sub-array extractors:</b>
    <ul>
      <li><b>buzzword:</b> {{buzzwordArray.slice(0, 3)}}</li>
      <li><b>primary:</b> {{primaryArray.slice(0, 3)}}</li>
      <li><b>age:</b> {{ageArray.slice(0, 3)}}</li>
      <li><b>gender:</b> {{genderArray.slice(0, 3)}}</li>
      <li><b>city:</b> {{cityArray.slice(0, 3)}}:</li>
      <li><b>country:</b> {{countryArray.slice(0, 3)}}</li>
      <li><b>timestamp:</b> {{timestampArray.slice(0, 3)}}</li>
    </ul>
    <br>
    
    <p>
      <b>Sort by highest frequency:</b><br>
      (Buzzwords)
       <ol>
        <li v-for="buzzword in sortbyFrequencyBuzzword.slice(0, 10)" :key="buzzword">
          {{buzzword}}
        </li>
      </ol>
    </p><br>
    
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
    sortbyFrequencyBuzzword: function() {
      let inputArray = this.exampleArray.map(el => el.buzzword);
      let counts = inputArray.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      let top10 = Object.keys(counts).sort((c, d) => counts[d] - counts[c]);
      return top10;
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
