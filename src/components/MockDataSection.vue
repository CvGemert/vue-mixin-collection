<template>
  <div>
    <p>The array itself has also been implemented as a mixin. It can be found in: <code>src/components/mixins/mockDataMixin.js</code>.</p>
    <p>All data has been randomly generated (see resources).</p>
    <h4>Sample:</h4>
    <div class="usage-code-example">
      example_array: [
      <div class="example-line">
        { buzzword: 're-contextualized', primary: false, age: '25_34', gender: 'male', city: 'Yichun', country: 'CN', timestamp: '2019-04-24T04:58:07Z' },<br><br>
        { buzzword: 'synergistic', primary: true, age: '45_60', gender: 'female', city: 'New York', country: 'US', timestamp: '2019-05-02T15:51:09Z' },<br><br>
        { buzzword: 'team-oriented', primary: true, age: '35_44', gender: 'male', city: 'Amsterdam', country: 'NL', timestamp: '2018-11-08T14:36:37Z' },<br>
      </div>
      ]
    </div>
  </div>
</template>

<style>
.example-line {
  margin-left: 16px;
}
.usage-code-example {
  padding: 8px 16px;
  margin: 8px 0;
  background: #333;
  border: 2px solid #f55e41;
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
  line-height: 1.8em;
  font-family: monospace;
  font-size: 14px;
  color: #aeded4;
}
</style>
