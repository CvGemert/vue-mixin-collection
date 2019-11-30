<template>
  <div class="usage-code-example">
    audience_array: [
    <div class="example-line">
      { tag:"tagname", original:false, age:"15_24", gender:"Male", city:"Amsterdam", country:"NL", timestamp:"2018-11-28T16:28:13Z" },
    </div>
    <div class="example-line">{ etc. },</div>
    <div class="example-line">{ etc. },</div>]
  </div>
</template>

<style>
.example-line {
  margin-left: 16px;
}
.usage-code-example {
  padding: 0 20px;
  margin: 8px 0;
  background: #333;
  border: 2px solid #f55e41;
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
  line-height: 1.8em;
  font-family: monospace;
  font-size: 12px;
  color: #aeded4;
}
</style>
