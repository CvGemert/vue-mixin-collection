export default {
  
  name: 'extractSubArrayMixin',
  computed: {
      
    // Creates 1 single array containing multiple sub-arrays composed of the specified key-value pairs in all objects
    categorizedArray: function() {
      let buzzwordArray = this.exampleArray.map(el => el.buzzword);
      let primaryArray = this.exampleArray.map(el => el.primary);
      let ageArray = this.exampleArray.map(el => el.age);
      let genderArray = this.exampleArray.map(el => el.gender);
      let cityArray = this.exampleArray.map(el => el.city);
      let countryArray = this.exampleArray.map(el => el.country);
      let timestampArray = this.exampleArray.map(el => el.timestamp);

      let totalArray = [];
      totalArray.push(buzzwordArray, primaryArray, ageArray, genderArray, cityArray, countryArray, timestampArray);
      
      return totalArray;
    },

    // Creates new seperated sub-arrays from the specified key-value pairs in all objects
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
}