export default {
  // Sort array in order of most to least common frequency. Uses arrays from exctractSubArrayMixin.js
  name: 'sortbyFrequencyMixin',
  computed: {
    sortbyFrequencyBuzzword: function() {
      let counts = this.buzzwordArray.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      let top10 = Object.keys(counts).sort((c, d) => counts[d] - counts[c]);
      return top10;
    },
    sortbyFrequencyAge: function() {
      let counts = this.ageArray.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      let top10 = Object.keys(counts).sort((c, d) => counts[d] - counts[c]);
      return top10;
    },
    sortbyFrequencyGender: function() {
      let counts = this.genderArray.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      let top10 = Object.keys(counts).sort((c, d) => counts[d] - counts[c]);
      return top10;
    },
    sortbyFrequencyCity: function() {
      let counts = this.cityArray.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      let top10 = Object.keys(counts).sort((c, d) => counts[d] - counts[c]);
      return top10;
    },
    sortbyFrequencyCountry: function() {
      let counts = this.countryArray.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      let top10 = Object.keys(counts).sort((c, d) => counts[d] - counts[c]);
      return top10;
    },
  },
}