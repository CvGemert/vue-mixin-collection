<template>
  <div>
    <br>
    <b>Sub-array extractors:</b>
    <ul>
      Split into seperate arrays:
      <li><b>buzzwordArray:</b> {{buzzwordArray.slice(0, 3)}}</li>
      <li><b>primaryArray:</b> {{primaryArray.slice(0, 3)}}</li>
      <li><b>ageArray:</b> {{ageArray.slice(0, 3)}}</li>
      <li><b>genderArray:</b> {{genderArray.slice(0, 3)}}</li>
      <li><b>cityArray:</b> {{cityArray.slice(0, 3)}}:</li>
      <li><b>countryArray:</b> {{countryArray.slice(0, 3)}}</li>
      <li><b>timestampArray:</b> {{timestampArray.slice(0, 3)}}</li>
    </ul>
    <ul>
      In 1 single array:
      <li><b>categorizedArray[0]:</b> {{categorizedArray[0].slice(0, 3)}}</li>
      <li><b>categorizedArray[1]:</b> {{categorizedArray[1].slice(0, 3)}}</li>
      <li><b>categorizedArray[2]:</b> {{categorizedArray[2].slice(0, 3)}}</li>
      <li><b>categorizedArray[3]:</b> {{categorizedArray[3].slice(0, 3)}}</li>
      <li><b>categorizedArray[4]:</b> {{categorizedArray[4].slice(0, 3)}}</li>
      <li><b>categorizedArray[5]:</b> {{categorizedArray[5].slice(0, 3)}}</li>
      <li><b>categorizedArray[6]:</b> {{categorizedArray[6].slice(0, 3)}}</li>
    </ul>
    <br>
    
    <b>Sort by highest frequency:</b><br>
      <div class="frequency-section">
        <span>Buzzwords <ol><li v-for="buzzword in sortbyFrequencyBuzzword.slice(0, 10)" :key="buzzword">{{buzzword}}</li></ol></span>
        <span>Age <ol><li v-for="age in sortbyFrequencyAge.slice(0, 10)" :key="age">{{age}}</li></ol></span>
        <span>Gender <ol><li v-for="gender in sortbyFrequencyGender.slice(0, 10)" :key="gender">{{gender}}</li></ol></span>
        <span>City <ol><li v-for="city in sortbyFrequencyCity.slice(0, 10)" :key="city">{{city}}</li></ol></span>
        <span>Country <ol><li v-for="country in countryNamingFrequency.slice(0, 10)" :key="country">{{country[1]}}</li></ol></span>
    </div><br>
    
    <p>
      <b>Country code to country name converter:</b><br><br>
    </p>
    <div class="country-table">
      <span>
        Ordered by frequency
        <table>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
          <tr v-for="country in countryNamingFrequency.slice(0, 10)" :key="country">
            <td>{{ country[0] }}</td>
            <td>{{ country[1] }}</td>
          </tr>
        </table>
      </span>

      <span>
        Same order as input-array
        <table>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
          <tr v-for="country in countryNamingUnsorted.slice(0, 10)" :key="country">
            <td>{{ country[0] }}</td>
            <td>{{ country[1] }}</td>
          </tr>
        </table>
      </span>
      
    </div>
  </div>
</template>

<script>
import mockDataMixin from "./mixins/mockDataMixin";
import countryNameMixin from "./mixins/countryNameMixin";
import extractSubArrayMixin from "./mixins/extractSubArrayMixin";
import sortbyFrequencyMixin from "./mixins/sortbyFrequencyMixin";

export default {
  name: "MixinTest",
  mixins: [
    mockDataMixin,          // Mock array filled with objects
    countryNameMixin,       // Converts country code to country name
    extractSubArrayMixin,   // Creates new categorized sub-arrays from the mockDataMixin array for each key-value type in the nested objects
    sortbyFrequencyMixin,   // Sort array in order of most to least common frequency.
  ],
};
</script>

<style>
.frequency-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.frequency-section span {
  height: 256px;
  width: 212px;
  padding: 8px;
  margin: 16px 4px;
  border: 2px solid #999;
  border-radius: 3px;
}

.country-table {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

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
