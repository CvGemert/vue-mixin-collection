<template>
  <div>
    <h1>Special thanks</h1>
    <p>Some parts of this project contains work originally done by other people than me:</p>
    
    <div class="thanks-bro-section">
      <h3><a href="https://sarahdrasnerdesign.com/" target="_blank">Sarah Drasner:</a></h3>
      <ul>
        <li><a href="https://github.com/sdras/array-explorer" target="_blank">Array explorer</a> (MIT License)</li>
        <li><a href="https://github.com/sdras/object-explorer" target="_blank">Object explorer</a> (MIT License)</li>
      </ul>
      <b>What was used:</b><br>
      <i>General inspiration for this project</i> | <i>Multiple code snippets</i> | <i>Some of the text content</i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'thanksBro',
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
}
.thanks-bro-section {
  padding: 32px 16px;
  margin: 64px;
  border-top: 2px solid #999;
  border-bottom: 2px solid #999;
}
</style>
