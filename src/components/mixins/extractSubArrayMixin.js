export default {
  // Creates new sub-arrays from the specified key-value pairs in all objects
  name: 'extractSubArrayMixin',
  data() {
    return {
      // extractSubArray: [],
    }
  },
  computed: {
    buzzwordArray: function() {
      let inputArray = this.exampleArray.map(el => el.buzzword);
      // this.extractSubArray.push(inputArray);
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
}